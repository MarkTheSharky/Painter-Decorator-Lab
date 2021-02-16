const Paint = function(litres) {
    this.litres = litres;
    this.isEmpty = false;
}

Paint.prototype.emptyCan = function() {
    this.isEmpty = true
}

module.exports = Paint;