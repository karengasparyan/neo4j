import AppDataSource from "./DataSource";
import { Nodes } from "../entities";

const nodeRepository = AppDataSource.getRepository(Nodes);

export {
  nodeRepository,
};
