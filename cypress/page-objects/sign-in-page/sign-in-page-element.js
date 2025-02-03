export class LoginPageElement {
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

    static get loginButton() {
        return '//button[@id="loginButton"]';
    }

    // static get invalidLoginMessage() {
    //     return '//div[@role="alert"]';
    // }
}
