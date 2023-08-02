context('Verificacao geral', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3585/Default.aspx")
        cy.get('#Empresa').type("PL")
        cy.get('#Usuario').type('Integracao')
        cy.get('#Senha').type('Integracao')
        cy.get('#CmdConfirmar').click()
        cy.visit("http://localhost:3585/Views/Pacotes/CadastroPacote.aspx")

    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it.only('Verifica customizado', () => {
        cy.Limpar_cadastro();
     });
});