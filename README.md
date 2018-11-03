# Dutchess C.A.P. Survey Website Development Guide

This repository now contains the full stack application, for developing the old `Cash-UI` - work in the AngularDevFolder.

## Installation

Currently working off of the `api` branch as the `master` branch

```bash
git clone -b api https://github.com/Capping-CASH-Coalition/Cash-UI.git
```

## Angular Development

To develop the Angular functionalities, follow the following instructions:

```bash
cd Cash-UI/AngularDevFolder/
npm start
```

This will run the Angular application on `localhost:4200`

#### Accessing the DB JSON data (`Globals.ts`)

In the module file:
```TypeScript
import { Globals } from "../../globals" //path relative
.
.
// Add the provider to the @NgModule
@NgModule({
  providers: [
    Globals
  ]
})
```

In the component file:
```TypeScript
import { Globals } from "../../globals" //path relative
.
.
// Add this at the top of the exported class    
constructor(private globals: Globals) {}

```
In the component.html file:
```HTML
<div *ngFor="let question of globals.questions"> 
    {{ question.question_id }} 
</div> 

```




## Node Stack

To start the node application (note: need updated `dist` folder to see changes) 

```bash
cd Cash-UI
npm start
```
This will run the node server on `localhost:3000`.
