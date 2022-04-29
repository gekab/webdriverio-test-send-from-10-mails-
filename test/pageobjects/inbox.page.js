const mainPage = require('../pageobjects/main.page');

class InboxUkrNetPage {

    get buttonSendLetterInbox () {
        return $("[class='button primary compose']");
    }

    get buttonSendLetterNow () {
        return $(".controls .button.primary.send");
    }
    
    get inputToField () {
        return $('[name="toFieldInput"]')
    }
    
    get inputSubject () {
        return $('[name="subject"]')
    }

    get inputLetterBodyFrame () {
        return $('[id="tinymce"]')
    }

    get frameBodyNewLetter () {
        return $('[id*="mce_"][src=" about:blank"][allowtransparency="true"]') 
    }

    // Написати ще
    get buttonRepeatNewLetter () {
        return $("[class='button primary']")
    }

    //поиск 
    get inputSearch () {
        return $("[class='search'] [placeholder='Пошук']")
    }

    //поиск ссылка расширенный
    get inputSearchMore () {
        return $("[class='search__more link1']")
    }


    // Вхідні
    get linkIncomingLetterInbox () {
        return $('[href="#msglist/f0/p0"] [class="sidebar__list-link-name"]');
    }

    // кнопка "Скасувати" написання нового листа
    get buttonCancelNewLetter () {
        return $('[class="text-button action"]');
    }

    // Розширений пошук - общий поиск
    get inputAllModalSearch () {
        return $('[class="field-input-wrap"] input[name="contains"]');
    }

    // Розширений пошук - Від
    get inputFromModalSearch () {
        return $('[class="field-input-wrap"] [name="from"]');
    }

    // Розширений пошук - Кому
    get inputToModalSearch () {
        return $('[class="field-input-wrap"] [name="to"]');
    }

    // Розширений пошук - В папках
    get linkInFolderToModalSearch () {
        return $('[class="search-advanced__folders-button"]');
    }


    //  чекбокс Вхідні
    get checkboxIncomingInFolderToModalSearch () {
        return $('[class="search-advanced__folders"] label:nth-of-type(2) input');
    }

    // чекбокс В папках, крім
    get checkboxFolderExceptToModalSearch () {
        return $('[class="search-advanced__folders-picker"] label:nth-of-type(1) span[class="checkbox noselect"]');
    }

    // кнопка Пошук в Розширений пошук модалка
    get buttonSearchToModalSearch () {
        return $('[class="search-advanced__footer"] [class="default button primary"]');
    }

    // Листів на сторінці
    get countLetterInPage () {
        return $('[class="msglist__controls-paging"] [class="pager__count"] span');
    } 

    // чекбокс все письма
    get checkboxAllLettersInboxPage () {
        return $('[class="msglist__checkbox"] [class="checkbox"] input[type="checkbox"]');
    } 

    // чекбокс первое сверху письмо
    get checkboxFirstLetterInboxPage () {
        return $('tbody tr:first-child td:first-child input[type="checkbox"]');
    } 

    // кнопка ссылка Видалити письмо
    get linkDeleteLetterInboxPage () {
        return $('[class="controls-link remove"]');
    } 

    // ссылка Входящие
    get linkInboxInboxPage () {
        return $('[class="sidebar__list-link inbox has-unread sidebar__unseen-remove-slow current"]');
    } 

    // выпадающий список Все чекбоксы
    get dropDownAllCheckBoxInboxPage () {
        return $('[class="screen__head msglist__controls-container"] div:first-child div:first-child span[class="arrow-down"]');
    } 

    // выпадающий список Все чекбоксы меню Все
    get dropDownAllAllCheckBoxInboxPage () {
        return $('[class="screen__head msglist__controls-container"] div:first-child div:first-child span[class="arrow-down"]');
    } 

    // ссылка Чернетки
    get linkDraftsInboxPage () {
        return $('[class="screen__head msglist__controls-container"] div:first-child div:first-child span[class="arrow-down"]');
    } 

    // Чернетки
    async clickLinkDraftsInboxPage () {
        await this.linkDraftsInboxPage.click();
    }

