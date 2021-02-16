const assert = require('assert');
const Paint = require('../paint.js');


describe('Paint', function() {
    let paint

    beforeEach(function() {
        paint = new Paint(1)
    })

    it('should have litres', function() {
        const actual = paint.litres
        assert.strictEqual(actual, 1)
    })

    it('should not be empty', function () {
        const actual = paint.isEmpty
        assert.strictEqual(actual, false)
    })

    it('should be empty', function() {
        paint.emptyCan()
        const actual = paint.isEmpty
        assert.strictEqual(actual, true)
    })

})



