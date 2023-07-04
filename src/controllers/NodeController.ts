import { NextFunction, Request, Response } from "express";
import { v4 as uuId } from "uuid"
import NodeService from "../services/NodeService";
import { ValidationController } from "../decorators/validation.controller.decorator";
import { NodeInputDto } from "../Dtos/NodeInputDto";
import { ParamsUUIDDto } from "../Dtos/ParamsUUID.dto";
import Neo4jService from "../services/Neo4jService";
import { CREATE_NODE, UPDATE_NODE, DELETE_NODE, LIST_NODE } from "../helpers/Messages"

class NodeController {
  constructor() {}

  @ValidationController(NodeInputDto, "body")
  public async create(req: Request, res: Response, next: NextFunction) {
    const id = uuId();
    const { name, properties }: NodeInputDto = req.body;
    try {
      const data = await NodeService.create({ id, name, properties });

      return res.status(200).json({
        message: CREATE_NODE,
        data,
      });
    } catch (e) {
      return next(e);
    }
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const postgres = await NodeService.getAll();
      const Neo4j = await Neo4jService.getAll();

      return res.status(200).json({
        message: LIST_NODE,
        data: {
          postgres,
          Neo4j
        }
      });

    } catch (e) {
      return next(e);
    }
  }

  @ValidationController(ParamsUUIDDto, "params")
  @ValidationController(NodeInputDto, "body")
  public async update(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { name, properties }: NodeInputDto = req.body;
    try {
      await NodeService.get(id);
      const data = await NodeService.update(id, req.body);

      return res.status(200).json({
        message: UPDATE_NODE,
        data
      });

    } catch (e) {
      return next(e);
    }
  }

  @ValidationController(ParamsUUIDDto, "params")
  public async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const postgres = await NodeService.get(id);
      const Neo4j = await Neo4jService.get(id);

      return res.status(200).json({
        message: DELETE_NODE,
        data: {
          postgres,
          Neo4j
        }
      });

    } catch (e) {
      return next(e);
    }
  }

  @ValidationController(ParamsUUIDDto, "params")
  public async destroy(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const data = await NodeService.get(id);
      await NodeService.destroy(id);

      return res.status(200).json({
        message: DELETE_NODE,
        data,
      });

    } catch (e) {
      return next(e);
    }
  }

}

export default new NodeController();
