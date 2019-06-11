const http = require("http");
const { app } = require("./api/app");
const server = http.createServer(app);
const PORT = 8080;
server.listen(PORT, () => "listening on", PORT);
