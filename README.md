<img alt="NLW" src="web/public/ecoleta.png" />

<a href="LICENSE" style="text-decoration: none">
    <img alt="MIT - License" src="https://img.shields.io/github/license/caduol/ecoleta?color=%233DC57B">
</a>
<a href="https://github.com/caduol/ecoleta/" style="text-decoration: none">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/caduol/ecoleta">
</a>
<a href="https://github.com/caduol/ecoleta/stargazers" style="text-decoration: none">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/caduol/ecoleta?style=social">
</a>

## Sobre o Projeto
A aplicação Ecoleta tem como propósito conectar entidades engajadas em ampliar a importância da coleta seletiva junto aos cidadãos, através de um processo de melhor gerenciamento para o reaproveitamento dos materiais descartáveis. 
A aplicação Web permite que as entidades façam os cadastros dos postos de coleta, como nome, email, whatsapp, estado, cidade, itens de descarte e imagem do local, anexado como referência. Deste modo, os cidadãos que utilizarem o App Mobile poderão encontrar estes postos mais facilmente para os descartes dos resíduos. 
A aplicação mobile permite aos usuários buscarem pelos postos de coleta cadastrados em seus estados e cidades afim de efeturem os descartes, obtendo o detalhamento dos pontos de coleta, como os cadastrados na parte Web pelas entidades, podendo contar com filtro por tipo de material a ser descartado quando específico, no caso de eletrônicos ou orgânicos, somado a opção do usuário entrar em contato direto com a entidade via e-mail ou Whatsapp após escolhida a entidade no mapa, para maiores informações. Essa iniciativa surgiu próximo a data da semana do meio ambiente no evento <strong>Next Level Week</strong>, realizado pela [Rocketseat](https://github.com/Rocketseat).

## Tecnologias utilizadas nesse projeto

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)

## Como executar

```sh
  # Faça um clone do projeto
  $ git clone git@github.com:caduol/ecoleta.git

  # Vá até a pasta do projeto
  $ cd ecoleta

  # Em seguida, vá para pasta server
  $ cd server

  # Instale as dependências
  $ npm install

  ## Crie o banco de dados 
  $ npm run knex:migrate
  $ npm run knex:seed

  # Inicie a api
  $ npm run dev  

  # Vá para o diretório web e inicie a aplicação
  $ cd web
  $ npm start

  # vá para o diretório mobile e inicie a aplicação
  $ cd mobile
  $ npm start
```

## Como contribuir

- Faça um Fork desse repositório,
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`

## License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---
