import {IsUUID, IsJSON, Length, IsNotEmpty, IS_UUID} from "class-validator";

export class ParamsUUIDDto {

  @IsNotEmpty()
  @IsUUID(4)
  id: string;

}
