import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

import { User } from '../../models/user.model';
import { UserDto } from './dto/user.dto';
import { Op } from 'sequelize';

@Injectable()
export class UserService {
  @InjectModel(User)
  private readonly userModel: typeof User
  private readonly sequelize: Sequelize

  async userLogin(userDto: UserDto) {
    const { username, password } = userDto;

    const [ result ] = await this.userModel.findOrCreate(
      {
        where:{
          [Op.and]: [{ username }, { password }]
        },
        defaults: {
          ...userDto
        }
      }
    )
    return {
      username: result.getDataValue('username'),
      createdAt: result.getDataValue('createdAt'),
      updatedAt: result.getDataValue('updatedAt')
    };
  }
}
