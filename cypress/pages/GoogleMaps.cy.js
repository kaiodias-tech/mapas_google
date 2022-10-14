
class GoogleMaps {
    maps() {
        cy.get('#list-estab').should('exist')
        cy.get('div[aria-label="Mapa"]').should('be.visible')
    }
}

export default new GoogleMaps();