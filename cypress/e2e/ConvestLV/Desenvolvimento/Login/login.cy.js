
context('Testa a Página de Login do Conves LV', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3585/Default.aspx")
    });
   
    afterEach(() => {
        cy.screenshot()
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it('Deve fazer Login com sucesso',()=>{
        cy.get('#Empresa').type("PL")
        cy.get('#Usuario').type('Integracao')
        cy.get('#Senha').type('Integracao')
        cy.get('#CmdConfirmar').click()
        cy.get('#usuario').should('contain','Integracao')
     
    })
    it('Verificar Empresa invalida',()=>{
        cy.get('#Empresa').type("PL1")
        cy.get('#Usuario').type('Integracao')
        cy.get('#Senha').type('Integracao')
        cy.get('#CmdConfirmar').click()
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('Empresa, Usuario ou senha inválido. Verifique e tente novamente.');
         })

    })
    it('Verificar Usuário invalido',()=>{
        cy.get('#Empresa').type("PL")
        cy.get('#Usuario').type('Integrar')
        cy.get('#Senha').type('Integracao')
        cy.get('#CmdConfirmar').click()
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('Empresa, Usuario ou senha inválido. Verifique e tente novamente.');
         })
    })
    it('Verificar Senha invalido',()=>{
        cy.get('#Empresa').type("PL")
        cy.get('#Usuario').type('Integracao')
        cy.get('#Senha').type('Integracao1')
        cy.get('#CmdConfirmar').click()
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('Empresa, Usuario ou senha inválido. Verifique e tente novamente.');
         })
    })
});
