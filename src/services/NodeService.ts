import HttpError from "http-errors";
import { nodeRepository } from "../options/Repositories";
import { Nodes } from "../entities";
import { DeleteResult } from "typeorm";
import { NodeDto } from "../Dtos/NodeDto";
import { NodeInputDto } from "../Dtos/NodeInputDto";
import { NOT_FOUND } from "../helpers/Messages";

class NodeService {
  constructor() {}

  public async create(nodeData: NodeDto): Promise<Nodes> {
    const newNode = nodeRepository.create(nodeData);
    return nodeRepository.save(newNode);
  }

  public async update(id: string, nodeData: NodeInputDto): Promise<Nodes> {
    await nodeRepository.update(id, nodeData);
    return nodeRepository.save({id, ...nodeData})
  }

  public async destroy(id: string): Promise<DeleteResult> {
    return nodeRepository.delete(id);
  }

  public async get(id: string): Promise<Nodes> {
    const data = await nodeRepository.findOneBy({ id });
    if (!data) throw HttpError(404, NOT_FOUND)
    return data;
  }

  public async getAll(): Promise<Nodes[]> {
    return nodeRepository.find({});
  }
}

export default new NodeService();
