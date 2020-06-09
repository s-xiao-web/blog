import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserList } from '../entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserList])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
