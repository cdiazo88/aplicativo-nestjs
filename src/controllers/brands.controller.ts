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
import { ActualizarBrandDto, CrearBrandDto } from 'src/dtos/brands.dtos';
import { BrandsService } from 'src/services/brands.service';

@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  @Get('filter')
  getBrandFiltro() {
    return {
      message: `yo soy un filtro`,
    };
  }

  @Get(':brandId')
  @HttpCode(HttpStatus.ACCEPTED)
  getBrand(@Param('brandId', ParseIntPipe) brandId: number) {
    return this.brandsService.findOne(brandId);
  }

  @Post()
  crear(@Body() payload: CrearBrandDto) {
    return this.brandsService.create(payload);
  }

  @Put(':id')
  actualizar(@Param('id') id: number, @Body() payload: ActualizarBrandDto) {
    return this.brandsService.update(+id, payload);
  }

  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return this.brandsService.delete(+id);
  }
}
