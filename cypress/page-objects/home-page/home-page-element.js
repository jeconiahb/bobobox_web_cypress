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
                return '//input[@placeholder="Input your password here"]';
            },
            get searchButton() {
                return '//input[@placeholder="Input your password here"]';
            },

        };
    }

    static get registerButton() {
        return '//a[normalize-space()="Register"]';
    }

    static get registerButton() {
        return '//a[normalize-space()="Register"]';
    }
}
