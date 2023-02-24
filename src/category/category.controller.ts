import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Get()
  async findAll(): Promise<any> {
    return await this.categoryService.findAll();
  }

  @Post()
  async create(@Body() categoryDto: CategoryDto) {
    await this.categoryService.createCategory(categoryDto);
  }
}
