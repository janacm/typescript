import { Router } from "express";
import { autoInjectable } from "tsyringe";
import { PersonService } from "./PersonService";

@autoInjectable() // Injects any deps in our constructor if possible.
class PersonController {
    personService: PersonService;
    router: Router;

    constructor(personService: PersonService) {
        this.personService = personService;
        this.router = Router();
    }

    routes() {
        this.router.get('/', (_req, res) => res.send(this.getPersons()));
        return this.router;
    }

    getPersons() {
        return this.personService.getPersons();
    }

}

export default PersonController;