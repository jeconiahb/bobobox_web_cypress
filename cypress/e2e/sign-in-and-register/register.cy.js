import Logger from "../../components/logger/logger";
import HomePageHelper from "../../page-objects/home-page/home-page-helper";
import LoginPageHelper from "../../page-objects/sign-in-page/sign-in-page-helper";

describe('C-2 User should be able to register',() => {
    beforeEach('Precondition - Navigate to Site', () => {
        LoginPageHelper.navigate()
    });

    it ('1: Register Test Case - Register with invalid credentials', () => {
        Logger.stepNumber(1)
        Logger.stepAction('Go to login page')
        HomePageHelper.verifyRegister();
        HomePageHelper.clickRegister();
        LoginPageHelper.verifyUsernameTextboxIsVisible();

        Logger.stepNumber(2)
        Logger.stepAction('Enter invalid credentials')
        LoginPageHelper.enterInvalidUsername();
        LoginPageHelper.enterInvalidPassword();
    })
})