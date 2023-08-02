// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("Limpar_cadastro", () => { 
    cy.get('#MainContent_Tamanho').clear();
    cy.get('#MainContent_QuantidadePacote').clear();
    cy.get('#MainContent_QuantidadePecas').clear();
})
Cypress.Commands.add("PreencherLancamentoPacote", (tamanho,qtdePacote,qtdePecas,tempo) => { 
        cy.get('#MainContent_Tamanho').type(tamanho);
        cy.get('#MainContent_QuantidadePacote').type(qtdePacote);
        cy.get('#MainContent_QuantidadePecas').type(qtdePecas);
        cy.get('#MainContent_CmdLancar').click();
        cy.wait(tempo);
})
Cypress.Commands.add("logar", (empresa,usuario,senha) => { 
        cy.visit("http://localhost:3585/Default.aspx")
        cy.get('#Empresa').type(empresa)
        cy.get('#Usuario').type(usuario)
        cy.get('#Senha').type(senha)
        cy.get('#CmdConfirmar').click()
       
})