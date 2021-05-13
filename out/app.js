"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
var PersonController_1 = require("./tsyringe/PersonController");
var PersonRepository_1 = require("./tsyringe/PersonRepository");
var PersonService_1 = require("./tsyringe/PersonService");
console.log('Started app.ts');
var port = 5000;
var app = (0, express_1.default)();
var personRepository = new PersonRepository_1.PersonRepository();
var personService = new PersonService_1.PersonService(personRepository);
var personController = new PersonController_1.PersonController(personService);
app.use('/persons', personController.routes());
app.listen(port, function () { return console.log("listening on port: " + port); });
console.log('App.ts ended.');
//# sourceMappingURL=app.js.map