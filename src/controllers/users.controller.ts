import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { ActualizarUserDto, CrearUserDto } from 'src/dtos/users.dtos';
import { UsersService } from 'src/services/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('filter')
  getUserFiltro() {
    return {
      message: `yo soy un filtro`,
    };
  }

  @Get(':userId')
  @HttpCode(HttpStatus.ACCEPTED)
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.findOne(userId);
  }

  @Post()
  crear(@Body() payload: CrearUserDto) {
    return this.usersService.create(payload);
  }

  @Put(':id')
  actualizar(@Param('id') id: number, @Body() payload: ActualizarUserDto) {
    return this.usersService.update(+id, payload);
  }

  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return this.usersService.delete(+id);
  }
}
