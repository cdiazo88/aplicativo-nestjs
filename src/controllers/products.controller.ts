import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  //Res
  // ParseIntPipe,
} from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import {
  CrearProductoDto,
  ActualizarProductoDto,
} from 'src/dtos/products.dtos';

//import { Response } from 'express';

import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProductos(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products limit=>${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductoFiltro() {
    return {
      message: `yo soy un filtro`,
    };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProducto(@Param('productId', ParseIntPipe) productId: number) {
    // return {
    //   message: `product ${productId}`,
    // };
    // Manera de express
    // getProducto(@Res() response: Response, @Param('productId') productId: any) {
    //   response.status(200).send({
    //     message: `product ${productId}`,
    //   });
    // }
    return this.productsService.findOne(productId);
  }

  @Post()
  crear(@Body() payload: CrearProductoDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  actualizar(@Param('id') id: number, @Body() payload: ActualizarProductoDto) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return this.productsService.delete(+id);
  }
}
