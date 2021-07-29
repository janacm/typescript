"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
var tsyringe_1 = require("tsyringe");
var PersonController_1 = require("./tsyringe/PersonController");
var DateHandling_1 = require("./typescriptFeatures/DateHandling");
var react_1 = __importDefault(require("react"));
var Router_1 = __importDefault(require("./router/Router"));
console.log('Started app.ts');
var port = 5000;
var app = express_1.default();
// These lines get replaced by TSyringe
// const personRepository = new PersonRepository();
// const personService = new PersonService(personRepository);
// const personController = new PersonController(personService);
// These lines get replaced by TSyringe
var personController = tsyringe_1.container.resolve(PersonController_1.PersonController);
app.use('/persons', personController.routes());
app.listen(port, function () { return console.log("listening on port: " + port); });
var d = new DateHandling_1.DateHandling();
d.testingDates();
console.log('App.ts ended.');
function App() {
    return react_1.default.createElement(Router_1.default, null);
}
exports.default = App;
//# sourceMappingURL=app.js.map