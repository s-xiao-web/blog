import { Controller, Body, Get, Post,  } from '@nestjs/common';

import { CategoryService }  from './category.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { Category } from '../../models/category.model'

interface Test {
  value: string;
  path: string;
}

@Controller('category')
export class CategoryController {

  constructor(private readonly categoryService: CategoryService){}

  @Get('getMenu')
  getMenus():Promise<Category[]>  {
    return this.categoryService.getMenus();
  }

  @Post('createMenu')
  createMenu(@Body() createUserDto: Test ) {
    return this.categoryService.createMenu(createUserDto);
  }

}
