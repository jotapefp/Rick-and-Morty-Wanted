## 🛸 Rick and Morty Wanted

Projeto autoral desenvolvido para fins de estudo, com o objetivo de praticar consumo de API, componentização em React e boas práticas de desenvolvimento front-end usando TypeScript.

Link para teste: https://rick-and-morty-wanted.vercel.app/

### 🧪 Tecnologias utilizadas

- React
- TypeScript
- HTML5 semântico
- CSS3
- [Rick and Morty API](https://rickandmortyapi.com/) (API pública)

### ⚙️ Funcionalidades

- **Home**: página informativa, acessível a qualquer momento pelo link "Home" na navbar
- **Characters**: aba da navbar onde fica a aplicação, com o campo de input onde o usuário digita o nome (ou parte do nome) de um personagem
- **Listagem de resultados**: exibe todos os personagens cujo nome corresponde à busca, com seus dados (nome, status, espécie, gênero, origem, localização e imagem)
- **Paginação**: navegação por números de página, respeitando o filtro de busca aplicado — buscas com muitos resultados agora exibem todas as páginas disponíveis, não só a primeira
- **Página de detalhes**: ao clicar em "View Details" num personagem, o usuário acessa uma página dedicada com informações completas (espécie, gênero, status, origem, última localização, número de aparições em episódios e tipo)
- **Tratamento de erro**: mensagem exibida quando nenhum personagem é encontrado com o nome pesquisado
- **Responsividade**: layout adaptado para desktop, tablet e celular, mantendo a mesma identidade visual em todos os tamanhos de tela

### 🎨 Estilização

Identidade visual construída em torno do tema "painel de laboratório interdimensional": fundo escuro, tipografia temática (Get Schwifty nos títulos, Bangers no corpo de texto), cores associadas ao status dos personagens (vivo, morto, desconhecido) e efeitos visuais inspirados no universo da série. O CSS foi refinado na v2 com breakpoints para diferentes tamanhos de tela.

### 🆕 Novidades da v2

- Implementada paginação completa dos resultados da API (antes, só a primeira página era exibida)
- Criada a página de detalhes por personagem
- CSS revisado e expandido com media queries para tablet e celular
- Corrigidos bugs de layout que causavam overflow horizontal em telas pequenas

### 🗺️ Roadmap (próximas versões)

- [ ] Novas formas de buscar informações da API (episódios e locais)
- [ ] Trazer mais informações quando entrar na página de detalhes
- [ ] Uma maneira de mostrar todos os personagens sem fazer a busca

### 📎 Créditos e referências

Este projeto utiliza assets e recursos de terceiros, listados abaixo com os devidos créditos:

- **Ícone do site**: [Rick and Morty Icons — Icons8](https://icons8.com.br/icons/set/rick-e-morty)
- **Imagem do título (logo)**: [Rick and Morty logo — Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg)
- **Fontes**:
  - [Get Schwifty, por Jonizaak — DeviantArt](https://www.deviantart.com/jonizaak/art/Get-Schwifty-A-Rick-and-Morty-font-638073728)
  - [Bangers — Google Fonts](https://fonts.google.com/specimen/Bangers)
- **Dados dos personagens**: [Rick and Morty API](https://rickandmortyapi.com/)

*Rick and Morty é uma propriedade intelectual da Adult Swim. Este é um projeto não-comercial, feito exclusivamente para fins de estudo e portfólio.*
