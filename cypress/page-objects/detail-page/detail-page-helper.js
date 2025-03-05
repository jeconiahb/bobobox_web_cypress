import ElementHelper from "../../components/element-helper";
import Logger from "../../components/logger/logger";
import { VerificationHelper } from "../../components/verification-helper";
import { DetailPageConstant } from "./detail-page-constant";
import { DetailPageElement } from "./detail-page-element";

const constant = new DetailPageConstant();
const elem = DetailPageElement;

class DetailPageHelper {
    static verifySeeBtn() {
        Logger.helper("Verifying if the See Rooms button is visible");
        VerificationHelper.isVisible(elem.seeRoomsButton);
    }

    static clickSeeBtn() {
        Logger.helper("Clicking the Login button");
        ElementHelper.click(elem.seeRoomsButton);
    }

}

export default DetailPageHelper