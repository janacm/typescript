"use strict";
function sum(a, b) {
    return a + b;
}
function getObject() {
    return {
        "key": "value"
    };
}
// Simple equality
test('Sum of 1 and 1', function () {
    expect(sum(1, 1)).toBe(2);
});
// Simple inequality
test('Sum of 1 and 1', function () {
    expect(sum(1, 1)).not.toBe(0);
});
// Object equality
test('Get object', function () {
    expect(getObject()).toEqual({
        "key": "value"
    });
});
describe('this is a group of tests', function () {
    beforeEach(function () {
        // This happens for each tests inside this describe block
    });
    test('Do something', function () {
        expect(true).toBe(true);
    });
});
// Mocks
var myMock = jest.fn();
var a = new myMock();
var b = {};
var bound = myMock.bind(b);
bound();
console.log(myMock.mock.instances); // > [ <a>, <b> ]
//# sourceMappingURL=jest.test.js.map