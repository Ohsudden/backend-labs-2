import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Product} from "../products/products.entity";
import {Category} from "../categories/categories.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'pguser',
      password: 'password',
      database: 'nestjs',
      entities: [Category, Product],
      synchronize: true,
    }),
  ],
})
export class AppModule {}