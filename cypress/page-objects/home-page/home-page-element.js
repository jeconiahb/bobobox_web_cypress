export class HomePageElement {
    
    static get loginButton() {
        return '//a[normalize-space()="Log in"]';
    }
    
    static get registerButton() {
        return '//a[normalize-space()="Register"]';
    }
    
    static get searchStay() {
        return {
            get podButton() {
                return '//div[contains(@id, "headlessui-radiogroup-option-:")]//span[contains(text(), "Bobopod")]';
            },
            get cabinButton() {
                return '//div[contains(@id, "headlessui-radiogroup-option-:")]//span[contains(text(), "Bobocabin")]';
            },
            get locationDropdown() {
                return '//div//span[contains(text(), " Location")]';
            },
            get checkinDate() {
                return '//label[contains(normalize-space(), "Check-in")]//following-sibling::div[contains(@class, "inline-flex items-center gap-3 py-1.5")]';
            },
            get durationDropdown() {
                return '//label[contains(normalize-space(), "Duration")]//following-sibling::div[contains(@class, "w-full py-2 flex items-center justify-between gap-2")]';
            },
            get searchButton() {
                return '//button[normalize-space()="Search"]';
            },

        };
    }

    static durationOption(duration) {
        return `//li[contains(normalize-space(), "${duration} - Night(s)")]`;
    }

    static locationOption(location) {
        return `//li[contains(normalize-space(), '${location}')]`;
    }

    static closeButton() {
        return "//div[@class='flex items-center justify-between']//*[name()='svg']";
    }


}
