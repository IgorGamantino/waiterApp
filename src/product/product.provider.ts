import { model } from 'mongoose';
import { ProductSchema } from './product.schema';

export const productProvider = [
  {
    provide: 'PRODUCT_MODEL',
    useFactory: () => model('Product', ProductSchema),
    inject: [],
  },
];
