import express, { Express } from "express";
import YAML from "yamljs";
import path from "path";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import { json } from "body-parser";
import morgan from "morgan";
import indexRouter from "../routes";
import notFound from "../middlewares/notFound";
import errorHandler from "../middlewares/errorHandler";
import config from "../config/config";

const bootstrapServer = async (): Promise<void> => {
  const app: Express = express();
  const swaggerDocument = YAML.load(path.resolve("./src/swagger.yaml"));
  app.use(cors());
  app.use(json());
  app.use(express.urlencoded({ extended: false }));
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use(morgan("dev"));

  app.use("/api", indexRouter);

  app.use(express.static(path.resolve("./public")));

  app.use(notFound);
  app.use(errorHandler);

  app.all("/*", (req, res) => res.sendFile(path.resolve("./web/index.html")));

  app.listen(config.PORT, async () => {
    console.info(`Express ready at http://localhost:${config.PORT}`);
    console.info(`Express ready at http://localhost:${config.PORT}/docs`);
  })
};

export default bootstrapServer;
