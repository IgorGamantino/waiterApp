import { Connection } from 'mongoose';
import { OderSchema } from './category.schema';

export const categoryProvider = [
  {
    provide: 'Order',
    useFactory: (connection: Connection) =>
      connection.model('Order', OderSchema),
    inject: [],
  },
];
