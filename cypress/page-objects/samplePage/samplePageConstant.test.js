export class SamplePageConstant {
    constructor() {
        this.url = '';

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
