import { IsString, IsNotEmpty } from 'class-validator';

export class CrearCostumerDto {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;
  @IsString()
  @IsNotEmpty()
  readonly apellido: string;
  @IsString()
  @IsNotEmpty()
  readonly telefono: string;
}

import { PartialType } from '@nestjs/mapped-types';

export class ActualizarCostumerDto extends PartialType(CrearCostumerDto) {}
