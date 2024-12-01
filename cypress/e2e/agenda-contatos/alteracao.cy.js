/// <reference types="cypress" />

describe('Testes para alteração de contato', () => {
    beforeEach(() => {
            // Acessa a página de lista de contatos
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve ser possível incluir um novo contato', () => {
        cy.get('.edit').first().click()
        cy.get('input').should('have.length', 3)
        cy.screenshot('tela-alteracao')
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear().type('Contato Alterado')
        cy.get('input[type="email"]').clear().type('emailalterado@email.com')
        cy.get('input[type="tel"]').clear().type('1191234-5678')

        // Clica no botão de salvar
        cy.get('.alterar').click()

        // Verifica se o contato foi adicionado à lista
        cy.contains('Contato Alterado').should('exist')

        cy.screenshot('tela-alteracao-preenchida')
    })
})