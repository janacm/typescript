"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constructors_1 = require("./tsyringe/constructors");
var message = 'You ran app.ts';
console.log(message);
var personInfo1 = new constructors_1.PersonInfo("janac");
var person = new constructors_1.Person(personInfo1);
console.log(person.info.name);
//# sourceMappingURL=app.js.map