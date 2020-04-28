import * as http from "http";

import app from "./server";

app.set("port", 3001);

const server = http.createServer(app);

server.listen(3001, "localhost");
server.on("listening", () => {
  console.log("connected", server.address());
});
