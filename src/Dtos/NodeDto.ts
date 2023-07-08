import { IsString, Length, IsNotEmpty, IsUUID } from "class-validator";
import { IsJson } from "../decorators/custom.validation.decorator";

export class NodeDto {

  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 255)
  name: string;

  @IsNotEmpty()
  @IsJson({ message: "Please enter valid JSON" })
  properties: string;

}
