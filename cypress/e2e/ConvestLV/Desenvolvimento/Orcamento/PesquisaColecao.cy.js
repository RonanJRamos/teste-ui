context('Testar a Funcionalidade pesquisar Coleção', () => {
    beforeEach(() => {
        cy.logar('PL','Integracao','Integracao')
        cy.visit("http://localhost:3585/Views/OrcamentoRevenda/CadastroOrcamentoRevenda.aspx?menu=Sim")

    });
      afterEach(() => {
        cy.screenshot()
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
   it.only('Coleção normal,Seleciona coleção', () => {
        var tempo=80;
        cy.wait(tempo)
        cy.get('#MainContent_CodCliente').type('00257')
        cy.wait(tempo)
       // cy.get('#MainContent_Tabela').click()
        cy.get('#MainContent_Tabela').should('be.visible').select(1, {force: true}).type('1')
        //cy.get('.element-selector').should('have.text', 'Texto Esperado')
        // cy.get('#menu-principal do dropdown').realHover().then(() => { cy.get('a[href="/home"]').should('contain', 'conteúdo').click(); });
        // cy.get('select').select('apples').should('have.value', '456')
        // cy.get('select#name option:selected').should('have.text', 'Peter')
        //cy.get('select').select(0).should('have.value', '456')
        //cy.get('#MainContent_FormaPag').select('28 dias')
        // cy.wait(tempo)


    });
});