export class LoginPageElement {
    static get credentials() {
        return {
            get usernameTextbox() {
                return '//input[contains(@placeholder, "email")]';
            },
            get passwordTextbox() {
                return '//input[contains(@placeholder, "password")]';
            }
        };
    }

    static get loginButton() {
        return '//button[@id="loginButton"]';
    }

    // static get invalidLoginMessage() {
    //     return '//div[@role="alert"]';
    // }
}
