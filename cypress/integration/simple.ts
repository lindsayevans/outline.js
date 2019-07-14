import 'cypress-plugin-tab';

describe('Simple page', () => {
    it('loads', () => {
        cy.visit('/examples/');
        cy.get('h1');
    });

    it('displays focus rectangle on tab navigation', () => {
        cy.visit('/examples/');
        cy.get('body').tab();
        // cy.screenshot('Simple page - link shows focus');
        cy.percySnapshot('Simple page - link shows focus', {
            widths: [420]
        });
        cy.focused().tab();
        // cy.screenshot('Simple page - button shows focus');
        cy.percySnapshot('Simple page - button shows focus', {
            widths: [420]
        });
    });

    it('doesnt display focus rectangle on mouse navigation', () => {
        cy.visit('/examples/');
        cy.get('.test-link').click();
        // cy.screenshot('Simple page - link hides focus');
        cy.percySnapshot('Simple page - link hides focus', {
            widths: [420]
        });
        cy.get('.test-button').click();
        // cy.screenshot('Simple page - button hides focus');
        cy.percySnapshot('Simple page - button hides focus', {
            widths: [420]
        });
    });
});
