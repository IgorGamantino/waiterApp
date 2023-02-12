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

  async createProduct(createProduct: ProductDto): Promise<void> {
    const createdProduct = new this.productModel(createProduct);

    await createdProduct.save();
  }
}
