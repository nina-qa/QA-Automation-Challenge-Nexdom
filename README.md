# QA Automation Challenge — Nexdom

![Cypress](https://img.shields.io/badge/Cypress-10.0.0-green) ![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen) ![GitHub](https://img.shields.io/badge/GitHub-REST_API-blue)

---

## 📋 Descrição

Projeto de automação de testes **Front-End** e **Back-End (API)** utilizando **Cypress**.  
Este projeto valida funcionalidades do site da Nexdom e realiza um **CRUD completo** utilizando a **API REST do GitHub**.

---

## 🧰 Tecnologias Utilizadas

- Node.js  
- Cypress  
- Postman (para testes exploratórios de API)  
- API REST do GitHub  

---

## 🗂 Estrutura do Projeto

 qa-nexdom-challenge/
│
├── cypress/
│ ├── e2e/
│ │ ├── frontend/
│ │ │ └── nexdom_frontend.cy.js # Testes de Front-End
│ │ └── api/
│ │ └── github_api.cy.js # Testes de Back-End (API GitHub)
│ ├── fixtures/
│ ├── support/
│ └── screenshots/ # Evidências de execução
│
├── cypress.env.json # Variáveis de ambiente (GitHub user, token, repo)
├── package.json
└── README.md


---

## ⚙️ Configuração

1️⃣ Instalar dependências:

```bash
npm install


Configurar as variáveis no arquivo cypress.env.json:

{
  "github_user": "SEU_USUARIO_GITHUB",
  "github_token": "SEU_TOKEN_PESSOAL",
  "test_repo_name": "qa-automation-nexdom"
}

🚀 Execução dos Testes
🧭 Front-End (Site Nexdom)
npx cypress run --spec "cypress/e2e/frontend/nexdom_frontend.cy.js"

🔗 Back-End (API GitHub)
npx cypress run --spec "cypress/e2e/api/github_api.cy.js"


Ou abra a interface interativa:

npx cypress open

✅ Cobertura de Testes
Front-End

Validação dos menus “Sobre Nós” e “Soluções”

Navegação e visibilidade dos elementos

Scroll e clique funcional

Back-End (GitHub API)

Criação de repositório público

Consulta do repositório criado

Criação de uma issue

Consulta da issue criada

Exclusão do repositório

Validação da exclusão

💬 Desafios Encontrados

Ajustes de visibilidade no menu da Nexdom (elementos com display: none)

Autenticação da API GitHub exigindo permissões específicas de token