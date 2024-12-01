/// <reference types="cypress" />

describe('Testes para inclusão de contato', () => {
    beforeEach(() => {
        // Acessa a página de lista de contatos
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve ser possível incluir um novo contato', () => {
        cy.get('input').should('have.length', 3)
        cy.screenshot('tela-inclusao')
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get('input[type="text"]').clear().type('Novo Contato')
        cy.get('input[type="email"]').clear().type('novoemail@email.com')
        cy.get('input[type="tel"]').clear().type('1191234-5678')

        // Clica no botão de adicionar
        cy.get('.adicionar').click()

        // Verifica se o contato foi adicionado à lista
        cy.contains('Novo Contato').should('exist')
        cy.screenshot('tela-inclusao-preenchida')
    })
})