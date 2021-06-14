# Credit Cards Canada App - for Nesto Coding test

This app was made for Nesto coding test. 

# What is Credit Cards Canada App? 

## Background 

This React app utilizes Credit Cards Canada API ( http://creditcardscanada-api.herokuapp.com/ ). It's an open API project built by myself to create a credit cards ranking web app. Currently it has information of 4 banks and the data was obtained by webscraping using Beautiful Soup.

## Potential usage

The app can be used to select credit cards of your preference on a single platform. It is directed to the consumers.

# Documentation

## REST API

The app calls data using Axios. Axios was selected due to its browser compatibality that runs beyond the fetch method. 

## State change after data load

Until the data is loaded there will be a loading spinner on the screen and as soon as the data is loaded you will see all the credit cards with its respective issuing banks. 

## Hovering on the card

When you hover on each card, you will see more details about the card such as the name of the cards, annual fee and the purchase interest rate. 

## Selecting preferences 

When you click on the navbar on the top you can rank the card by annual fee and annual purchase interest rate. 

## Components

- **BankGrid** component is acts as a container.
- **BankItem** component is responsible for displaying all the bank names on top and its cards.
- **CardItem** component sits inside **BankItem** and displays all the available cards.
- **RankedCards** component renders whenever there is a selection.
- **Header** component contains the logo and the title of the app.
- 
