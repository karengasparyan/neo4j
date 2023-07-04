import Neo4jService from "../services/Neo4jService";
import { NodeDto } from "../Dtos/NodeDto";

const triggerCreate = async (data: NodeDto) => {
  const { id, name, properties }: NodeDto = data;
  return Neo4jService.create(id, name, properties);
}

const triggerUpdate = async (data: NodeDto) => {
  const { id, name, properties }: NodeDto = data;
  console.log(id, name, properties)
  return Neo4jService.update(id, name, properties);
}

const triggerRemove = async (id: string) => Neo4jService.destroy(id);

export {
  triggerCreate,
  triggerUpdate,
  triggerRemove,
}