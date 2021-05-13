import { Person, PersonInfo } from "./tsyringe/constructors";
let message: string = 'You ran app.ts';
console.log(message);

const personInfo1 = new PersonInfo("janac");
const person: Person = new Person(personInfo1)

console.log(person.info.name);

