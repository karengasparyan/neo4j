import { IsString, Length, IsNotEmpty } from "class-validator";
import { IsJson } from "../decorators/custom.validation.decorator";


export class NodeInputDto {

  @IsNotEmpty()
  @IsString()
  @Length(3, 255)
  name: string;

  @IsNotEmpty()
  @IsJson({ message: "Please enter valid JSON" })
  properties: string;

}
