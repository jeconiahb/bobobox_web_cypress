import ElementHelper from "../../components/element-helper";
import Logger from "../../components/logger/logger";
import { ScrollHelper } from "../../components/scroll-helper";
import { VerificationHelper } from "../../components/verification-helper";
import { WaitHelper } from "../../components/wait-helper";
import { PaymentPageConstant } from "./payment-page-constant";
import { PaymentPageElement } from "./payment-page-element";

const constant = new PaymentPageConstant();
const elem = PaymentPageElement;

class PaymentPageHelper {
    static verifyContinueBtn() {
        Logger.helper("Verifying if the COntinue button is visible");
        VerificationHelper.isVisible(elem.continuePaymentBtn);
    }

    static clickContinueBtn() {
        Logger.helper("Clicking the Continue button");
        ElementHelper.click(elem.continuePaymentBtn);
    }
    
    static verifyBackBtn() {
        Logger.helper("Verifying if the Back button is visible");
        VerificationHelper.isVisible(elem.backToRoomBtn);
    }

    static clickBackBtn() {
        Logger.helper("Clicking the Back button");
        ElementHelper.click(elem.backToRoomBtn);
    }

    static verifyPayBtn() {
        Logger.helper("Verifying if the Pay button is visible");
        VerificationHelper.isVisible(elem.payBtn);
    }

    static clickPayBtn() {
        Logger.helper("Clicking the Pay button");
        ElementHelper.click(elem.payBtn);
    }

    static verifyEmoneyList() {
        Logger.helper("Verifying if the E-money list is visible");
        VerificationHelper.isVisible(elem.paymentMethod.e_money.root);
    }

    static clickEmoneyList() {
        Logger.helper("Clicking the Emoney List");
        ElementHelper.click(elem.paymentMethod.e_money.root);
    }
    
    static verifyDana() {
        Logger.helper("Verifying if the Dana is visible");
        VerificationHelper.isVisible(elem.paymentMethod.e_money.option(constant.label.eMoney_dana));
    }

    static clickDana() {
        Logger.helper("Clicking the Dana");
        ElementHelper.click(elem.paymentMethod.e_money.option(constant.label.eMoney_dana));
    }
    
    static verifyTncCheck() {
        Logger.helper("Verifying if the Tnc Checkbox is visible");
        VerificationHelper.isVisible(elem.tncCheck);
    }

    static clickTncCheck() {
        Logger.helper("Clicking the Tnc Checkbox");
        ElementHelper.click(elem.tncCheck);
    }
    
    static verifyContinueTnc() {
        Logger.helper("Verifying if the Continue to Payment button is visible");
        VerificationHelper.isVisible(elem.continuePaymentTncBtn);
    }

    static clickContinueTnc() {
        Logger.helper("Clicking the Continue to Payment button");
        ElementHelper.click(elem.continuePaymentTncBtn);
    }

    static verifyXenditProceedBtn() {
        Logger.helper("Verifying if the Continue to Payment button is visible");
        VerificationHelper.isVisible(elem.xenditProceedBtn);
    }

    static clickXenditProceedBtn() {
        Logger.helper("Clicking the Continue to Payment button");
        ElementHelper.click(elem.xenditProceedBtn);
    }

    static flowPayment() {
        this.verifyContinueBtn();
        this.clickContinueBtn();
        this.verifyEmoneyList();
        this.clickEmoneyList();
        WaitHelper.wait();
        ScrollHelper.toBottom();
        this.verifyDana();
        this.clickDana();
        this.verifyPayBtn();
        this.clickPayBtn();
        this.verifyTncCheck();
        this.clickTncCheck();
        this.verifyContinueTnc();
        this.clickContinueTnc();
        WaitHelper.wait();
        this.verifyXenditProceedBtn();
        this.clickXenditProceedBtn();
    }
}

export default PaymentPageHelper