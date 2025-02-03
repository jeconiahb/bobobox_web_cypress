/// <reference types='cypress-xpath' />

class CheckboxHelper {
    /**
     * To check / uncheck a checkbox
     * @param {string} element
     * @param {boolean} [toCheck=true]
     */
    static check(element, toCheck = true) {
        if (toCheck) {
            cy.xpath(element).check();
        } else {
            cy.xpath(element).uncheck();
        }
    }

    /**
     * To verify if a checkbox is checked
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

export default CheckboxHelper;
