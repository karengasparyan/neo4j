import { IsString, Length, IsNotEmpty, IsObject } from "class-validator";

export class NodeInputDto {

  @IsNotEmpty()
  @IsString()
  @Length(3, 255)
  name: string;

  @IsNotEmpty()
  properties: string;

}
