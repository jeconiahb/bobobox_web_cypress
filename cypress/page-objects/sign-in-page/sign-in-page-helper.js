import ElementHelper from "../../components/element-helper";
import Logger from "../../components/logger/logger";
import PageHelper from "../../components/page-helper";
import { TextboxHelper } from "../../components/textbox-helper";
import { VerificationHelper } from "../../components/verification-helper";
import { LoginPageConstant } from "./sign-in-page-constant";
import { LoginPageElement } from "./sign-in-page-element";

const constant = new LoginPageConstant();
const elem = LoginPageElement;

class LoginPageHelper {
    static navigate() {
        Logger.helper("Navigating to Login Page");
        PageHelper.navigate(constant.url);
    }

    static verifyUsernameTextboxIsVisible() {
        Logger.helper("Verifying username textbox is visible on the Login Page");
        VerificationHelper.isVisible(elem.credentials.usernameTextbox);
    }

    static enterUsername(username) {
        Logger.helper(`Entering username: ${username}`);
        TextboxHelper.type(elem.credentials.usernameTextbox, username);
    }

    static enterPassword(password) {
        Logger.helper(`Entering password: ********`); // Jangan log password untuk keamanan
        TextboxHelper.type(elem.credentials.passwordTextbox, password);
    }

    static clickLogin() {
        Logger.helper("Clicking the Login button");
        ElementHelper.click(elem.loginButton);
    }

    static enterCredential(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
    }

    static enterCredentialsAndClickLogin(username, password) {
        this.enterCredential(username, password);
        this.clickLogin();
    }

    static enterValidCredentialAndLogin() {
        Logger.helper("Logging in with valid credentials");
        this.enterCredentialsAndClickLogin(
            constant.validCredentials.username,
            constant.validCredentials.password
        );
    }

    static enterInvalidPassword() {
        Logger.helper("Attempting login with valid username and invalid password");
        this.enterCredentialsAndClickLogin(
            constant.validCredentials.username,
            constant.invalidCredentials.password
        );
    }

    static enterInvalidUsername() {
        Logger.helper("Attempting login with invalid username and valid password");
        this.enterCredentialsAndClickLogin(
            constant.invalidCredentials.username,
            constant.validCredentials.password
        );
    }

    static verifyAlertMessageForInvalidLogin() {
        Logger.helper("Verifying alert message for invalid login attempt");
        VerificationHelper.isVisible(elem.invalidLoginMessage);
    }

    static navigateToSiteAndLogin() {
        Logger.helper("Navigating to site and logging in");
        this.navigate();
        this.enterValidCredentialAndLogin();
    }
}

export default LoginPageHelper;