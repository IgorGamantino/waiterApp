import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { Product } from './interfaces/product';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Post()
  async create(@Body() productDto: ProductDto) {
    await this.productService.createProduct(productDto);
  }
}
