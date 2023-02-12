import { model } from 'mongoose';
import { CategorySchema } from './category.schema';

export const categoryProvider = [
  {
    provide: 'CATEGORY_MODEL',
    useFactory: () => model('Category', CategorySchema),
    inject: [],
  },
];
