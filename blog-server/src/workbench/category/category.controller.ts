import { Controller, Body, Get, Post,  } from '@nestjs/common';

import { CategoryService }  from './category.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { Category } from '../../models/category.model'

interface Test {
  value: string;
  path: string;
}

interface Id {
  id: number
}

@Controller('category')
export class CategoryController {

  constructor(private readonly categoryService: CategoryService){}

  @Get('getMenu')
  getMenus():Promise<Category[]>  {
    return this.categoryService.getMenus();
  }

  @Post('addMenu')
  addMenu(@Body() createUserDto: CreateMenuDto ) {
    const result = this.categoryService.addMenu(createUserDto);
    return result
  }

  @Post('updateMenu')
  updateMenu(@Body() createUserDto: CreateMenuDto ) {
    return this.categoryService.updateMenu(createUserDto);
  }

  @Post('deleteMenu')
  deleteMenu(@Body() { id }: Id) {
    return this.categoryService.deleteMenu(id);
  }
}
