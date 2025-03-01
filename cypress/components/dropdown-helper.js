import 'cypress-xpath';

class DropdownHelper {
    /**
     * Select an <option> within a <select> using value/text/index
     * Example:
     *
     * @param element
     * @param option
     * @param isForce
     */
    static selectDropdownOption(element, option, isForce = false) {
        if (isForce) {
            cy.xpath(element).select(option, { force: true });
        } else {
            cy.xpath(element).select(option);
        }
    }

    /**
     * Verify if an option is selected in a dropdown, using the dropdown as the element
     * @param element
     * @param value
     * @param isSelected
     */
    static verifySelectedDropdownOption(element, value, isSelected = true) {
        if (isSelected) {
            cy.xpath(`${element}//option[@selected]`).should('have.text', value);
        } else {
            cy.xpath(`${element}//option[@selected]`).should('not.have.text', value);
        }
    }

    /**
     * Verify if an option is selected in a dropdown, using the value itself as the element
     * @param element
     * @param value
     */
    static verifyDropdownValue(element, value, isMatch = true) {
        if (isMatch) {
            cy.xpath(element).invoke('text').should('eq', value);
        } else {
            cy.xpath(element).invoke('text').should('contains', value);
        }
    }
}

export default DropdownHelper;
