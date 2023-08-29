import neo4j, {Driver, Result, Session} from "neo4j-driver";
import { CREATE_QUERY, UPDATE_QUERY, DESTROY_QUERY, GET_QUERY, GET_ALL_QUERY, IF_HAVE_DATABASE, CREATE_DATABASE } from "../helpers/Neo4jQueries";
import { dbName, getNeo4jData } from "../helpers/utils";
import { NodeDto } from "../Dtos/NodeDto";

export default class Neo4jService {
  private driver: Driver;
  private session: Session;
  constructor(private url: string,  private username: string, private password: string) {
    this.driver = neo4j.driver(url, neo4j.auth.basic(username, password) );
    this.session = this.driver.session({ database: dbName });
  }

  public create = async (id: string, name: string, properties: string):  Promise<Result | undefined> => {
    try {
      console.log('aaaaaaaaaaaaaaaaaaaaaaa')
      console.log('aaaaaaaaaaaaaaaaaaaaaaa')
      console.log('aaaaaaaaaaaaaaaaaaaaaaa')
      console.log('aaaaaaaaaaaaaaaaaaaaaaa')
      console.log('aaaaaaaaaaaaaaaaaaaaaaa')
      const a = await this.session.run("CREATE DATABASE test");

      console.log(888, a)

      return this.session.run(CREATE_QUERY, { id, name, properties: JSON.stringify(properties) });
    } catch (error) {
      console.error(error);
    }
  };

  public update = async (id: string, name: string, properties: string): Promise<Result | undefined> => {
    try {
      return this.session.run(UPDATE_QUERY, { id, name, properties: JSON.stringify(properties) }
      );
    } catch (error) {
      console.error(error);
    }
  };

  public remove = async (id: string): Promise<Result | undefined> => {
    try {
      return this.session.run(DESTROY_QUERY, { id }
      );
    } catch (error) {
      console.error(error);
    }
  };

  public get = async (id: string): Promise<NodeDto[] | undefined> => {
    try {
      const result = await this.session.run(GET_QUERY, { id });
      return getNeo4jData(result);
    } catch (error) {
      console.error(error);
    }
  };

  public getAll = async (): Promise<NodeDto[] | undefined> => {
    try {
      const result = await this.session.run(GET_ALL_QUERY);
      return getNeo4jData(result);
    } catch (error) {
      console.error(error);
    }
  };

  public checkDatabase = async (dbName: string) => {
    try {
      const result = await this.session.run(IF_HAVE_DATABASE, { dbName });
      if(!result.records.length) {
        await this.session.run(CREATE_DATABASE, { dbName });
      }

    } catch (error) {
      console.error(error);
    }
  };

}

export type TypeNeo4jService = InstanceType<typeof Neo4jService>;