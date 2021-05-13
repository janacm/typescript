import { autoInjectable } from "tsyringe";
import { PersonRepository } from "./PersonRepository";

@autoInjectable()
export class PersonService {
    personRepo: PersonRepository;

    constructor(personRepo: PersonRepository) {
        this.personRepo = personRepo;
    }

    getPersons() {
        return this.personRepo.getPersons();
    }
}
