var jsonServer = require("json-server");
var server = jsonServer.create();
var router = jsonServer.router("./data/database.json");
var middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, function () {
    console.log("Servicio Backend está ejecutando en " +
                "http://localhost:3000");
});