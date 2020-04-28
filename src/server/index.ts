import * as express from "express";
import * as cors from "cors";

const app: express.Express = express();

app.use(cors);

app.listen(3001, "localhost", () => {
  console.log("Server connected");
});

export default app;
