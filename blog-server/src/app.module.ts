import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize'

import { LoggerMiddleware  } from './middleware/logger.middleware'
import { CategoryModule } from './workbench/category/category.module';

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
      define: {
        timestamps: true,
        freezeTableName: true
      },
      models: [__dirname + 'models/category.model.ts']
    }),
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
