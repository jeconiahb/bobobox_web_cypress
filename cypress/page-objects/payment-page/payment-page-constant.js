export class SamplePageConstant {
    constructor() {
        this.url = '';

        // this.invalidLoginMessage = 'These credentials do not match our records.';

        this.method = Object.freeze({
            virtualAcount: "Virtual Account",
            eMoney: "E-money",
            cc: "Credit Card",
            qris: "QRIS",

        });

        this.label = Object.freeze({
            va_bca: "bca_va",
            va_mandiri: "mandiri_va",
            va_bni: "bni_va",
            va_bri: "bri_va",
            va_permata: "permata_va",
            va_snapBCA: "snap_bca_va",
            eMoney_ovo: "ovo",
            eMoney_linkAja: "linkaja",
            eMoney_dana: "dana",
            eMoney_shopee: "shopeepay",
            eMoney_jenius: "jeniuspay",
            qris: "qris",
        });
    }
}
