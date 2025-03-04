export class RegisterPageElement {
    static get credentials() {
        return {
            get usernameTextbox() {
                return '//input[@placeholder="Input your email here"]';
            },
            get passwordTextbox() {
                return '//input[@placeholder="Input your password here"]';
            }
        };
    }

    static get createAccButton() {
        return '//button[@id="registerButton"]';
    }

    static get changetoPhone() {
        return '//span[normalize-space()="Use Phone Number?"]';
    }
    
    static get changetoEmail() {
        return '//span[normalize-space()="Use Email?"]';
    }
    
    static get emailField() {
        return '//input[@placeholder="Input your email here"]';
    }
    
    static get phoneField() {
        return '//div[contains(@class,"w-full rounded-lg border border-chalky-60 p-2 focus-within:border-pelarous-50 focus-within:outline-none focus-within:ring-1 focus-within:ring-pelarous-50")]';
    }
    
    

    // static get invalidLoginMessage() {
    //     return '//div[@role="alert"]';
    // }
}
