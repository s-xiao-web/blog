import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';

import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
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

  @Post('login')
  async login(@Body() params) {
    const authResult = await this.authService.validateUser(
      params.username,
      params.password,
    );
    switch (authResult.code) {
      case 1:
        return this.authService.certificate(authResult.user);
      case 2:
        return {
          code: 1,
          data: 'throw error'
        }
    }
  }

}
