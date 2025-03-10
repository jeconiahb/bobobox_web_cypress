import ElementHelper from "../../components/element-helper";
import Logger from "../../components/logger/logger";
import { ScrollHelper } from "../../components/scroll-helper";
import { VerificationHelper } from "../../components/verification-helper";
import { WaitHelper } from "../../components/wait-helper";
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
        Logger.helper("Clicking the See room button");
        ElementHelper.click(elem.seeRoomsButton);
        WaitHelper.wait();
    }
    
    static verifySelectRoomTitle() {
        Logger.helper("Verify room title is visible");
        ElementHelper.click(elem.selectRoomTitle);
    }

    static scrollToSelectBtn(cabin) {
        Logger.helper("Scroll into select button com into view");
        ScrollHelper.toView(elem.selectRoom(cabin));
    }

    static verifySelectBtn(cabin) {
        Logger.helper("Verify the select button for pod/cabin is visible");
        VerificationHelper.isVisible(elem.selectRoom(cabin))
    }

    static clickSelectBtn(cabin) {
        Logger.helper("Click the select button for pod/cabin");
        ElementHelper.click(elem.selectRoom(cabin))
    }

    static selectStandardCabin() {
        Logger.helper("Attempting to select Standard cabin");
        this.verifySeeBtn();
        this.clickSeeBtn();
        this.verifySelectRoomTitle();
        this.scrollToSelectBtn(constant.cabin.Standard);
        this.verifySelectBtn(constant.cabin.Standard);
        this.clickSelectBtn(constant.cabin.Standard);
        WaitHelper.wait();
    }
}

export default DetailPageHelper