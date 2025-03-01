import Logger from "../../components/logger/logger";
import HomePageHelper from "../../page-objects/home-page/home-page-helper";
import LoginPageHelper from "../../page-objects/sign-in-page/sign-in-page-helper";

describe('C-1: User should be able to login with correct credentials', () => {
    beforeEach('Precondition - Navigate to Site', () => {
        LoginPageHelper.navigate()
    });

    it ('1: Login Test Case - Login with invalid credentials', () => {
        Logger.stepNumber(1)
        Logger.stepAction('Enter incorrect username and password ')
        // HomePageHelper.verifyLogin();
        HomePageHelper.clickLogin();
        LoginPageHelper.verifyUsernameTextboxIsVisible();
        LoginPageHelper.enterInvalidUsername();
        LoginPageHelper.enterInvalidPassword();
    })

    it ('2: Login Test Case - Login with valid credentials', () => {
        Logger.stepNumber(1)
        Logger.stepAction('Enter incorrect username and password ')
        HomePageHelper.verifyLogin();
        HomePageHelper.clickLogin();
        LoginPageHelper.verifyUsernameTextboxIsVisible();
        LoginPageHelper.enterValidCredentialAndLogin();
    })
});
