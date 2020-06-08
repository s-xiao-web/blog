import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserModule } from './user/user.module';
import { CatsModule } from './cats/cats.module';

import { LoggerMiddleware  } from './middleware/logger.middleware'
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sunxiao5920whh',
      database: 'blog',
      // entities: ["src/**/*.entitys{.ts,.js}"],
      entities:[__dirname + '/**/*.entity{.ts,.js}'],
      // entities: [ User ],
      synchronize: true,
      logging: false
    }),
    UserModule,
    CatsModule,
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
