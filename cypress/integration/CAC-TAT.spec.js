/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(function () {
    cy.visit("./src/index.html");
  });
  it("Verifica o título da aplicação", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("Preenche os campos obrigatórios e envia o formulário", function () {
    const longText =
      "Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste.";

    cy.get("#firstName").type("William");
    cy.get("#lastName").type("Vianna");
    cy.get("#email").type("viannawp@gmail.com");
    cy.get("#open-text-area").type(longText, { delay: 0 });
    cy.get('button[type="submit"]').click();
    cy.get(".success").should("be.visible");
  });

  it("Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", function () {
    cy.get("#firstName").type("William");
    cy.get("#lastName").type("Vianna");
    cy.get("#email").type("viannawp@gmail,com");
    cy.get("#open-text-area").type("Teste");
    cy.get('button[type="submit"]').click();

    cy.get(".error").should("be.visible");
  });

  it("Campo telefone continua vazio quando preenchido com valor não-numérico", function () {
    cy.get("#phone").type("abcdefg").should("have.value", "");
  });

  it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
    cy.get("#firstName").type("William");
    cy.get("#lastName").type("Vianna");
    cy.get("#email").type("viannawp@gmail.com");
    cy.get('#phone-checkbox').click()
    cy.get("#open-text-area").type("Teste");
    cy.get('button[type="submit"]').click();

    cy.get(".error").should("be.visible");
  });

it.only('Preenche e limpa os campos nome, sobrenome, email e telefone', function(){
  cy.get("#firstName")
    .type("William")
    .should('have.value', 'William')
    .clear()
    .should('have.value', '')
    cy.get("#lastName")
      .type("Vianna")
      .should('have.value', 'Vianna')
      .clear()
      .should('have.value', '')
    cy.get("#email")
      .type("viannawp@gmail.com")
      .should('have.value', 'viannawp@gmail.com')
      .clear()
      .should('have.value', '')
    cy.get('#phone-checkbox').click()
    cy.get('#phone')
      .type("11999999999")
      .should('have.value', '11999999999')
      .clear()
      .should('have.value', '')
    cy.get("#open-text-area")
      .type("Teste")
      .should('have.value', 'Teste')
      .clear()
      .should('have.value', '')
    cy.get('button[type="submit"]').click();

    cy.get(".error").should("be.visible");
})
})
