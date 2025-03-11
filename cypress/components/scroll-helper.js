import 'cypress-xpath';

export class ScrollHelper {
    /**
     * Scroll until a certain element gets into view
     * @param {string} element - The XPath selector of the element to scroll to
     */
    // static toView(element) {
    //     cy.xpath(element)
    //         .scrollIntoView({ block: 'center' }) // Ensure it's centered
    //         .should('be.visible');
    // }

     static toView(element) {
        cy.xpath(element).then(($el) => {
            cy.window().then((win) => {
                const rect = $el[0].getBoundingClientRect();
                const scrollY = win.scrollY + rect.top - (win.innerHeight / 2);
                win.scrollTo({ top: scrollY, behavior: "smooth" });
            });
        });

        // Pastikan elemen terlihat setelah scroll
        cy.xpath(element).should('be.visible');
    }

    static toBottom() {
        cy.scrollTo('bottom');
    }
}

