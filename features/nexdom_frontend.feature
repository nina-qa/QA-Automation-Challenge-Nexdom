Feature: Validação do site da NEXDOM

  Como usuário do site da NEXDOM
  Quero navegar pelos menus principais
  Para verificar se as páginas estão acessíveis e funcionais

  Scenario: Validar menu principal "Sobre Nós" e scrollar a página
    Given que estou na página principal "https://nexdom.tec.br/"
    When clico no menu "Sobre Nós"
    Then devo ser direcionado para "https://nexdom.tec.br/sobre-nos/"
    And devo conseguir rolar a página até o final

  Scenario: Validar menu principal "Soluções" e selecionar "Ressarcimento ao SUS"
    Given que estou na página principal "https://nexdom.tec.br/"
    When passo o mouse sobre o menu "Soluções"
    And clico na opção "Ressarcimento ao SUS"
    Then devo ser direcionado para "https://nexdom.tec.br/ressarcimento-ao-sus/"
