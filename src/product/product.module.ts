import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { DatabaseModule } from 'src/database/database.module';
import { ProductController } from './product.controller';
import { productProvider } from './product.provider';
import { ProductService } from './product.service';

@Module({
  imports: [
    DatabaseModule,
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: '../upload',
      }),
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService, ...productProvider],
})
export class ProductModule { }
