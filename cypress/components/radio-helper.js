/// <reference types='cypress-xpath' />

export class RadioHelper {
    /**
     * To select a radio button
     * @param {string} element
     */
    static check(element) {
        cy.xpath(element).check();
    }

    /**
     * To verify if a radio button is selected
     * @param {string} element
     * @param {boolean} [isChecked=true]
     */
    static verifyChecked(element, isChecked = true) {
        if (isChecked) {
            cy.xpath(element).should('be.checked');
        } else {
            cy.xpath(element).should('not.be.checked');
        }
    }
}
