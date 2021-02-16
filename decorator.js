const Room = require("./room")

const Decorator = function(paint, room) {
    this.paint = paint
    this.room = room
    this.paintStock = []
}

Decorator.prototype.checkForPaint = function () {
    return this.paintStock.length;
}

Decorator.prototype.addPaintCan = function (paintCan) {
    this.paintStock.push(paintCan)
}

Decorator.prototype.calculateTotalPaint = function () {
    const totalPaint = this.paintStock.length * 25
    
    // for (var paint in this.paintStock) {

    // } 
    return totalPaint
}

Decorator.prototype.enoughPaintForRoom = function (room, amountofPaint) {
    if (amountofPaint >= room.area) {
        return true
    } else {
        return false
    }
}

Decorator.prototype.paintRoom = function (enoughPaint, room) {
    if (enoughPaint === true) {
        this.room.paintRoom() 
    }
}

module.exports = Decorator