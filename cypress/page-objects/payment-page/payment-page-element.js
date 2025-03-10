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
                    option: (payment) => `${root}//label[@for='${payment}']`
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

    static paymentMethod(payment) {
        return `//a[normalize-space()='${payment}']`
    }

    static paymentSelect(payment) {
        return `//label[@for='${payment}']`
    }

    static payBtn(){
        return "//button[contains(@class, 'btn-block bbx-mt-1 btn bbx-btn__high px-4 bbx-text__700 btn-bbx-payment')]"
    }

    // static get invalidLoginMessage() {
    //     return '//div[@role="alert"]';
    // }
}
