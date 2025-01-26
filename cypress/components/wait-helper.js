/// <reference types='cypress-xpath' />

export class WaitHelper {
    /**
     * Wait for a number of milliseconds
     */
    static wait(time = 1000) {
        cy.wait(time);
    }
}