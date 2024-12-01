/// <reference types="cypress" />

describe('Testes para remoção de contato', () => {
    beforeEach(() => {
        // Acessa a página de lista de contatos
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve ser possível remover um novo contato', () => {
        // Procura pelo contato que deseja remover
        cy.get('.delete').first().click()

        cy.screenshot('tela-remocao')
    })
})
