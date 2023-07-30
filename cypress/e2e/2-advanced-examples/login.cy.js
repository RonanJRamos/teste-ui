/// <reference types="cypress" />

context('Funcionalidade Login',()=>{
    it('Deve fazer Login com sucesso',()=>{
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain','Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
    })
    it('Deve exibir mensagem Usuario invalido',()=>{
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
        cy.get('#username').type('aluno_ebac@teste.com.br')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Erro:')


    })
    it('Deve exibir mensagem Senha invalida',()=>{
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com.br')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Erro:')


    })
})