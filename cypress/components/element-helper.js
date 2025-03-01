import 'cypress-xpath';


const Logger = require('./logger/logger.js');
const VerificationHelper = require('./verification-helper.js');

class ElementHelper {
    /**
     * Click a DOM element
     * https://docs.cypress.io/api/commands/click
     * You can also force the action to be performed on the element regardless of whether the element is visible or not
     * https://docs.cypress.io/api/commands/hover#Force-click
     * @param element
     * @param isForce
     */
    static click(element, isForce = false) {
        if (isForce) {
            cy.xpath(element).click({ force: true });
        } else {
            cy.xpath(element).click();
        }
    }

    /**
     * Right click a DOM element
     * https://docs.cypress.io/api/commands/rightclick
     * @param element
     */
    static rightClick(element) {
        cy.xpath(element).rightclick();
    }

    /**
     * Double-click a DOM element
     * https://docs.cypress.io/api/commands/dblclick
     * @param element
     */
    static doubleClick(element) {
        cy.xpath(element).dblclick();
    }

    /**
     * Simulating mouseover event to get popover to display
     * https://docs.cypress.io/api/commands/hover#Trigger
     * @param element
     */
    static hover(element) {
        cy.xpath(element).trigger('mouseover');
    }

    /**
     * Click a DOM element only if it is visible
     * @param elementToWaitFor element to wait for in DOM before looking for the optional element
     * @param elementToClick element to click if it exists - Must use CSS not XPATH
     */
    static clickIfVisible(elementToWaitFor, elementToClick) {
        Logger.helper(`Wait until element "${elementToWaitFor}" exists in the DOM`);
        VerificationHelper.isExist(elementToWaitFor);

        Logger.helper(`Checking if "elementToClick" exists, the CSS for this element is: "${elementToClick}"`);
        cy.xpath('//body').then(($ele) => {
            if ($ele.find(elementToClick).length > 0) {
                Logger.helper('"elementToClick" is found');
                cy.get(elementToClick).click();
            } else {
                Logger.helper('"elementToClick" is NOT found');
            }
        });
    }
}

export default ElementHelper;
