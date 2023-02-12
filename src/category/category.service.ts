import { Inject, Injectable } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { CategoryDto } from './dto/category.dto';
import { Category } from './interfaces/category';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_MODEL')
    private readonly categoryModel: Model<Category>,
  ) { }

  async findAll(): Promise<Category[]> {
    return await this.categoryModel.find();
  }

  async createCategory(createCategory: CategoryDto): Promise<void> {
    const createdCategory = new this.categoryModel(createCategory);

    await createdCategory.save();
  }
}
