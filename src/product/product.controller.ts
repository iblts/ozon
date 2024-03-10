import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAll() {
    return this.productService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productService.getOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
