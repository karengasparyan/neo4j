require("dotenv").config();
import AppDataSource from "./options/DataSource";
import bootstrapServer from "./options/bootstrapServer";
const { NODE_ENV } = process.env;

AppDataSource.initialize().then(() => console.info(`DB connected ${NODE_ENV}`));
bootstrapServer().then((r) => r);
