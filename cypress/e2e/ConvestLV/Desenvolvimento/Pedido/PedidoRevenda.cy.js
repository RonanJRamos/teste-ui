context('Testa Processo de Pedidos' , () => {
    beforeEach(() => {
        cy.logar('PL','Integracao','Integracao')
        cy.visit("http://localhost:3585/Views/PedidoRevenda/ListaPedidoRevenda.aspx")

    });
      afterEach(() => {
        cy.screenshot()
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
  
        it('Gerar OS', () => {
            var tempo=80;
            cy.wait(tempo)
            cy.get('#MainContent_PedidoID').type('7202')
            cy.wait(tempo)
            cy.get('#MainContent_CmdFiltrar').click()
            cy.wait(tempo)
            cy.get('[style="background-color:#E3EAEB;"] > :nth-child(1)').should('contain','7202')
            cy.wait(tempo)
            cy.get('#MainContent_GridView1 > tbody > tr:nth-child(2) > td:nth-child(16) > a').click()
            cy.wait(tempo)
            cy.get('#MainContent_CmdEditar').click()
            cy.wait(tempo)
            cy.get('#MainContent_GridView1_SelecionarTodos').click()
            cy.wait(tempo)
            cy.get('#MainContent_CmdGerarOS').click()
            cy.wait(tempo)
            cy.get('#MainContent_CmdGerarAos').click()
            cy.wait(8000)
            cy.get('[value="OS Geradas Com Sucesso:"]').should('contain','OS Geradas Com Sucesso:')
    
        });
   
});