/// <reference types="cypress" />

describe('Testes de API GitHub - CRUD completo', () => {
  const githubUser = Cypress.env('github_user');
  const repoName = Cypress.env('test_repo_name');
  const token = Cypress.env('github_token');
  const baseUrl = 'https://api.github.com';

  const authHeader = {
    Authorization: `token ${token}`,
    'User-Agent': 'Cypress',
    Accept: 'application/vnd.github.v3+json'
  };

  // variável global visível a todos os testes
  let issueNumber;

  it('Criação do repositório no GitHub', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/user/repos`,
      headers: authHeader,
      body: {
        name: repoName,
        description: 'Repositório criado automaticamente via Cypress',
        auto_init: true,
        private: false
      },
      failOnStatusCode: false
    }).then((response) => {
      expect([201, 422]).to.include(response.status); // 422 = já existe
      cy.log(`Repositório criado ou já existente: ${repoName}`);
    });
  });

  it('Consulta do repositório criado', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/repos/${githubUser}/${repoName}`,
      headers: authHeader,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(`Repositório encontrado: ${response.body.full_name}`);
    });
  });

  it('Criação de uma issue no repositório', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/repos/${githubUser}/${repoName}/issues`,
      headers: authHeader,
      body: {
        title: 'Bug encontrado no fluxo de login',
        body: 'Passos para reproduzir o erro...'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(201);
      issueNumber = response.body.number; // guarda valor globalmente
      cy.log(`Issue criada com número: ${issueNumber}`);
    });
  });

  it('Consulta da issue criada', () => {
    // usa diretamente a variável global
    cy.request({
      method: 'GET',
      url: `${baseUrl}/repos/${githubUser}/${repoName}/issues/${issueNumber}`,
      headers: authHeader,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq('Bug encontrado no fluxo de login');
      cy.log(`Issue consultada com sucesso: ${response.body.title}`);
    });
  });

  it('Exclusão do repositório', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/repos/${githubUser}/${repoName}`,
      headers: authHeader,
      failOnStatusCode: false
    }).then((response) => {
      expect([204, 404]).to.include(response.status); // 404 se já foi deletado
      cy.log('Repositório excluído com sucesso ou inexistente.');
    });
  });

  it('Validação da exclusão do repositório', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/repos/${githubUser}/${repoName}`,
      headers: authHeader,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
      cy.log('Repositório não encontrado — exclusão confirmada.');
    });
  });
});
