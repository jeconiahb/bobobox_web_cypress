import Logger from "../../components/logger/logger";
import HomePageHelper from "../../page-objects/home-page/home-page-helper";
import LoginPageHelper from "../../page-objects/sign-in-page/sign-in-page-helper";

describe('C-1: User should be able to login with correct credentials', () => {
    beforeEach('Precondition - Navigate to Site', () => {
        LoginPageHelper.navigate()
    });

    it ('1: Login Test Case - Login with invalid credentials', () => {
        Logger.stepNumber(1)
        Logger.stepAction('Go to login page')
        HomePageHelper.verifyLogin();
        HomePageHelper.clickLogin();
        LoginPageHelper.verifyUsernameTextboxIsVisible();

        Logger.stepNumber(2)
        Logger.stepAction('Enter invalid credentials')
        LoginPageHelper.enterInvalidUsername();
        LoginPageHelper.enterInvalidPassword();
    })

    it ('2: Login Test Case - Login with valid credentials', () => {
        Logger.stepNumber(1)
        Logger.stepAction('Go to login page')
        HomePageHelper.verifyLogin();
        HomePageHelper.clickLogin();
        LoginPageHelper.verifyUsernameTextboxIsVisible();
        
        Logger.stepNumber(2)
        Logger.stepAction('Enter invalid credentials')
        LoginPageHelper.enterValidCredentialAndLogin();
    })
});
