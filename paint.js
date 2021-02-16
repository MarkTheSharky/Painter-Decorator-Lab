const Paint = function(colour, litres) {
    this.colour = colour;
    this.litres = litres;
    this.isEmpty = false;
}

Paint.prototype.emptyCan = function() {
    this.isEmpty = true
}

module.exports = Paint;