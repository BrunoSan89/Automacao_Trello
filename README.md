# Teste de API Trello com Cypress

Este projeto contem testes auomatizados utilizando Cypress para interagir com a API do Trello.

## Configuração

Antes de exeutar os testes, certifique-se de ter o Cypress instalado e configure suas credenciais da API do Trello

1. Como pre-requisito para instalação do Cypress é necessário ter o node.js instalado e o Visual Studio Code.

2. Instale as dependencias
   No terminal digite npm install --save-dev cypress

## Execução dos Testes

Para executar os testes insterativamente digite npx cypress open no terminal

Para executar os testes em modo headless digite npx cypress run no terminal

## Cenários de Teste

O Arquivo 'cypress/e2e/api/api_Ttrello.cy.js' contem os cenários de teste que incluem:
- Cadastrar um Board
- Cadastrar uma Lista
- Cadastrar um Card
- Excluir um Card
- Excluir um board
   
