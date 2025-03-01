import 'cypress-xpath';

export class VerificationHelper {
    /**
     * Verify an element is visible or not
     */
    static isVisible(element, isVisible = true) {
        if (isVisible) {
            cy.xpath(element).should('be.visible');
        } else {
            cy.xpath(element).should('not.exist');
        }
    }

    /**
     * Verify an element exists in the DOM
     */
    static isExist(element) {
        cy.xpath(element).should('exist');
    }

    /**
     * Verify if an element has a particular value
     */
    static matchValue(element, value, isMatch = true) {
        if (isMatch) {
            cy.xpath(element).should('have.text', value);
        } else {
            cy.xpath(element).should('not.have.text', value);
        }
    }

    /**
     * Verify if an element contains a particular value
     */
    static containValue(element, value) {
        cy.xpath(element).should('include.text', value);
    }

    /**
     * Verify copied text in clipboard
     */
    static async verifyCopiedTextExist(input, isEqual = false) {
        cy.window().then(async (win) => {
            const cbText = await win.navigator.clipboard.readText();
            if (isEqual) {
                expect(cbText).to.eq(input);
            } else {
                expect(cbText).to.contains(input);
            }
        });
    }
}
