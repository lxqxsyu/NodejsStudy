var server = require("./server");
var router = require("./route");
var handle = require("./requestHandler");
server.start(router.route, handle);