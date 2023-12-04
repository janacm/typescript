// import express from "express";
import "reflect-metadata";
import { container } from "tsyringe";
import PersonController from "./tsyringe/PersonController";

import DateHandling from "./typescriptFeatures/DateHandling";
import React from "react";
import Router from "./router/Router";

console.log("Started app.ts");

// const port = 5000;
// const app = express(); // TODO: Causes "Cannot Read property error"

// // These lines get replaced by TSyringe
// // const personRepository = new PersonRepository();
// // const personService = new PersonService(personRepository);
// // const personController = new PersonController(personService);
// // These lines get replaced by TSyringe
// const personController = container.resolve(PersonController);

// app.use('/persons', personController.routes());
// app.listen(port, () => console.log(`listening on port: ${port}`));

const d: DateHandling = new DateHandling();
d.testingDates();

console.log("App.ts ended.");

function App() {
  return <Router />;
}

export default App;
