
class HomePage {
    home() {
        cy.visit('/');
        cy.get('.vr-login__trigger-label').should('have.text', 'Acesse sua conta')
        cy.get(':nth-child(3) > .vr-main-navigation__link').click();
    }
}

export default new HomePage();