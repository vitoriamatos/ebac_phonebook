import React from "react"
<referece types = "cypress"></referece>


describe('Testes para a página de listagem de contatos', () => {

    it('Deve Ter inicialmente 3 contatos', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.sc-JrDLc li').should('have.length',3)
        cy.screenshot('tela-home')
    })


    it('Deve registrar um contato novo', () => {
        cy.visit('http://localhost:3000/')
        cy.get('a').click()

        cy.get('input[type=text]:first-child').type('Contato Teste')
        cy.get('input[type=text]:last').type('81 123456679')
        cy.screenshot('tela-registro')
        cy.get('button[type=submit]').click()
        cy.get('.sc-JrDLc li').should('have.length',4)
        cy.screenshot('tela-registro-inserido')
        
    })

    it('Deve editar um contato', () => {
        cy.visit('http://localhost:3000/')

        cy.get(':nth-child(1) > .sc-fHjqPf > .grid_4 > :nth-child(2) > .sc-koXPp span').click()
        cy.get('.sc-dtInlm > :nth-child(1):first').click({force: true})
        cy.get(':nth-child(1) > .sc-fHjqPf > .grid_1 > .sc-eeDRCY').type(' Teste')
        cy.screenshot('tela-edicao')
        cy.get('.sc-dtInlm > :nth-child(1):first').click({force: true})
        
    })

    it('Deve Deletar um contato', () => {
        cy.visit('http://localhost:3000/')

        cy.get(':nth-child(1) > .sc-fHjqPf > .grid_4 > :nth-child(2) > .sc-koXPp span').click()
        cy.get('.sc-dtInlm > :nth-child(2):first').click({force: true})
        cy.get('.sc-JrDLc li').should('have.length',2) 
        cy.screenshot('tela-delete')       
    })
})