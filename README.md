<div align="center">
<img src="https://github.com/Gust4voSales/Proffy-NLW-02/blob/master/.github/logo.png?raw=true" alt="icon" height="100">
</div>

<p>Proffy is a platform that connects students and teachers. It's an open source project developed during the second Next Level Week edition by @Rocketseat</p>

<p align="center">
    <a href="README-pt.md">README em Português</a>
</p>


<h3>WEB screenshots</h3>
<div align="center">
  <img src="https://github.com/Gust4voSales/Proffy-NLW-02/blob/master/.github/web-landing.png?raw=true" alt="logo" height="425">
  <img src="https://github.com/Gust4voSales/Proffy-NLW-02/blob/master/.github/web-proffys.png?raw=true" alt="logo" height="425">
</div>

<h3>MOBILE screenshots</h3>
<div align="center">
  <img src="https://github.com/Gust4voSales/Proffy-NLW-02/blob/master/.github/mobile-splash.png?raw=true" alt="logo" height="425">
  <img src="https://github.com/Gust4voSales/Proffy-NLW-02/blob/master/.github/mobile-home.png?raw=true" alt="logo" height="425">
  <img src="https://github.com/Gust4voSales/Proffy-NLW-02/blob/master/.github/mobile-favoritos.png?raw=true" alt="logo" height="425">
</div>

## 📜 About
This project aims to be a bridge that connects students and teachers through a platform. Teachers can register to the website adding their informations among with their contact. 
Students can filter teachers by hour, day and subject. This repo contaims the code from both the frontend and the backend API that serves the web and mobile applications.

## 💻 Techs
* [NodeJS](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/) 
* [Express](https://expressjs.com/) 
* [Knex.js](http://knexjs.org/)
* [React](https://reactjs.org/)   
* [React Native](https://reactnative.dev/) 
* [Expo](https://expo.io/)       

## 🛠 Getting started
First of all, clone this repo running on your terminal with ````git clone https://github.com/Gust4voSales/Proffy-NLW-02.git```` 
* #### Running the backend 
1. Run ````yarn```` inside server folder to install all dependecies
2. Then ````yarn knex:migrate```` to run the database migrations and create the tables
3. Finally ````yarn start```` to run the api
* #### Running the web project
1. Run ````yarn```` inside web folder to install all dependecies 
2. ````yarn start```` to run the web aplication
* #### Running the mobile project
1. Run ````yarn```` inside mobile folder to install all dependecies
2. ````yarn start```` to run the mobile aplication (expo is required in your machine) 
3. Change the baseURL link in the file: src/services/api.ts (Add your own IP address, you can check it in the Expo web console that opens once you run the app)
