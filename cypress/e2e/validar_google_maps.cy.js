/// <reference types="cypress" />

import HomePage from '../pages/HomePage.cy.js';
import OndeAceita from '../pages/OndeAceita.cy.js';
import GoogleMaps from '../pages/GoogleMaps.cy.js';

describe('Portal VR', () => {
    it('abrir portal VR', () => {
        HomePage.home()
    });

    it('Acessando a rota: "/onde-aceita.htm"', () => {
        OndeAceita.localizacao()
    });
  
    it('validar abertura do google maps', () => {
        GoogleMaps.maps()
    });
  });