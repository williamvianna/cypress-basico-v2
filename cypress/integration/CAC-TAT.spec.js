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

  it.only("Campo telefone continua vazio quando preenchido com valor não-numérico", function () {
    cy.get("#phone").type("abcdefg").should("have.value", "");
  });
});
