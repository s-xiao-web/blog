import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize'

import { UserModule } from './user/user.module';
import { CatsModule } from './cats/cats.module';

import { LoggerMiddleware  } from './middleware/logger.middleware'
import { CategoryController } from './workbench/category/category.controller';
import { CategoryModule } from './workbench/category/category.module';

import { Category } from './models/category.model'

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sunxiao5920whh',
      database: 'blog',
      autoLoadModels: true,
      synchronize: true,
      timezone: '+08:00',
      models: [__dirname + 'models/category.model.ts']
    }),
    // UserModule,
    // CatsModule,
    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
