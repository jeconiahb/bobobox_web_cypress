export class PaymentPageElement {
    static get paymentMethod() {
        return {
            get virtualAccount() {
                const root = "//a[normalize-space()='Virtual Account']";
                return {
                    root,
                    option: (bank) => `${root}//label[@for='${bank}']`
                };
            },
            get e_money() {
                const root = "//a[normalize-space()='E-money']";
                return {
                    root,
                    option: (payment) => `//label[@for='${payment}']`
                };
            },
            get creditCard() {
                return "//a[normalize-space()='Credit Card']";
            },
            get qris() {
                const root = "//a[normalize-space()='QRIS']";
                return {
                    root,
                    option: (provider) => `${root}//label[@for='${provider}']`
                };
            },
        };
    }

    static get continuePaymentBtn() {
        return "//button[contains(text(), 'Continue Payment')]";
    }
    
    static get backToRoomBtn() {
        return "//div[contains(@class, 'cursor-pointer shadow')][contains(text(), 'Back to select rooms')]";
    }

    static get payBtn(){
        return "//div[contains(@class, 'col-12')]/button[contains(@class, 'btn-block')]"
    }
    
    static get tncCheck() {
        return "//input[@id='tnc-check']"
    }
    
    static get continuePaymentTncBtn() {
        return "//button[contains(@class, 'btn-bbx-payment')]//span[contains(text(), 'Continue')]";
    }
    
    static get xenditProceedBtn() {
        return "//button[@id='proceed-button']";
    }
}
