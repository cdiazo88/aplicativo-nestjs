import { IsString, IsUrl, IsNotEmpty } from 'class-validator';

export class CrearBrandDto {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

import { PartialType } from '@nestjs/mapped-types';

export class ActualizarBrandDto extends PartialType(CrearBrandDto) {}
