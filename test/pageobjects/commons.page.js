const fs = require('fs')

class ModulPage {

    //создает рандомную строку из букв и цифр
    createRandomString = (num) => {
        let arr = 'abcdiefghjklmnopqrstuvwxyz1234567890'
        let str = ''
        while (str.length <num + 1){
            str += arr[Math.floor(Math.random() * 36)]
        }
        str = str.slice(-num)
        return str
    }

    //чтение из файла
    readDataFromFile = (filename) => {
            try {
            const data = fs.readFileSync(filename, 'utf8')
            return data
            } catch (err) {
            console.error(err)
            }
    }

    //запись в файл
    writeDataToFile = (filename, content) => {
        try {
        fs.writeFileSync(filename, content, { flag : 'w+' })
        //file written successfully
        } catch (err) {
        console.error(err)
        }
    }
    
    //метод разбивает строку на массив
    getArrayData = (stringData) => {
        let arr2 = stringData.split(',');
        for(let i = 0; i < arr2.length; i++){
            arr2[i] = arr2[i].trim()
        }
        return arr2
    
    }

    //метод вовзращает true если символ число от 0 до 9
    isNumber = (char) => {
        if (Number(char) || char === '0'){
            return true
        }
        else {
            return false
        }
    }

    //возврщает массив со знвчениеми [0]- кол-во чисел, [1]- кол-во символов(не чисел)
    culcCharNumber = (word) => {
        let n = 0;
        let s = 0;
        for (let i = 0; i < word.length; i++){
            console.log(word[i]);
            if (this.isNumber(word[i]) == true){
                n++
            }
            else {s++}
    
        }
        return [n, s]
    };

    //запись в Json File
    writeInJsonFile = (jsfile, json) => {
        fs.writeFile(jsfile, json, err=>{
            if(err){
              console.log("Error writing file" ,err)
            } else {
              console.log('JSON data is written to the file successfully')
            }
        })
    }

    //метод создает массив локаторов
    arrayLocatorsInboxLetters = (start, end) => {
        let arr = []
        for (let i = 0; i < end - start + 1; i++){
            arr.push(`tbody tr:nth-child(${i + start}) input[type="checkbox"]`)
        }
        return arr
    }
}
module.exports = new ModulPage();