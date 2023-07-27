import { NextFunction, Request, Response } from "express";
import { setDbName } from "../helpers/utils";
import config from "../config/config";
import Neo4jService from "../services/Neo4jService";

const neo4jService = new Neo4jService(config.NEO4JURL, config.NEO4JUSER, config.NEO4JPASSWORD);

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
    const dbName = req.query.db as string;
    await setDbName(dbName);
    await neo4jService.checkDatabase(dbName)
    return next();
}