import {
  AfterInsert,
  AfterUpdate,
  BeforeRemove,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from "typeorm";
import Neo4jService, { TypeNeo4jService } from "../services/Neo4jService";
import config from "../config/config";

@Entity()
export default class Nodes {
  private static Neo4jService: TypeNeo4jService;
  constructor() {
    Nodes.Neo4jService = new Neo4jService(config.NEO4JURL, config.NEO4JUSER, config.NEO4JPASSWORD);
  }

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column("json", {
    nullable: false,
    default: "{}"
  })
  properties: string;

  @AfterInsert()
  afterInsert() {
    const { id, name, properties } = this;
    return Nodes.Neo4jService.create(id, name, properties);
  }

  @AfterUpdate()
  afterUpdate() {
    const { id, name, properties } = this;
    return Nodes.Neo4jService.update(id, name, properties);
  }

  @BeforeRemove()
  beforeRemove() {
    return Nodes.Neo4jService.remove(this.id);
  }

}
