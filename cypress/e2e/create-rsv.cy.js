import Logger from "../components/logger/logger";
import HomePageConstant from "../page-objects/home-page/home-page-constant";
import HomePageHelper from "../page-objects/home-page/home-page-helper";
import LoginPageHelper from "../page-objects/sign-in-page/sign-in-page-helper";

const constant = new HomePageConstant();

describe('User should be able to create a reservation', () => {
    beforeEach('Precondition - Navigate to Site', () => {
        LoginPageHelper.navigateToSiteAndLogin()
    });

    it ('1: Create a reservation in bobocabin cikole', () => {
        Logger.stepNumber(1)
        Logger.stepAction('Search for bobocabin cikole')
        HomePageHelper.bookCabin(constant.bobocabin.cikole);

        Logger.stepNumber(2)
        Logger.stepAction('See rooms and chose 1 room')
        
    })
});
