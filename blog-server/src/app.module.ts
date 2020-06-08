import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm'
import { UserService } from './user/user.service';

import { UserModule } from './user/user.module';
import { CatsService } from './cats/cats.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';

import { User }  from './entitys/user.entity'

import { LoggerMiddleware  } from './middleware/logger.middleware'


console.log( __dirname )

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
    CatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
