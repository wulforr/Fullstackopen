const dummytest = require('../utils/list_helper').dummy

describe('dummy', () => {
    test('a dumy test',() => {
        expect(dummytest()).toBe(1)
    })
})