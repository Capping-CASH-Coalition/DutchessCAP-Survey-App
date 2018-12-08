# Dutchess C.A.P. Survey Website Development Guide

This repository contains the full stack Dutchess CAP Survey Builder/Editor application. The application uses node.JS as the web server and API, Angular as the web development framework, and PostgreSQL as the database.

## Installation

First, clone this repository using the following command in your terminal.

```bash
git clone https://github.com/Capping-CASH-Coalition/Cash-UI.git
```
This will create a new directory called `DutchessCAP-Survey-App`.

To start the full application (note: need updated `dist` folder to see any new development changes) 

```bash
cd DutchessCap-Survey-App
npm start
```

This will run the node server on `localhost:8888/#/`.

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

### Angular Directory Stucture

The majority of the functional code is located within the `src` directory beginning with the `index.html`. This file contains the very base root HTML code that is rendered before any other content. The contents can be seen while pages are loading.

The `assets` directory contains the CSS/Javascript/Images necessary for the root `index.html`.

The `app` directory contains the `components`, `models`, `pages`, `pipes`, `services` and root `app.component` files. The root `app` component is the first component that loads within Angular. `app.module.ts` contains all imports, declarations, and providers for the entire application. `app.routes.ts` contains all of the URL routes for each page.

The `components` directory contains small HTML components that can inserted into other pages/components. It currently contains the side `navigation` and `topnavbar` components.

The `pages` directory contains the full page components for each HTML page.

The `models` directory contains the class definitions used throughout the application.

The `pipes` directory contains the filter pipes that are used to sort through data throughout the application.

The `services` directory contains the services such as survey API calls used through the application.

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
