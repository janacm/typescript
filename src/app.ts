import express from "express";
import "reflect-metadata";
import { container } from "tsyringe";
import { Person } from "./tsyringe/Person";
import { PersonController } from "./tsyringe/PersonController";
import { PersonRepository } from "./tsyringe/PersonRepository";
import { PersonService } from "./tsyringe/PersonService";
console.log('Started app.ts');

const port = 5000;
const app = express();

// These lines get replaced by TSyringe
// const personRepository = new PersonRepository();
// const personService = new PersonService(personRepository);
// const personController = new PersonController(personService);
// These lines get replaced by TSyringe
const personController = container.resolve(PersonController);

app.use('/persons', personController.routes());
app.listen(port, () => console.log(`listening on port: ${port}`));

console.log('App.ts ended.');

