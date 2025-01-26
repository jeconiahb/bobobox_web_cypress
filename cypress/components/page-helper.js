/// <reference types='cypress-xpath' />

class PageHelper {
    /**
     * Visit a remote URL
     * https://docs.cypress.io/api/commands/visit
     * @param url
     */
    static navigate(url) {
        cy.visit(url);
    }

    /**
     * Reload the page.
     * https://docs.cypress.io/api/commands/reload#Syntax
     */
    static refreshPage() {
        cy.reload();
    }

    /**
     * Clear all browser cookies for current domain and subdomain.
     * https://docs.cypress.io/api/commands/clearcookies
     */
    static clearCookies() {
        cy.clearCookies();
    }

    /**
     * Clear all browser Local Storage for current domain and subdomain.
     * https://docs.cypress.io/api/commands/clearlocalstorage
     */
    static clearLocalStorage() {
        cy.clearAllLocalStorage();
    }

    /**
     * Delete existing token in local storage
     * https://docs.cypress.io/api/commands/clearlocalstorage
     */
    static deleteToken() {
        const token = window.localStorage.getItem('token');

        if (token) {
            cy.clearAllLocalStorage();
        }
    }
}

module.exports = PageHelper;
