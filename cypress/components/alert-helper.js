/// <reference types='cypress-xpath' />

class AlertHelper {
    /**
     * Function: Verify an alert contains a message, with optional wait delay value
     * https://docs.cypress.io/api/events/catalog-of-events#App-Events
     * https://docs.cypress.io/api/commands/then#Raw-HTMLElements-are-wrapped-with-jQuery
     * @param {string} element
     * @param {string} text
     */
    static clickElementAndVerifyAlertMessageContains(element, text) {
        cy.xpath(element).click().then(() => {
            cy.on('window:alert', (alertStr) => {
                expect(alertStr).to.contains(text);
            });
        });
    }
}

module.exports = AlertHelper;