    // выпадающий список Все чекбоксы меню Все
    async clickDropDownAllAllCheckBoxInboxPage () {
        await this.dropDownAllAllCheckBoxInboxPage.click();
    }

    // выпадающий список Все чекбоксы
    async clickDropDownAllCheckBoxInboxPage () {
        await this.dropDownAllCheckBoxInboxPage.click();
    }

    // ссылка Входящие
    async clickLinkInboxInboxPage () {
        await this.linkInboxInboxPage.click();
    }

    // кнопка ссылка Видалити письмо
    async clickLinkDeleteLetterInboxPage () {
        await this.linkDeleteLetterInboxPage.click();
    }

    // чекбокс первое сверху письмо
    async clickCheckboxFirstLetterInboxPage () {
        await this.checkboxFirstLetterInboxPage.click();
    }

    // чекбокс все письма
    async clickCheckboxAllLettersInboxPage () {
        await this.checkboxAllLettersInboxPage.click();
    }
    
    // Листів на сторінці
    async getTextCountLetterInPage () {
        await this.countLetterInPage.getHTML(false);
    }

    // Розширений пошук - Кому
    async setValueInputToModalSearch () {
        await this.inputToModalSearch.setValue();
    }

    // Розширений пошук - В папках
    async clickLinkInFolderToModalSearch () {
        await this.linkInFolderToModalSearch.click();
    }

    // Розширений пошук - общий поиск
    async setValueInputAllModalSearch (val) {
        await this.inputAllModalSearch.setValue(val);
    }

    // Розширений пошук - Від
    async setValueInputFromModalSearch (val) {
        await this.inputFromModalSearch.setValue(val);
    }

    // кнопка Пошук в Розширений пошук модалка
    async clickbuttonSearchToModalSearch () {
        await this.buttonSearchToModalSearch.click();
    }

    //  чекбокс В папках, крім
    async clickCheckboxFolderExceptToModalSearch () {
        await this.checkboxFolderExceptToModalSearch.click();
    }

    //  чекбокс Вхідні
    async clickСheckboxIncomingInFolderToModalSearch () {
        await this.checkboxIncomingInFolderToModalSearch.click();
    }

    async inputSearchMoreClick () {
        await this.inputSearchMore.click();
    }

    async inputSearchClick () {
        await this.inputSearch.click();
    }

    async clickButtonRepeatNewLetter () {
        await this.buttonRepeatNewLetter.click();
    }

    //  кнопка "Скасувати" написання нового листа
    async clickButtonCancelNewLetter () {
        await this.buttonCancelNewLetter.click();
    }

    async setValueInputToField (val) {
        await this.inputToField.setValue(val);
    }

    async setValueInputSubject (val) {
        await this.inputSubject.setValue(val);
    }

    async setValueInputLetterBodyFrame (val) {
        await this.inputLetterBodyFrame.setValue(val);
    }

    async switchToFrameInputLetterBody () {
        await browser.switchToFrame(await this.frameBodyNewLetter);
    }

    async clickButtonSendLetterInbox () {
        await this.buttonSendLetterInbox.click();
    }

    async clickButtonSendLetterNowInbox () {
        await this.buttonSendLetterNow.click();
    }

    async openInboxUkrNet () {
        await browser.url('https://mail.ukr.net/');
    }

    async myWaitUntil (seleAny) {
        await browser.waitUntil(async function () {
            return await seleAny.isEnabled()
        }, {
            timeout: 5000,
            timeoutMsg: 'sidebar is not Enabled'
        });
        return await seleAny.isEnabled();
    }

    async writeLetterToRecipient (email, subject, letter) {
        await this.setValueInputToField(email);
        await this.setValueInputSubject(subject);
        await browser.pause(2000);
        await this.switchToFrameInputLetterBody();
        await this.setValueInputLetterBodyFrame(letter);
        await browser.pause(2000);
        await browser.switchToParentFrame();
        await this.clickButtonSendLetterNowInbox();
        await browser.pause(2000);
        await this.clickButtonRepeatNewLetter();
        await browser.pause(2000);
    }

}

module.exports = new InboxUkrNetPage();
