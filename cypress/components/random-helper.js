/// <reference types='cypress-xpath' />

export class RandomHelper {
    /**
     * Create a random value between two numbers, 4 digits by default
     * @param {number} [minimum=1000]
     * @param {number} [maximum=9999]
     * @returns {number} a random number
     */
    static getRandomNumber(minimum = 1000, maximum = 9999) {
        const random = () => Cypress._.random(minimum, maximum);
        return random();
    }

    /**
     * Create random text of specified length, 6 letters by default
     * @param {number} [length=6]
     * @returns {string} a random text
     */
    static getRandomText(length = 6) {
        let randomText = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i += 1) {
            randomText += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return randomText;
    }

    /**
     * Create random email of specified length and domain
     * @param {number} [length=6]
     * @param {string} [domain='@email.com']
     * @returns {string} a random email
     */
    static getRandomEmail(length = 6, domain = '@email.com') {
        const randomEmailId = this.getRandomText(length);
        const randomEmail = `${randomEmailId}${domain}`;
        return randomEmail;
    }
}