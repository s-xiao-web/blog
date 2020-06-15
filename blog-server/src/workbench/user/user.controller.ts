import { Controller, Post, Body } from '@nestjs/common';

import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService){}

  @Post('login')
  userLogin(@Body() params:UserDto) {
    return this.userService.userLogin(params);
  }
}
