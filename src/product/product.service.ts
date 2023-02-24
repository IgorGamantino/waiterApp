import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ProductDto } from './dto/product.dto';
import { Product } from './interfaces/product';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private readonly productModel: Model<Product>,
  ) { }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async createProduct(createProduct: ProductDto, file): Promise<void> {
    const createdProductWithFile = {
      ...createProduct,
      imagePath: file.path,
    };

    const createdProduct = new this.productModel(createdProductWithFile);

    await createdProduct.save();
  }

  async findCategoryById(categoryId: string): Promise<any> {
    return await this.productModel.find().where('category').equals(categoryId);
  }
}
