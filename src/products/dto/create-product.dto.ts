import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {

  @IsString()
  name!: string; //! que se va a recibir algo 

  @IsString()
  @IsOptional()
  description?: string;// : dan el tipo de dato y ? puede ser opcional 
  @IsNumber()
  @Type(() => Number)
  price!: number;
}
