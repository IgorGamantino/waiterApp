import {
  Body,
  Controller,
  Get,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
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

  @UseInterceptors(FileInterceptor('file'))
  @Post()
  async create(
    @Body() productDto: ProductDto,
    @UploadedFile(new ParseFilePipeBuilder().build()) file: Express.Multer.File,
  ) {
    productDto.ingredients = JSON.parse(productDto.ingredients as string);
    await this.productService.createProduct(productDto, file);
  }
}
