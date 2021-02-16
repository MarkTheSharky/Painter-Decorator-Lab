const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js')
const Room = require('../room.js')

describe('Decorator', function () {

    let decorator;
    let paint;
    let room;

    beforeEach(function () {
        paint = new Paint('Red', 25)
        room = new Room(100);
        decorator = new Decorator(paint, room);
        
    })

    it('should show decorator has no paint', function () {
        const actual = decorator.checkForPaint()
        assert.deepStrictEqual(actual, 0)
    })

    it('should add a can of paint', function () {
        decorator.addPaintCan(paint)
        const actual = decorator.checkForPaint()
        assert.deepStrictEqual(actual, 1)
    })

    it('should check for total litres of paint', function () {
        decorator.addPaintCan(paint)
        const actual = decorator.calculateTotalPaint()
        assert.strictEqual(actual, 25)
    })

    it('should calculate if enough paint for room', function () {
        decorator.addPaintCan(paint)
        decorator.addPaintCan(paint)
        decorator.addPaintCan(paint)
        decorator.addPaintCan(paint)
        const amountofPaint = decorator.calculateTotalPaint()
        const actual = decorator.enoughPaintForRoom(room, amountofPaint)
        assert.strictEqual(actual, true)
    })

    it('should paint room if enough paint', function () {
        decorator.addPaintCan(paint)
        decorator.addPaintCan(paint)
        decorator.addPaintCan(paint)
        decorator.addPaintCan(paint)
        const amountofPaint = decorator.calculateTotalPaint()
        const enoughPaint = decorator.enoughPaintForRoom(room, amountofPaint)
        decorator.paintRoom(enoughPaint, room)
        const actual = room.isPainted
        assert.strictEqual(actual, true)
    })
})
