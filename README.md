# Dutchess C.A.P. Survey Website Development Guide

This repository contains the full stack Dutchess CAP Survey Builder/Editor application.

## Installation

First, clone this repository using the following command in your terminal.

```bash
git clone https://github.com/Capping-CASH-Coalition/Cash-UI.git
```
This will create a new directory called `DutchessCAP-Survey-App`.

## Angular Development

To develop the Angular functionalities, follow the following instructions:

```bash
cd DutchessCAP-Survey-App/AngularDevFolder/
ng serve
```

This will run the Angular application on `localhost:4200`

While in this development server, saved changes to Angular code will be automatically seen in the development server which can be seen by going to `localhost:4200/#/`

When you are finished testing your code and are ready to see how it performs with node.JS, run

```bash
cd DutchessCAP-Survey-App/AngularDevFolder/
ng build --env=prod
```

This will bundle the Angular code into 1 compact folder named `dist` within `DutchessCAP-Survey-App/client/`.

You can also run `bash ng build --env prod --watch` to automatically build the `dist` folder on each save which speeds up the process of having to build the application, then manually have to start the server.

## Node.JS Development

To develop the core Node web server functionalities, go to `DutchessCAP-Survey-App/app.js`.

To develop the API routes between node.JS and Angular, go to `DutchessCAP-Survey-App/server/routes/index.js`.

## Node Stack

To start the node application (note: need updated `dist` folder to see changes) 

```bash
cd DutchessCap-Survey-App
npm start
```

This will run the node server on `localhost:8888/#/`.
