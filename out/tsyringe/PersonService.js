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
exports.PersonService = void 0;
var tsyringe_1 = require("tsyringe");
var PersonRepository_1 = require("./PersonRepository");
var PersonService = /** @class */ (function () {
    function PersonService(personRepo) {
        this.personRepo = personRepo;
    }
    PersonService.prototype.getPersons = function () {
        return this.personRepo.getPersons();
    };
    PersonService = __decorate([
        tsyringe_1.autoInjectable(),
        __metadata("design:paramtypes", [PersonRepository_1.PersonRepository])
    ], PersonService);
    return PersonService;
}());
exports.PersonService = PersonService;
//# sourceMappingURL=PersonService.js.map