## 🛸 Rick and Morty Wanted

Projeto autoral desenvolvido para fins de estudo, com o objetivo de praticar consumo de API, componentização em React e boas práticas de desenvolvimento front-end usando TypeScript.

**Status: projeto finalizado** ✅

Link para teste: https://rick-and-morty-wanted.vercel.app/

### 🧪 Tecnologias utilizadas

- React
- TypeScript
- HTML5 semântico
- CSS3
- [Rick and Morty API](https://rickandmortyapi.com/) (API pública)

### ⚙️ Funcionalidades

- **Home**: página informativa, acessível a qualquer momento pelo link "Home" na navbar
- **Characters**: aba da navbar onde fica a aplicação, com campo de busca por nome de personagem e filtro por status (Alive, Dead, Unknown ou "Any status")
- **Busca combinada**: nome e status podem ser usados juntos ou separadamente — inclusive é possível listar todos os personagens da API sem digitar nenhum nome, usando apenas o filtro "Any status"
- **Listagem de resultados**: exibe todos os personagens correspondentes à busca, com seus dados (nome, status, espécie, gênero, localização e imagem)
- **Paginação**: navegação por números de página truncados (com reticências para grandes volumes de resultados) e botões de anterior/próxima página, respeitando os filtros aplicados
- **Página de detalhes**: ao clicar em "View Details" num personagem, o usuário acessa uma página dedicada com informações completas (espécie, gênero, status, origem, última localização, tipo) e a lista de episódios em que o personagem aparece, com código, nome e data de exibição de cada um
- **Tratamento de erro**: mensagem exibida quando nenhum personagem é encontrado com os filtros aplicados
- **Responsividade**: layout adaptado para desktop, tablet e celular, mantendo a mesma identidade visual em todos os tamanhos de tela

### 🎨 Estilização

Identidade visual construída em torno do tema "Rick and Morty": fundo escuro, tipografia temática (Get Schwifty nos títulos, Bangers no corpo de texto), cores associadas ao status dos personagens (vivo, morto, desconhecido) e efeitos visuais inspirados no universo da série. CSS totalmente responsivo, com breakpoints para desktop, tablet e celular.

### 🆕 Changelog

**v3 (2.0.5/2.0.6)**
- Adicionado filtro de busca por status (Alive, Dead, Unknown), combinável com o nome
- Habilitada a listagem de todos os personagens da API sem necessidade de busca por nome
- Paginação truncada com reticências e botões de anterior/próxima página, substituindo a listagem de todos os números de página
- Página de detalhes expandida com a lista de episódios em que o personagem aparece

**v2**
- Implementada paginação completa dos resultados da API (antes, só a primeira página era exibida)
- Criada a página de detalhes por personagem
- CSS revisado e expandido com media queries para tablet e celular
- Corrigidos bugs de layout que causavam overflow horizontal em telas pequenas

**v1**
- Versão inicial: busca de personagens por nome, listagem de resultados e tratamento de erro

### 🙏 Agradecimentos

- **Ivy** — pela ajuda na escolha de algumas das paletas de cores do projeto
- **John** — pela ajuda nos testes, identificando erros e pontos de melhoria

### 📎 Créditos e referências

Este projeto utiliza assets e recursos de terceiros, listados abaixo com os devidos créditos:

- **Ícone do site**: [Rick and Morty Icons — Icons8](https://icons8.com.br/icons/set/rick-e-morty)
- **Imagem do título (logo)**: [Rick and Morty logo — Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg)
- **Fontes**:
  - [Get Schwifty, por Jonizaak — DeviantArt](https://www.deviantart.com/jonizaak/art/Get-Schwifty-A-Rick-and-Morty-font-638073728)
  - [Bangers — Google Fonts](https://fonts.google.com/specimen/Bangers)
- **Dados dos personagens e episódios**: [Rick and Morty API](https://rickandmortyapi.com/)

*Rick and Morty é uma propriedade intelectual da Adult Swim. Este é um projeto não-comercial, feito exclusivamente para fins de estudo e portfólio.*
