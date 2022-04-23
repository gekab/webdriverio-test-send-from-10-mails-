const email = 'evgeny-bondar@ukr.net'
const password = 'yourpassword'

class MainUkrNetPage {

    get pageMain () {
        return $('[alt="WebdriverIO"]');
    }

    //id="id-input-login" [name="login"]
    get inputLogin () {
        return $('[name="login"]');
    }

    //name="password"
    get inputPassword () {
        return $('[name="password"]');
    }

    get buttonSubmit () {
        return $('[class="form__submit"]');
    }

    get linkInbox () {
        return $('[class="service__entry service__entry_mail"]');
    }

    async clickButtonSubmit () {
        await this.buttonSubmit.click();
    }

    async openUkrNet () {
        await browser.url('https://www.ukr.net/');
    }

    async setValueInputLogin () {
        await this.inputLogin.setValue(email);
    }

    async setValueInputPassword () {
        await this.inputPassword.setValue(password);
    }

    async clickLinkInbox () {
        await this.linkInbox.click();
    }

    async switchInboxUkrNet () {
        await browser.switchWindow('https://mail.ukr.net/');
    }



}

module.exports = new MainUkrNetPage();
