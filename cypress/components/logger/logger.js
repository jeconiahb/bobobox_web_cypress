import 'cypress-xpath';

class Logger {
    /**
     * Logging a test goal
     * @param {string} testGoal
     */
    static testGoal(testGoal) {
        cy.log(`TEST GOAL: ${testGoal}`);
    }

    /**
     * Logging a step number
     * @param {number} stepNumber
     */
    static stepNumber(stepNumber) {
        cy.log(`**************** **STEP ${stepNumber}** ****************`);
    }

    /**
     * Logging an action
     * @param {string} action
     */
    static stepAction(action) {
        cy.log(`**STEP ACTION - ${action}**`);
    }

    /**
     * Logging a verification
     * @param {string} verification
     */
    static stepVerification(verification) {
        cy.log(`**STEP VERIFICATION - ${verification}**`);
    }

    /**
     * Logging a helper step
     * @param {string} helper
     */
    static helper(helper) {
        cy.log(`*HELPER - ${helper}*`);
    }

    /**
     * Pre-condition step
     * @param {string} preCondition
     */
    static preCondition(preCondition) {
        cy.log(`**Pre-condition - ${preCondition}**`);
    }

    /**
     * Post-condition step
     * @param {string} postCondition
     */
    static postCondition(postCondition) {
        cy.log(`**Post-condition - ${postCondition}**`);
    }
}

export default Logger;
