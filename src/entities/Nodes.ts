import {
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  Column,
  Entity,
  PrimaryGeneratedColumn, BeforeUpdate
} from "typeorm";
import { triggerCreate, triggerRemove, triggerUpdate } from "../helpers/Triggers";

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
   return triggerCreate(this);
  }

  @BeforeUpdate()
  afterUpdate() {
    console.log('aaaaaaaaaaaaaaaaaaaaaa')
    return triggerUpdate(this);
  }

  @AfterRemove()
  afterRemove() {
    return triggerRemove(this.id);
  }

}
