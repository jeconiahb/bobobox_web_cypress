export class LoginPageConstant {
    constructor() {
        this.url = Cypress.env("url"); // Ambil URL dari env

        this.validCredentials = Object.freeze({
            username: Cypress.env("username"), // Ambil username dari env
            password: Cypress.env("password"), // Ambil password dari env
        });

        this.invalidCredentials = Object.freeze({
            username: 'adminwrong@themesbrand.com',
            password: '12345',
        });
    }
}

// export class LoginPageConstant {
//     constructor() {
//         this.url = 'https://boboboxservice.com/';
//         this.url = 'https://bobobox.com/';

//         this.validCredentials = Object.freeze({
//             username: 'jeki@mail.com',
//             password: 'Password1',
//         });  //staging

//         this.validCredentials = Object.freeze({
//             username: 'automation@mailinator.com',
//             password: 'Password1',
//         });   //prod

//         this.invalidCredentials = Object.freeze({
//             username: 'adminwrong@themesbrand.com',
//             password: '12345',
//         });
//     }
// }
