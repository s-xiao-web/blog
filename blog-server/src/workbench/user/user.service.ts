import { Injectable, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Sequelize } from 'sequelize-typescript';
import * as sequelizes from 'sequelize';


import { User } from '../../models/user.model';

import { makeSalt, encryptPassword } from '../../utils/cryptogram'

const { Op } = sequelizes;
@Injectable()
export class UserService {

  @InjectModel(User)
  private readonly userModel: typeof User
  private readonly sequelize: Sequelize

  /**
   * 查询是否有该用户
   * @param username 用户名
   */
  async findOne(username: string): Promise<any | undefined> {  
    console.log('看看这里执行了么');
    try {
      const result = await this.userModel.findOne({
        where: {username},
        raw: true
      })
      return result
    } catch (error) {
      console.error('error', error);
      return void 0;
    }
  }

   /**
   * 注册
   * @param username 用户名
   */

  async register(@Body() info) {
    const {password: pass, username} = info
    const salt = makeSalt();
    const password = encryptPassword(pass, salt);

    const result = await this.userModel.create({
      username,
      password,
      salt
    })
    return result;
  }

  async login(info:any) {
    const {password} = info
    const createSalt = makeSalt();
    const salt = encryptPassword(password, createSalt);

    this.userModel.create({
      ...info,
      salt
    })
  }

}
//   import { Injectable, Inject } from '@nestjs/common';
// import { InjectModel } from '@nestjs/sequelize';
// import { Sequelize } from 'sequelize-typescript';

// import { makeSalt, encryptPassword } from '../../utils/cryptogram';
// // import { AuthService } from '../logical/auth.service'
// import { User } from '../../models/user.model';
// import { UserDto } from './dto/user.dto';
// import { Op } from 'sequelize';

// export type Users = any;

// @Injectable()
// export class UserService {
//   @InjectModel(User)
//   private readonly userModel: typeof User
//   // private sequelize: typeof Sequelize
//   // private authService: typeof AuthService

//   private readonly users: Users[];

//   constructor() {
//     this.users = [
//       {
//         userId: 1,
//         username: 'john',
//         password: 'changeme',
//       },
//       {
//         userId: 2,
//         username: 'chris',
//         password: 'secret',
//       }, 
//       {
//         userId: 3,
//         username: 'maria',
//         password: 'guess',
//       },
//     ]
//   }

//   async findOne(username: string): Promise<User | undefined> {

//     return this.users.find(user => user.username === username)

//   }


//   // async findOne(userDto: UserDto) {



//     // const { username, password  } = userDto

//     // const result = await this.userModel.findAll()

//     // console.log( this.authService );
//     // return result
//     // const authResult = await this.authService.validateUser(username, password)
//     // console.log( authResult );
//     // return
//     // const salt = makeSalt();
//     // const hasPwd = encryptPassword(password, salt);
//     // const resule = await this.userModel.findOne({
//     //   where: {
//     //     [Op.and]: [{ username }, { password:hasPwd }]
//     //   }
//     // })
//     // return resule
//   // }

//   async userLogin(userDto: UserDto) {
//     const { username, password } = userDto;
    
//     const salt = makeSalt();
//     const hasPwd = encryptPassword(password, salt);
    
//     const [ result ] = await this.userModel.findOrCreate(
//       {
//         where:{
//           [Op.and]: [{ username }, { password:hasPwd }, { salt }]
//         },
//         defaults: {
//           ...userDto,
//           password:hasPwd,
//           salt
//         }
//       }
//     )

//     return {
//       username: result.getDataValue('username'),
//       createdAt: result.getDataValue('createdAt'),
//       updatedAt: result.getDataValue('updatedAt')
//     };
//   }
// }


// import { Injectable } from '@nestjs/common';

// export type User = any;

// @Injectable()
// export class UsersService {
//   private readonly users: User[];

//   constructor() {
//     this.users = [
//       {
//         userId: 1,
//         username: 'john',
//         password: 'changeme',
//       },
//       {
//         userId: 2,
//         username: 'chris',
//         password: 'secret',
//       },
//       {
//         userId: 3,
//         username: 'maria',
//         password: 'guess',
//       },
//     ];
//   }

//   async findOne(username: string): Promise<User | undefined> {
//     return this.users.find(user => user.username === username);
//   }
// }