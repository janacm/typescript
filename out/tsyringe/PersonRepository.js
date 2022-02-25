"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonRepository = void 0;
var PersonRepository = /** @class */ (function () {
    function PersonRepository() {
        this.persons = [
            {
                id: 1,
                name: "Janac Meena",
            },
            {
                id: 2,
                name: "Pradeega",
            },
        ];
    }
    PersonRepository.prototype.getPersons = function () {
        return this.persons;
    };
    return PersonRepository;
}());
exports.PersonRepository = PersonRepository;
//# sourceMappingURL=PersonRepository.js.map