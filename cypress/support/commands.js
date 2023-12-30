
/// <reference types="Cypress"/>


Cypress.Commands.add('api_cadastrar_board', () => {
    cy.request({
        method: 'POST',
        url: `https://api.trello.com/1/boards/`,
        qs: {
            name: 'Bord Teste',
            key: '251dc4b8d976ccd6d84524f147245ee1',
            token: 'ATTA1e437bdd62741ffcae37292bb93e830744c01230d3ce235da338c3306c86f9d71BC3E0A1',
      }
    }).then((response) => {
        Cypress.env('boardId', response.body.id)
        return response
    })
})

Cypress.Commands.add('api_cadastrar_list', () => {
  cy.request({
      method: 'POST',
      url: `https://api.trello.com/1/lists/`,
      qs: {
          name: 'Doing',
          idBoard: Cypress.env('boardId'),
          key: '251dc4b8d976ccd6d84524f147245ee1',
          token: 'ATTA1e437bdd62741ffcae37292bb93e830744c01230d3ce235da338c3306c86f9d71BC3E0A1',
    }
  }).then((response) => {
      Cypress.env('listId', response.body.id)
      return response
  })
})

Cypress.Commands.add('api_cadastrar_card', () => {
    cy.request({
        method: 'POST',
      url: 'https://api.trello.com/1/cards/',
      qs: {
        name: 'Teste Automacao 1',
        idList: Cypress.env('listId'),
        key: '251dc4b8d976ccd6d84524f147245ee1',
        token: 'ATTA1e437bdd62741ffcae37292bb93e830744c01230d3ce235da338c3306c86f9d71BC3E0A1',
      }
    }).then((response) => {
        Cypress.env('cardId', response.body.id)
        return response
    })
})

Cypress.Commands.add('api_deletar_card', () => {
    cy.request({
      method: 'DELETE',
      url: `https://api.trello.com/1/cards/${Cypress.env('cardId')}`,
      qs: {
        key: '251dc4b8d976ccd6d84524f147245ee1',
        token: 'ATTA1e437bdd62741ffcae37292bb93e830744c01230d3ce235da338c3306c86f9d71BC3E0A1',
      }
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
})

Cypress.Commands.add('api_deletar_board', () => {
  cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/boards/${Cypress.env('boardId')}`,
    qs: {
      key: '251dc4b8d976ccd6d84524f147245ee1',
      token: 'ATTA1e437bdd62741ffcae37292bb93e830744c01230d3ce235da338c3306c86f9d71BC3E0A1',
      }
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
})

