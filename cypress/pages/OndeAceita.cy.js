
class OndeAceita {
    localizacao() {
        cy.url().should('be.equal', 'https://www.vr.com.br/onde-aceita.htm')
        cy.get('.vr-hero__actions > .vr-button--negative').click();
        cy.get('#endereco').type('Barueri');
        cy.get('[data-place-id]').first().click();
        cy.get('#buttonFiltrar').click();
        cy.get('.vr-map__card--title').first().click();
        cy.get('#buttonFiltrarCards').click();
        cy.get('#buscarResultados').click();
    }
}

export default new OndeAceita();