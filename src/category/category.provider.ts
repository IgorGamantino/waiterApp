import { Connection } from 'mongoose';
import { CategorySchema } from './category.schema';

export const categoryProvider = [
  {
    provide: 'Category',
    useFactory: (connection: Connection) =>
      connection.model('Category', CategorySchema),
    inject: [],
  },
];
