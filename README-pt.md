<div align="center">
<img src="https://github.com/Gust4voSales/Proffy-NLW-02/blob/master/.github/logo.png?raw=true" alt="icon" height="100">
</div>

<p>Proffy é uma plataforma que conecta estudantes e professores. É um projeto aberto desenvolvido durante a segunda edição do Next Level Week pela @Rocketseat</p>

<p align="center">
    <a href="README.md">English README</a>
 </p>


<h3>WEB capturas de tela</h3>
<div align="center">
  <img src="https://github.com/Gust4voSales/Proffy-NLW-02/blob/master/.github/web-landing.png?raw=true" alt="logo" height="425">
  <img src="https://github.com/Gust4voSales/Proffy-NLW-02/blob/master/.github/web-proffys.png?raw=true" alt="logo" height="425">
</div>

<h3>MOBILE capturas de tela</h3>
<div align="center">
  <img src="https://github.com/Gust4voSales/Proffy-NLW-02/blob/master/.github/mobile-splash.png?raw=true" alt="logo" height="425">
  <img src="https://github.com/Gust4voSales/Proffy-NLW-02/blob/master/.github/mobile-home.png?raw=true" alt="logo" height="425">
  <img src="https://github.com/Gust4voSales/Proffy-NLW-02/blob/master/.github/mobile-favoritos.png?raw=true" alt="logo" height="425">
</div>

## 📜 Sobre
Este projeto visa ser uma ponte que conecta estudantes e professores por meio de uma plataforma. Professores podem se registrar no site adicionando suas informações junto do 
seu contato. Estudantes podem filtrar professores por hora, dia e matéria. Este repositório contém o código do frontend e da API do backend que serve tanto a aplicação web como a mobile.

## 💻 Tecnologias
* [NodeJS](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/) 
* [Express](https://expressjs.com/) 
* [Knex.js](http://knexjs.org/)
* [React](https://reactjs.org/)   
* [React Native](https://reactnative.dev/) 
* [Expo](https://expo.io/)       

## 🛠 Iniciando
Primeiramente, clone o repositório rodando ````git clone https://github.com/Gust4voSales/Proffy-NLW-02.git```` no seu terminal
* #### Iniciando o backend 
1. Rode ````yarn```` dentro da pasta server para instalar todas as dependências 
2. Então ````yarn knex:migrate```` para rodar as migrations do banco de dados e criar as tabelas 
3. Por fim, ````yarn start```` para rodar a API
4. Opcionalmente, <br/> <div align="center">[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Proffy-%20NLW%2302&uri=https%3A%2F%2Fraw.githubusercontent.com%2FGust4voSales%2FProffy-NLW-02%2Fmaster%2F.github%2FInsomnia_2020-08-11.json)</div>
* #### Iniciando o projeto web
1. Rode ````yarn```` dentro da pasta web para instalar todas as dependências 
2. ````yarn start```` para rodar a aplicação WEB
* #### Iniciando o projeto mobile
1. Rode ````yarn```` dentro da pasta mobile para instalar todas as dependências 
2. ````yarn start```` para rodar o app (é necessário o Expo na sua máquina) 
3. Mude o link do campo baseURL no arquivo: src/services/api.ts (Adicione o seu próprio endereço de IP, você pode verificar qual é no console do expo que abre no navegador quando inica a aplicação)

