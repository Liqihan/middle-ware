# middle-ware

消息中间件

## usage
```
var middleware = new Middleware();
middleware.use(function(next){console.log(1);next();})
middleware.use(function(next){console.log(2);next();})
middleware.use(function(next){console.log(3);})
middleware.use(function(next){console.log(4);next();})
middleware.handleRequest();
//输出结果： 
//1
//2
//3
//
```