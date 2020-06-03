import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm'
import { UserService } from './user/user.service';

import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sunxiao5920whh',
      database: 'blog',
      entities: ["src/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
