import ElementHelper from "../../components/element-helper";
import Logger from "../../components/logger/logger";
import PageHelper from "../../components/page-helper";
import { TextboxHelper } from "../../components/textbox-helper";
import { VerificationHelper } from "../../components/verification-helper";
import { LoginPageConstant } from "./sign-in-page-constant";
import { LoginPageElement } from "./sign-in-page-element";

const constant = new LoginPageConstant();
const elem = LoginPageElement;

export class LoginPageHelper {
    static navigate() {
        Logger.helper('Open Login Page');
        PageHelper.navigate(constant.url);
    }

    static verifyUsernameTextboxIsVisible() {
        Logger.helper('Verify username textbox in Login Page is visible');
        VerificationHelper.isVisible(elem.credentials.usernameTextbox);
    }

    static enterUsername(username) {
        Logger.helper(`enter username as ${username}`);
        TextboxHelper.type(elem.credentials.usernameTextbox, username);
    }

    static enterPassword(password) {
        Logger.helper(`enter password as ${password}`);
        TextboxHelper.type(elem.credentials.passwordTextbox, password);
    }
    
    static clickLogin() {
        Logger.helper(`click login`);
        ElementHelper.click(elem.loginButton);
    }

    static enterCredential(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
    }

    static enterCredentialsAndClickLogin(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }

    static enterValidCredentialAndLogin() {
        const validUsername = constant.validCredentials.username;
        const validPassword = constant.validCredentials.password;
        this.enterCredentialsAndClickLogin(validUsername, validPassword);
    }

    static enterInvalidPassword() {
        const validUsername = constant.validCredentials.username;
        const invalidPassword = constant.invalidCredentials.password;
        this.enterCredential(validUsername, invalidPassword);
    }

    static enterInvalidUsername() {
        const invalidUsername = constant.invalidCredentials.username;
        const validPassword = constant.validCredentials.password;
        this.enterCredential(invalidUsername, validPassword);
    }

    static verifyAlertMessageForInvalidLogin() {
        Logger.helper('Click Login and Verify message when Invalid Username/Password is provided');
        VerificationHelper.isVisible(elem.invalidLoginMessage);
    }

    static navigateToSiteAndLogin() {
        this.navigate();
        this.enterValidCredentialAndLogin();
    }
}
