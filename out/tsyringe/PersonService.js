"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonService = void 0;
var PersonService = /** @class */ (function () {
    function PersonService(personRepo) {
        this.personRepo = personRepo;
    }
    PersonService.prototype.getPersons = function () {
        return this.personRepo.getPersons();
    };
    return PersonService;
}());
exports.PersonService = PersonService;
//# sourceMappingURL=PersonService.js.map