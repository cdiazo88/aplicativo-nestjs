import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CrearUserDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  readonly password: string;
  @IsString()
  @IsNotEmpty()
  readonly role: string;
}

import { PartialType } from '@nestjs/mapped-types';

export class ActualizarUserDto extends PartialType(CrearUserDto) {}
