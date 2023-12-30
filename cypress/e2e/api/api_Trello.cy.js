/// <reference types="Cypress"/>


describe('Cadastrar um board no Trello', () => {
  it('Deve cadastrar um novo board', () => {
    cy.api_cadastrar_board()
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response).not.empty
        });
  });
});

describe('Cadastrar uma lista no Trello', () => {
  it('Deve cadastrar uma nova lista', () => {
    cy.api_cadastrar_list()
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response).not.empty
        });
  });
});

describe('Cadastrar um card no Trello', () => {
  it('Deve cadastrar um novo card', () => {
    cy.api_cadastrar_card()
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response).not.empty
        });
  });
});

describe('Excluir um card no Trello', () => {
  it('Deve excluir um card', () => {
    cy.api_deletar_card()
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response).not.empty
        });
  });
});


describe('Excluir um board no Trello', () => {
  it('Deve excluir um board', () => {
    cy.api_deletar_board()
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response).not.empty
        });
  });
});
