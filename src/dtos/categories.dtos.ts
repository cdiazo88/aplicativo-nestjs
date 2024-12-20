import { IsString, IsNotEmpty } from 'class-validator';

export class CrearCategoryDto {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;
}

import { PartialType } from '@nestjs/mapped-types';

export class ActualizarCategoryDto extends PartialType(CrearCategoryDto) {}
