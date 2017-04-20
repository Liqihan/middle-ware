var MidddleWare = require('../index');

var middleware = new MidddleWare();
middleware.use(function (options,next) {
    console.log(1111);
    next();
    console.log('end 1');
})
middleware.use(function (options,next) {
    setTimeout(function () {
        console.log('222');
        options.url = 'www.baidu.com';
        next();
        console.log('end 222');
    }, 1000);
    
})
middleware.use(function (next) {
    var self = this;
    console.log(3);
    console.log(self.options);
    console.log('end 3');
    
})
middleware.handleRequest({name: 'lqh'});