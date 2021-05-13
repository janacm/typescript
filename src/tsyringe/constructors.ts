
export class PersonInfo {
    name: String;
    constructor(name: String) {
        this.name = name;
    }
}

export class Person {
    info: PersonInfo;

    constructor(info: PersonInfo) {
        this.info = info;
    }
}
