import { Connection, model } from 'mongoose';
import { OderSchema } from './category.schema';

export const orderProvider = [
  {
    provide: 'Order',
    useFactory: () => model('Order', OderSchema),
    inject: [],
  },
];
