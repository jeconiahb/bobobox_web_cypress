export class LoginPageConstant {
    constructor() {
        this.url = 'https://boboboxservice.com/';

        // this.invalidLoginMessage = 'These credentials do not match our records.';

        this.validCredentials = Object.freeze({
            username: 'automation@mailinator.com',
            password: '123123123',
        });

        this.invalidCredentials = Object.freeze({
            username: 'adminwrong@themesbrand.com',
            password: '12345',
        });
    }
}
