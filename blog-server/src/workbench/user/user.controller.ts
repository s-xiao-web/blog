import { Controller, Post, Body, HttpException, UseGuards, HttpStatus, Headers } from '@nestjs/common';

import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';

import { AuthGuard } from '@nestjs/passport';

import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {

  constructor(
    private readonly usersService: UserService,
    private readonly authService: AuthService,
  ) { }

  @Post('find')
  find(@Body() params) {
    return this.usersService.findOne(params)
  }

  @Post('register')
  register(@Body() info) {
    return this.usersService.register(info);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('test')
  test(@Body() body) {
    return {...body}
  }

  @Post('login')
  async login(@Body() user: UserDto) {
    const authResult = await this.authService.validateUser(user);
    switch (authResult.code) {
      case 0:
        return this.authService.certificate(authResult.user);
      case 1:
        return {code: authResult.code, msg: '密码输入有误'}
    }
  }

}
