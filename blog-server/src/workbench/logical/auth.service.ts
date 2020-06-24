import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { encryptPassword } from '../../utils/cryptogram';

@Injectable()
export class AuthService {

  constructor(
    // private readonly usersService: UserService,
    // private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    console.log('JWT验证 - Step 2: 校验用户信息');
    // const user: any = await this.usersService.findOne({ username });
    // if ( user ) {
    //   const hashedPassword = user.password;
    //   const salt = user.salt;
    //   const hashPassword = encryptPassword(password, salt);
    //   if (hashedPassword === hashPassword) {
    //     // 密码正确
    //     return {
    //       code: 1,
    //       user,
    //     };
    //   }
    // }
  }

  async certificate(user: any) {
    const payload = { username: user.username, sub: user.userId, realName: user.realName, role: user.role };
    console.log('JWT验证 - Step 3: 处理 jwt 签证');
    // try {
    //   const token = this.jwtService.sign(payload);
    //   return {
    //     code: 200,
    //     data: {
    //       token,
    //     },
    //     msg: `登录成功`,
    //   };
    // } catch (error) {
    //   return {
    //     code: 600,
    //     msg: `账号或密码错误`,
    //   };
    // }
  }
}
