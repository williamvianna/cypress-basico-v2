Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function () {
  cy.get("#firstName").type("William");
  cy.get("#lastName").type("Vianna");
  cy.get("#email").type("viannawp@gmail.com");
  cy.get("#open-text-area").type("Teste");
  cy.contains("button", "Enviar").click();
});
