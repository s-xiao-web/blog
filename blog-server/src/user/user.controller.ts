import { Controller, Get, Body } from '@nestjs/common';
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('/add')
  create(@Body() createCatDto) {
    // return '123123123'
    return this.UserService.create(createCatDto);
  }
}
