import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

import { makeSalt, encryptPassword } from '../../utils/cryptogram';
import { AuthService } from '../logical/auth.service'
import { User } from '../../models/user.model';
import { UserDto } from './dto/user.dto';
import { Op } from 'sequelize';

@Injectable()
export class UserService {
  @InjectModel(User)
  private readonly userModel: typeof User
  // private sequelize: typeof Sequelize
  private authService: typeof AuthService
// 
  async findOne(userDto: UserDto) {
    const { username, password  } = userDto

    const result = await this.userModel.findAll()

    // console.log( this.authService );
    return result
    // const authResult = await this.authService.validateUser(username, password)
    // console.log( authResult );
    // return
    // const salt = makeSalt();
    // const hasPwd = encryptPassword(password, salt);
    // const resule = await this.userModel.findOne({
    //   where: {
    //     [Op.and]: [{ username }, { password:hasPwd }]
    //   }
    // })
    // return resule
  }

  async userLogin(userDto: UserDto) {
    const { username, password } = userDto;
    
    const salt = makeSalt();
    const hasPwd = encryptPassword(password, salt);
    
    const [ result ] = await this.userModel.findOrCreate(
      {
        where:{
          [Op.and]: [{ username }, { password:hasPwd }, { salt }]
        },
        defaults: {
          ...userDto,
          password:hasPwd,
          salt
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
