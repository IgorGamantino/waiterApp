import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import mongoose from 'mongoose';
import { categoryProvider } from './category/category.provider';

mongoose
  .connect('mongodb://localhost:27017/nest', {})
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ...categoryProvider],
})
export class AppModule { }
