import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import {
  ActualizarCostumerDto,
  CrearCostumerDto,
} from 'src/dtos/costumers.dtos';
import { CostumersService } from 'src/services/costumers.service';

@Controller('costumers')
export class CostumersController {
  constructor(private costumersService: CostumersService) {}

  @Get()
  findAll() {
    return this.costumersService.findAll();
  }

  @Get('filter')
  getCostumerFiltro() {
    return {
      message: `yo soy un filtro`,
    };
  }

  @Get(':costumerId')
  @HttpCode(HttpStatus.ACCEPTED)
  getCostumer(@Param('costumerId', ParseIntPipe) costumerId: number) {
    return this.costumersService.findOne(costumerId);
  }

  @Post()
  crear(@Body() payload: CrearCostumerDto) {
    return this.costumersService.create(payload);
  }

  @Put(':id')
  actualizar(@Param('id') id: number, @Body() payload: ActualizarCostumerDto) {
    return this.costumersService.update(+id, payload);
  }

  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return this.costumersService.delete(+id);
  }
}
