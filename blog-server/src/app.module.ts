import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize'

import { LoggerMiddleware  } from './middleware/logger.middleware'
import { CategoryModule } from './workbench/category/category.module';
import { UserModule } from './workbench/user/user.module';
import { ArticleModule } from './workbench/article/article.module';
import { AuthModule } from './workbench/logical/auth.module';
import { BaseModule } from './workbench/base/base.module';

import { AuthService } from './workbench/logical/auth.service'

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
    CategoryModule,
    UserModule,
    AuthModule,
    ArticleModule,
    BaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
