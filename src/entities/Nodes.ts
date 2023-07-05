import {
  AfterInsert,
  AfterUpdate,
  BeforeRemove,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from "typeorm";
import Neo4jService from "../services/Neo4jService";

@Entity()
export default class Nodes {
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
    return Neo4jService.create(id, name, properties);
  }

  @AfterUpdate()
  afterUpdate() {
    const { id, name, properties } = this;
    return Neo4jService.update(id, name, properties);
  }

  @BeforeRemove()
  beforeRemove() {
    return Neo4jService.remove(this.id);
  }

}
