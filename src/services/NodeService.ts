import HttpError from "http-errors";
import { nodeRepository } from "../options/Repositories";
import { Nodes } from "../entities";
import { NodeDto } from "../Dtos/NodeDto";
import { NodeInputDto } from "../Dtos/NodeInputDto";
import { NOT_FOUND } from "../helpers/Messages";

class NodeService {
  constructor() {}

  public async create(nodeData: NodeDto): Promise<Nodes> {
    const newNode = nodeRepository.create(nodeData);
    return nodeRepository.save(newNode);
  }

  public async update(id: string, updateData: NodeInputDto): Promise<Nodes> {
    const data = await this.get(id);
    data.name = updateData.name;
    data.properties = updateData.properties;
    return nodeRepository.save(data);
  }

  public async remove(id: string): Promise<Nodes> {
    const data = await this.get(id);
    return nodeRepository.remove(data);
  }

  public async get(id: string): Promise<Nodes> {
    const data = await nodeRepository.findOneBy({ id });
    if (!data) throw HttpError(404, NOT_FOUND)
    return data;
  }

  public async getAll(): Promise<Nodes[]> {
    return nodeRepository.find({
      order: {
        name: "ASC"
      }
    });
  }
}

export default new NodeService();
