"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    return a + b;
}
function getObject() {
    return {
        "key": "value"
    };
}
test('Sum of 1 and 1', function () {
    expect(sum(1, 1)).toBe(2);
});
test('Get object', function () {
    expect(getObject).toEqual({
        "key": "value"
    });
});
//# sourceMappingURL=jestTest.js.map