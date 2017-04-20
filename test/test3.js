var MidddleWare = require('../dist/Middware');

var middleware = new MidddleWare();
middleware.use(function (next) {
    console.log(1111);
    next();
    console.log('end 1');
})
middleware.use(function (next) {
        console.log('222');
        next();
        console.log('end 222');
    
})
middleware.use(function (next) {
    var self = this;
    console.log(3);
    console.log('end 3');
    
})
middleware.handleRequest();