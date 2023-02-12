import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<void> =>
      mongoose
        .connect('mongodb://localhost:27017/nest', {})
        .then(() => {
          console.log('Connected to database!');
        })
        .catch(() => {
          console.log('Connection failed!');
        }),
  },
];
