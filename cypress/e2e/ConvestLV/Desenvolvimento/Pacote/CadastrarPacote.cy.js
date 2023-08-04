
context('TeSta a Página de Login do Conves LV', () => {
    beforeEach(() => {
        cy.logar('PL','Integracao','Integracao')
        cy.visit("http://localhost:3585/Views/Pacotes/CadastroPacote.aspx")

    });
      afterEach(() => {
        cy.screenshot()
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      it('Exclui os Pacotes', () => {
        cy.visit('http://localhost:3585/liberasenhamaster.aspx?Opcao=2')
        cy.get('#Usuario').type('Integracao')
        cy.get('#Senha').type('Integracao')
        cy.get('#CmdLiberar').click()
        cy.get('#MainContent_OS').type('007202')
        cy.get('#MainContent_Item').type('6')
        cy.get('#MainContent_CmdExcluir').click()


      });
      it('Verificar se OS Existe',()=>{
        var tempo=80;
        cy.get('#MainContent_NumeroOS').type('7202')
        cy.get('#MainContent_Item').focus()
        cy.wait(tempo)
        cy.get('#MainContent_Msg').should('contain','')
    })
    it('Verifica OS Inexistente', () => {
        var tempo=80;
        cy.get('#MainContent_NumeroOS').type('997202')
        cy.get('#MainContent_Item').focus()
        cy.wait(tempo)
        cy.get('#MainContent_Msg').should('contain','Numero da O.S inexistente.')
    });
    it('Teste Lancamento via Comando', () => {
        cy.Limpar_cadastro()
        cy.PreencherLancamentoPacote('M',1,8,50)
    });
    it('Cadastro dos Pacotes ', () => {
        
        var tempo=80;
        cy.get('#MainContent_NumeroOS').type('7202')
        cy.get('#MainContent_Item').focus()
        cy.wait(tempo)
        cy.get('#MainContent_Item').type('6')
        cy.get('#MainContent_Tamanho').focus()
        cy.wait(tempo)
        
        cy.PreencherLancamentoPacote('M',1,8,tempo)
        cy.Limpar_cadastro()
        cy.PreencherLancamentoPacote('G',2,10,tempo)
        cy.Limpar_cadastro()
        cy.PreencherLancamentoPacote('G',1,4,tempo)
        cy.Limpar_cadastro()
        cy.PreencherLancamentoPacote('GG',3,5,tempo)
        cy.Limpar_cadastro()
        cy.PreencherLancamentoPacote('GG',1,1,tempo)
        cy.Limpar_cadastro()
        cy.PreencherLancamentoPacote('XG',1,2,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_TotalPecas').should('contain','50')
        cy.get('#MainContent_TotalPacote').should('contain','9')

    });
    it('Tentando Gerar pacotes acima da Quantidade de peças', () => {
        var tempo=80;
        cy.get('#MainContent_NumeroOS').type('7202')
        cy.get('#MainContent_Item').focus()
        cy.wait(tempo)
        cy.get('#MainContent_Item').type('6')
        cy.get('#MainContent_Tamanho').focus()
        cy.wait(tempo)
        cy.PreencherLancamentoPacote('G',2,10,tempo)
        cy.PreencherLancamentoPacote('G',1,4,tempo)
        cy.Limpar_cadastro()
       
        cy.PreencherLancamentoPacote('G',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','quantidade Superior a da OS!')
       
        cy.PreencherLancamentoPacote('G',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','quantidade Superior a da OS!')
       
        cy.PreencherLancamentoPacote('G',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','quantidade Superior a da OS!')
       
        cy.PreencherLancamentoPacote('G',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','quantidade Superior a da OS!')
       
        cy.PreencherLancamentoPacote('G',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','quantidade Superior a da OS!')
       
        cy.PreencherLancamentoPacote('G',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','quantidade Superior a da OS!')
        
        cy.PreencherLancamentoPacote('G',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','quantidade Superior a da OS!')
       
        cy.PreencherLancamentoPacote('G',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','quantidade Superior a da OS!')
        
    
             
        cy.get('#MainContent_TotalPecas').should('contain','24')
        cy.get('#MainContent_TotalPacote').should('contain','3')
     });
    it('Cadastro dos Pacotes - Qtde acima da Qtde da OS', () => {
         var tempo=80;
        cy.get('#MainContent_NumeroOS').type('7202')
        cy.get('#MainContent_Item').focus()
        cy.wait(tempo)
        cy.get('#MainContent_Item').type('6')
        cy.get('#MainContent_Tamanho').focus()
        cy.wait(tempo)
       //-->Preenchimento normal
        cy.PreencherLancamentoPacote('M',1,8,tempo)
        cy.PreencherLancamentoPacote('G',2,10,tempo)
        cy.PreencherLancamentoPacote('G',1,4,tempo)
        cy.PreencherLancamentoPacote('GG',3,5,tempo)
        cy.PreencherLancamentoPacote('GG',1,1,tempo)
        cy.PreencherLancamentoPacote('XG',1,2,tempo)
       
        //--> Tenta Acrescentar mais um
        cy.PreencherLancamentoPacote('M',1,1,tempo)
        cy.get('#MainContent_Msg0').should('contain','quantidade Superior a da OS!')
        cy.Limpar_cadastro()
        cy.PreencherLancamentoPacote('G',1,1,tempo)
        cy.get('#MainContent_Msg0').should('contain','quantidade Superior a da OS!')
        cy.Limpar_cadastro()
        cy.PreencherLancamentoPacote('GG',1,1,tempo)
        cy.get('#MainContent_Msg0').should('contain','quantidade Superior a da OS!')
        cy.Limpar_cadastro()
        cy.PreencherLancamentoPacote('XG',1,1,tempo)
        cy.get('#MainContent_Msg0').should('contain','quantidade Superior a da OS!')
        cy.Limpar_cadastro()
       
       
        cy.get('#MainContent_TotalPecas').should('contain','50')
        cy.get('#MainContent_TotalPacote').should('contain','9')

    });
    it('Verificar Quantidade de Pacote', () => {
        var tempo=80;
        cy.get('#MainContent_NumeroOS').type('7202')
        cy.get('#MainContent_Item').focus()
        cy.wait(tempo)
        cy.get('#MainContent_Item').type('6')
        cy.get('#MainContent_Tamanho').focus()
        cy.wait(tempo)
        cy.PreencherLancamentoPacote('G',5,3,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','')
        cy.PreencherLancamentoPacote('G',6,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','A quantidade de Pacotes informado é maior que a permitida!')
        cy.get('#MainContent_TotalPecas').should('contain','15')
        cy.get('#MainContent_TotalPacote').should('contain','5')
    });
    it('Testa Tamanho que não esta na OS', () => {
        var tempo=80;
        cy.get('#MainContent_NumeroOS').type('7202')
        cy.get('#MainContent_Item').focus()
        cy.wait(tempo)
        cy.get('#MainContent_Item').type('6')
        cy.get('#MainContent_Tamanho').focus()
        cy.wait(tempo)

        cy.PreencherLancamentoPacote('G',5,3,tempo)
        cy.get('#MainContent_Msg0').should('contain','')

        cy.PreencherLancamentoPacote('PP',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','Tamanho não encontrado na OS!')
      
        cy.PreencherLancamentoPacote('P',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','Tamanho não encontrado na OS!')

        cy.PreencherLancamentoPacote('XXG',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','Tamanho não encontrado na OS!')

        cy.PreencherLancamentoPacote('36',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','Tamanho não encontrado na OS!')

        cy.PreencherLancamentoPacote('38',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','Tamanho não encontrado na OS!')

        cy.PreencherLancamentoPacote('40',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','Tamanho não encontrado na OS!')

        cy.PreencherLancamentoPacote('42',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','Tamanho não encontrado na OS!')

        cy.PreencherLancamentoPacote('44',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','Tamanho não encontrado na OS!')

        cy.PreencherLancamentoPacote('48',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','Tamanho não encontrado na OS!')

        cy.PreencherLancamentoPacote('50',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','Tamanho não encontrado na OS!')

        cy.PreencherLancamentoPacote('52',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','Tamanho não encontrado na OS!')

        cy.PreencherLancamentoPacote('54',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','Tamanho não encontrado na OS!')

        cy.PreencherLancamentoPacote('56',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','Tamanho não encontrado na OS!')

        cy.PreencherLancamentoPacote('58',1,1,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_Msg0').should('contain','Tamanho não encontrado na OS!')

        cy.PreencherLancamentoPacote('M',1,8,tempo)
        cy.get('#MainContent_Msg0').should('contain','')

        cy.get('#MainContent_TotalPecas').should('contain','23')
        cy.get('#MainContent_TotalPacote').should('contain','6')

    });
    it('Exclusão de item lnaçado para cadastro do Pacote', () => {
        var tempo=80;
        cy.get('#MainContent_NumeroOS').type('7202')
        cy.get('#MainContent_Item').focus()
        cy.wait(tempo)
        cy.get('#MainContent_Item').type('6')
        cy.get('#MainContent_Tamanho').focus()
        cy.wait(tempo)
        
        cy.PreencherLancamentoPacote('M',1,8,tempo)
        cy.Limpar_cadastro()
        cy.PreencherLancamentoPacote('G',2,10,tempo)
        cy.Limpar_cadastro()
        cy.PreencherLancamentoPacote('G',1,4,tempo)
        cy.Limpar_cadastro()
        cy.PreencherLancamentoPacote('GG',3,5,tempo)
        cy.Limpar_cadastro()
        cy.PreencherLancamentoPacote('GG',1,1,tempo)
        cy.Limpar_cadastro()
        cy.PreencherLancamentoPacote('XG',1,2,tempo)
        cy.Limpar_cadastro()
        cy.get(':nth-child(2) > :nth-child(6) > .LinkExcluir').click()

        cy.get('#MainContent_TotalPecas').should('contain','42')
        cy.get('#MainContent_TotalPacote').should('contain','8')

        //->Relanca o tamanho
        cy.PreencherLancamentoPacote('M',1,8,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_TotalPecas').should('contain','50')
        cy.get('#MainContent_TotalPacote').should('contain','9')

        //-> Exclui todos
        cy.get(':nth-child(2) > :nth-child(6) > .LinkExcluir').click()
        cy.get(':nth-child(2) > :nth-child(6) > .LinkExcluir').click()
        cy.get(':nth-child(2) > :nth-child(6) > .LinkExcluir').click()
        cy.get(':nth-child(2) > :nth-child(6) > .LinkExcluir').click()
        cy.get(':nth-child(2) > :nth-child(6) > .LinkExcluir').click()
        cy.get(':nth-child(2) > :nth-child(6) > .LinkExcluir').click()

        cy.get('#MainContent_TotalPecas').should('contain','0')
        cy.get('#MainContent_TotalPacote').should('contain','0')

        //-> Recadastrada o tamanho
        cy.PreencherLancamentoPacote('XG',1,2,tempo)
        cy.Limpar_cadastro()
        cy.get('#MainContent_TotalPecas').should('contain','2')
        cy.get('#MainContent_TotalPacote').should('contain','1')
        //-> Exclui
        cy.get(':nth-child(2) > :nth-child(6) > .LinkExcluir').click()
        cy.get('#MainContent_TotalPecas').should('contain','0')
        cy.get('#MainContent_TotalPacote').should('contain','0')
    });
   
    it('Salvar os Pacotes ', () => {
        var tempo=80;
        cy.get('#MainContent_NumeroOS').type('7202')
        cy.get('#MainContent_Item').focus()
        cy.wait(tempo)
        cy.get('#MainContent_Item').type('6')
        cy.get('#MainContent_Tamanho').focus()
        cy.wait(tempo)
        
        cy.PreencherLancamentoPacote('M',1,8,tempo)
        cy.Limpar_cadastro()
        cy.PreencherLancamentoPacote('G',2,10,tempo)
        cy.Limpar_cadastro()
        cy.PreencherLancamentoPacote('G',1,4,tempo)
        cy.Limpar_cadastro()
        cy.PreencherLancamentoPacote('GG',3,5,tempo)
        cy.Limpar_cadastro()
        cy.PreencherLancamentoPacote('GG',1,1,tempo)
        cy.Limpar_cadastro()
        cy.PreencherLancamentoPacote('XG',1,2,tempo)
        cy.Limpar_cadastro()
       
        cy.get('#MainContent_TotalPecas').should('contain','50')
        cy.get('#MainContent_TotalPacote').should('contain','9')

        cy.get('#MainContent_CmdConfirmar').click()
        cy.get('#MainContent_Msg0').should('contain','Pacotes gerados com sucesso!')

    });
    it('Tenta  Salvar Pacote depois de salvo os totais', () => {
        var tempo=80;
        cy.get('#MainContent_NumeroOS').type('7202')
        cy.get('#MainContent_Item').focus()
        cy.wait(tempo)
        cy.get('#MainContent_Item').type('6')
        cy.get('#MainContent_Tamanho').focus()
        cy.wait(tempo)
       
         //--> Tenta Acrescentar mais um
         cy.PreencherLancamentoPacote('M',1,1,tempo)
         cy.get('#MainContent_Msg0').should('contain','quantidade Superior a da OS!')
         cy.Limpar_cadastro()
         cy.PreencherLancamentoPacote('G',1,1,tempo)
         cy.get('#MainContent_Msg0').should('contain','quantidade Superior a da OS!')
         cy.Limpar_cadastro()
         cy.PreencherLancamentoPacote('GG',1,1,tempo)
         cy.get('#MainContent_Msg0').should('contain','quantidade Superior a da OS!')
         cy.Limpar_cadastro()
         cy.PreencherLancamentoPacote('XG',1,1,tempo)
         cy.get('#MainContent_Msg0').should('contain','quantidade Superior a da OS!')
         cy.Limpar_cadastro()

         cy.get('#MainContent_CmdConfirmar').click()
         cy.get('#MainContent_Msg0').should('contain','Não foi lançado nenhum pacote para salvar')
        
    });

})