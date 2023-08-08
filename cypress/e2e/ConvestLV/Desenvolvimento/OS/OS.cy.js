context('Teste do Processo da OS', () => {
    beforeEach(() => {
        cy.logar('PL','Integracao','Integracao')
        cy.visit("http://localhost:3585/Views/os/osLista.aspx")
      

    });
      afterEach(() => {
        cy.screenshot()
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    it.only('Excluir OS e os pacotes Gerados', () => {
        cy.visit("http://localhost:3585/Views/os/osLista.aspx")
        cy.get('#MainContent_Pedido').type("7202")
        var tempo=80;
        cy.wait(tempo)
        cy.get('#MainContent_CmdFiltrar').click()
        cy.wait(tempo)
        cy.get('#MainContent_Grid > :nth-child(1) > :nth-child(2) > :nth-child(1)').should('contain','007202')
        cy.get('.Borda > :nth-child(3)').click()
        cy.get('#MainContent_CmdExcluirTodas').click()
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('Exclusão confirmada');
         })

    });
   
});