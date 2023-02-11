import { Connection } from 'mongoose';
import { ProductSchema } from './product.schema';

export const categoryProvider = [
  {
    provide: 'Product',
    useFactory: (connection: Connection) =>
      connection.model('Product', ProductSchema),
    inject: [],
  },
];
