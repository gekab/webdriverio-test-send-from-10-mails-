
const fs = require('fs')
const numberOfLetters = 10; //10 mails from current box 
const lenOfString = 10; //Random string with 10 symbols  
const dataInFile = './test/inbox/emails.txt'; // email address file

const modulPage = require('../pageobjects/commons.page');
const inboxPage = require('../pageobjects/inbox.page');
const mainPage = require('../pageobjects/main.page');


describe('Sign Up Test #1', () => {
    it('1. Login to any email box', async () => {
        // 1. Login to any email box.
        await mainPage.openUkrNet();
        let frameLogin = await $('//iframe[@name="mail widget"]');
        await browser.switchToFrame(frameLogin);
        await mainPage.setValueInputLogin();
        await mainPage.setValueInputPassword();
        await mainPage.clickButtonSubmit();
        await mainPage.clickLinkInbox();
        await mainPage.switchInboxUkrNet();
        console.log('Current Page is: ' + await browser.getTitle());

    });

    it('2.	Send from 10 mails from current box to yourself', async () => {
        //2.	Send from 10 mails from current box to yourself 
        await inboxPage.myWaitUntil( await inboxPage.buttonSendLetterInbox);
        await inboxPage.clickButtonSendLetterInbox();
        await browser.pause(2000);

        let data = modulPage.readDataFromFile(dataInFile)
        let arrayEmails = modulPage.getArrayData(data);
        for(let i = 0; i < numberOfLetters; i++){
            let email = arrayEmails[0];
            let subject = modulPage.createRandomString(lenOfString);
            let letter = modulPage.createRandomString(lenOfString);
            await inboxPage.writeLetterToRecipient(email, subject, letter);
        }
        //сохраняем число кол-во писем отправленных в этом тесте. Это число используется
        // в последующих тестах
        modulPage.writeDataToFile('./test/inbox/numofletterrs.txt', numberOfLetters.toString());
        await browser.pause(2000);
    });

    it('3.	Check that all 10 mails are delivered', async () => {
        //3.	Check that all 10 mails are delivered.
        let stringInFile = modulPage.readDataFromFile(dataInFile)
        let email = modulPage.getArrayData(stringInFile);
        email = email[0]
        await inboxPage.inputSearchClick();
        await browser.pause(2000);
        await inboxPage.inputSearchMoreClick(); 
        await inboxPage.setValueInputFromModalSearch(email);
        await inboxPage.setValueInputToModalSearch(email);
        await inboxPage.clickLinkInFolderToModalSearch();
        await inboxPage.clickСheckboxIncomingInFolderToModalSearch();
        await inboxPage.clickbuttonSearchToModalSearch();
        await browser.pause(2000);
        //берем значение со страницы Входящие о кол-ве писем
        let amountLetterInbox = await inboxPage.countLetterInPage.getHTML(false);
        let amountLetterInFile = modulPage.readDataFromFile('./test/inbox/numofletterrs.txt')
    
        amountLetterInbox = amountLetterInbox.slice(-2);
        console.log('Все письма пришли: ' + Boolean(Number(amountLetterInbox) - Number(amountLetterInFile)));
        await browser.pause(2000);

    });


    it('4.	Collect data from all incoming mails and save it as Object (Dictionary)', async () => {
        //4.	Collect data from all incoming mails and save it as Object (Dictionary), where:
        //        •	Key is theme of mail
        //        •	Value is body of mail
        
        let amountLetterInFile = modulPage.readDataFromFile('./test/inbox/numofletterrs.txt')
        let str1 = '//tbody/tr['
        let str2 = ']/td[4]/a[2]'
        let bigString = ''
        let locator = ''
        let select = ''
        let allLettersObj = {}
        //заполняем словарик
        for(let i = 1; i <= amountLetterInFile; i++){
            locator = str1 + i.toString() + str2;
            select = await $(locator);
            bigString = await select.getText()
            bigString = bigString.split('  ');
            allLettersObj[bigString[0]] = bigString[1];
            //console.log('Letter #' + i + ': ' + 'Subject ' + bigString[0] + ', letter ' + bigString[1])
        }
        
        json = JSON.stringify(allLettersObj); //объект в строку
        modulPage.writeInJsonFile('./test/json/lettersjsonfile.json', json);
    })

    it('5.	Send collected data to yourself: ', async () => {
        /** 5.	Send collected data to yourself as: “Received mail on theme {Theme} with message: {Body}. 
         * It contains {Count of letters} letters and {Count of numbers} numbers” (repeat for each mail).*/
        let stringInFile = modulPage.readDataFromFile(dataInFile)
        let email = modulPage.getArrayData(stringInFile);
        email = email[0]
        await inboxPage.myWaitUntil( await inboxPage.buttonSendLetterInbox);
        await inboxPage.clickButtonSendLetterInbox();
        await browser.pause(3000);
        let allLettersObj;
        console.log('------------------OPEN FILE-----------------------------');

        let data = fs.readFileSync('./test/json/lettersjsonfile.json', 'utf8');
        allLettersObj = JSON.parse(data); //строку в объект

        for (let lett in allLettersObj){
            console.log(allLettersObj[lett]);
            let charNumber = modulPage.culcCharNumber(allLettersObj[lett]);
            await inboxPage.writeLetterToRecipient(email, 'Received mail on theme: ' + lett, 'It contains letters: ' +  charNumber[0] + ' and ' + charNumber[1] + ': numbers');
        }
    })

    it('6.	Delete all received mails except the last one.', async () => {
        await inboxPage.clickButtonCancelNewLetter();
        await browser.pause(1000);
        await browser.url(await browser.getUrl());
        let arrayLocators = modulPage.arrayLocatorsInboxLetters(2, numberOfLetters * 2);
        for(let i = 2; i < numberOfLetters * 2 + 1; i++){
            await $(arrayLocators[i - 2]).click();

        }
        await browser.pause(3000);
        await inboxPage.clickLinkDeleteLetterInboxPage();
        await browser.pause(5000);

    })
});
