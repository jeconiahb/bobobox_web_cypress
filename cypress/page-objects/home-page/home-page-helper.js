import ElementHelper from "../../components/element-helper";
import Logger from "../../components/logger/logger";
import { VerificationHelper } from "../../components/verification-helper";
import HomePageConstant from "./home-page-constant";
import { HomePageElement } from "./home-page-element";

const constant = new HomePageConstant();
const elem = HomePageElement;

class HomePageHelper {
    static verifyLogin() {
        Logger.helper("Verifying if the Login button is visible");
        VerificationHelper.isVisible(elem.loginButton);
    }

    static clickLogin() {
        Logger.helper("Clicking the Login button");
        ElementHelper.click(elem.loginButton);
    }

    static verifyRegister() {
        Logger.helper("Verifying if the Register button is visible");
        VerificationHelper.isVisible(elem.registerButton);
    }

    static clickRegister() {
        Logger.helper("Clicking the Register button");
        ElementHelper.click(elem.registerButton);
    }

    static verifyPodButton() {
        Logger.helper("Verifying if the Pod button is visible");
        VerificationHelper.isVisible(elem.searchStay.podButton);
    }

    static clickPodButton() {
        Logger.helper("Clicking the Pod button");
        ElementHelper.click(elem.searchStay.podButton);
    }

    static verifyCabinButton() {
        Logger.helper("Verifying if the Cabin button is visible");
        VerificationHelper.isVisible(elem.searchStay.cabinButton);
    }

    static clickCabinButton() {
        Logger.helper("Clicking the Cabin button");
        ElementHelper.click(elem.searchStay.cabinButton);
    }

    static verifyLocation() {
        Logger.helper("Verifying if the Location dropdown is visible");
        VerificationHelper.isVisible(elem.searchStay.locationDropdown);
    }

    static clickLocation() {
        Logger.helper("Clicking the Location dropdown");
        ElementHelper.click(elem.searchStay.locationDropdown);
    }

    static verifyCheckinDate() {
        Logger.helper("Verifying if the Check-in date field is visible");
        VerificationHelper.isVisible(elem.searchStay.checkinDate);
    }

    static clickCheckinDate() {
        Logger.helper("Clicking the Check-in date field");
        ElementHelper.click(elem.searchStay.checkinDate);
    }

    static verifyDuration() {
        Logger.helper("Verifying if the Duration dropdown is visible");
        VerificationHelper.isVisible(elem.searchStay.durationDropdown);
    }

    static clickDuration() {
        Logger.helper("Clicking the Duration dropdown");
        ElementHelper.click(elem.searchStay.durationDropdown);
    }

    static verifySearchButton() {
        Logger.helper("Verifying if the Search button is visible");
        VerificationHelper.isVisible(elem.searchStay.searchButton);
    }

    static clickSearchButton() {
        Logger.helper("Clicking the Search button");
        ElementHelper.click(elem.searchStay.searchButton);
    }

    static verifyDurationOption(duration) {
        Logger.helper(`Verifying if the Duration option "${duration}" is visible`);
        VerificationHelper.isVisible(elem.durationOption(duration));
    }

    static clickDurationOption(duration) {
        Logger.helper(`Clicking the Duration option "${duration}"`);
        ElementHelper.click(elem.durationOption(duration));
    }

    static verifyLocationOption(location) {
        Logger.helper(`Verifying if the Location option "${location}" is visible`);
        VerificationHelper.isVisible(elem.locationOption(location));
    }

    static clickLocationOption(location) {
        Logger.helper(`Clicking the Location option "${location}"`);
        ElementHelper.click(elem.locationOption(location));
    }

    static verifyCloseButton() {
        Logger.helper("Verifying if the Close button is visible");
        VerificationHelper.isVisible(elem.closeButton);
    }

    static clickCloseButton() {
        Logger.helper("Clicking the Close button");
        ElementHelper.click(elem.closeButton);
    }
}

export default HomePageHelper;
