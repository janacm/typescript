import {AbstractView} from "react";
import DateHandling from "../typescriptFeatures/DateHandling";
import {TypeScriptBasicSyntax} from "../typescriptFeatures/TypeScriptBasicSyntax"; // Used to suppress legacy error see: https://stackoverflow.com/questions/56577201/why-is-isolatedmodules-error-fixed-by-any-import/56577324

function sum(a: number,b: number,) {
    return a + b;
}  

function getObject() {
    return {
        "key": "value"
    }
}  

// Simple equality
test('Sum of 1 and 1', () => {
    expect(sum(1,1)).toBe(2);
}); 

// Simple inequality
test('Sum of 1 and 1', () => {
    expect(sum(1,1)).not.toBe(0);
}); 

// Object equality
test ('Get object', () => {
    expect(getObject()).toEqual({
        "key": "value"
    });
});

describe('this is a group of tests', () => {
    beforeEach(() => {
        // This happens for each tests inside this describe block
    });

    test('Do something', () => {
        expect(true).toBe(true);
    });
});

// Mocks
const myMock = jest.fn();
const a = new myMock();
const b = {};
const bound = myMock.bind(b);
bound();
console.log(myMock.mock.instances); // > [ <a>, <b> ]

// Actual tests start

describe('Typescript basic syntax tests', () => {
    test('Do something', () => {
        let basicSyntax = new TypeScriptBasicSyntax()
        expect(basicSyntax.hello()).toBe("hello");

    });
});

describe('DateHandling tests', () => {
    beforeEach(() => {
        // This happens for each tests inside this describe block
    });

    test('Do something', () => {
        let dateHandler = new DateHandling();
        dateHandler.testingDates()
        expect(true).toBe(true);
    });
});


