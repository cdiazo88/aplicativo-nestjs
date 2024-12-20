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
import {
  ActualizarCategoryDto,
  CrearCategoryDto,
} from 'src/dtos/categories.dtos';
import { CategoriesService } from 'src/services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get('filter')
  getCategoryFiltro() {
    return {
      message: `yo soy un filtro`,
    };
  }

  @Get(':categoryId')
  @HttpCode(HttpStatus.ACCEPTED)
  getCategory(@Param('categoryId', ParseIntPipe) categoryId: number) {
    return this.categoriesService.findOne(categoryId);
  }

  @Post()
  crear(@Body() payload: CrearCategoryDto) {
    return this.categoriesService.create(payload);
  }

  @Put(':id')
  actualizar(@Param('id') id: number, @Body() payload: ActualizarCategoryDto) {
    return this.categoriesService.update(+id, payload);
  }

  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return this.categoriesService.delete(+id);
  }
}
