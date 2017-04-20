function MidddleWare () {
    var self = this;
    self.cache = [];
    self.options = undefined;
}
MidddleWare.prototype.use = function (fn) {
    var self = this;
    if (typeof fn !== 'function') {
        throw 'middleware must be function';
    }
    self.cache.push(fn);
    return this;
}
MidddleWare.prototype.next = function (fn) {
    var self = this
    if (self.middlewares && self.middlewares.length > 0) {
        var ware = self.middlewares.shift();
        if (typeof self.options !== 'undefined') {
            ware.call(this,this.options, this.next.bind(this));
            return;
        }
        ware.call(this,this.next.bind(this));
    }
}
MidddleWare.prototype.handleRequest = function (options) {
    var self = this;
    if (typeof options !== 'undefined') {
        self.options = options;
    }
    self.middlewares = this.cache.map(function (fn) {
        return fn;
    })
    this.next();
}

module.exports = MidddleWare;