import 'cypress-xpath';

export class TextboxHelper {
    /**
     * Clear the value of an input or textarea
     */
    static clear(element) {
        cy.xpath(element).clear();
    }

    /**
     * Type into a DOM element
     */
    static type(element, input, clearTextbox = true) {
        if (clearTextbox) {
            this.clear(element);
        }
        cy.xpath(element).type(input);
    }

    /**
     * Verify a textbox has an exact value or contains a value
     */
    static verifyValue(element, value, exactMatch = true) {
        if (exactMatch) {
            cy.xpath(element).should('have.value', value);
        } else {
            cy.xpath(element).should('contain.value', value);
        }
    }

    /**
     * Verify a textbox value using element property
     */
    static verifyValueByProperty(element, value, exactMatch = true) {
        if (exactMatch) {
            cy.xpath(element).invoke('val').should('eq', value);
        } else {
            cy.xpath(element).invoke('val').should('contain', value);
        }
    }

    /**
     * Verify text content using element property
     */
    static verifyTextByProperty(element, value, exactMatch = true) {
        if (exactMatch) {
            cy.xpath(element).invoke('text').should('eq', value);
        } else {
            cy.xpath(element).invoke('text').should('contain', value);
        }
    }

    /**
     * Press Enter
     */
    static pressEnter(element) {
        cy.xpath(element).type('{enter}');
    }

    /**
     * Press Tab
     */
    static pressTab(element) {
        cy.xpath(element).tab();
    }
}
