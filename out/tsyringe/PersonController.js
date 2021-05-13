"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonController = void 0;
var express_1 = require("express");
var PersonController = /** @class */ (function () {
    function PersonController(personService) {
        this.personService = personService;
        this.router = new express_1.Router();
    }
    PersonController.prototype.routes = function () {
        var _this = this;
        this.router.get('/', function (_req, res) { return res.send(_this.getPersons()); });
        return this.router;
    };
    PersonController.prototype.getPersons = function () {
        return this.personService.getPersons();
    };
    return PersonController;
}());
exports.PersonController = PersonController;
//# sourceMappingURL=PersonController.js.map