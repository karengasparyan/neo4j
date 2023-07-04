import { IsString, Length, IsNotEmpty, IsObject, IsUUID } from "class-validator";

export class NodeInputDto {

  @IsNotEmpty()
  @IsString()
  @Length(3, 255)
  name: string;

  @IsNotEmpty()
  @IsObject()
  properties: string;

}
