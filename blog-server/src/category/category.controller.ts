import { Controller, Get, Req } from '@nestjs/common';

import { CategoryService }  from './category.service';

@Controller('category')
export class CategoryController {

  constructor(private readonly CategoryService: CategoryService){}

  @Get('menu')
  findMenu() {
    return '这个是menu菜单'
  }

  @Get('addMenu')
  createMenu() {
    return this.CategoryService.createMenu();
  }

}
