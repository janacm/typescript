"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonController = void 0;
var express_1 = require("express");
var tsyringe_1 = require("tsyringe");
var PersonService_1 = require("./PersonService");
var PersonController = /** @class */ (function () {
    function PersonController(personService) {
        this.personService = personService;
        this.router = express_1.Router();
    }
    PersonController.prototype.routes = function () {
        var _this = this;
        this.router.get('/', function (_req, res) { return res.send(_this.getPersons()); });
        return this.router;
    };
    PersonController.prototype.getPersons = function () {
        return this.personService.getPersons();
    };
    PersonController = __decorate([
        tsyringe_1.autoInjectable() // Injects any deps in our constructor if possible.
        ,
        __metadata("design:paramtypes", [PersonService_1.PersonService])
    ], PersonController);
    return PersonController;
}());
exports.PersonController = PersonController;
//# sourceMappingURL=PersonController.js.map