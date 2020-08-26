import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

import * as sequelizes from 'sequelize';

import { Category } from '../../models/category.model';
import { CreateMenuDto } from './dto/create-menu.dto';

@Injectable()
export class CategoryService {

  constructor(
    @InjectModel(Category)
    private readonly categoryModel: typeof Category,
    private readonly sequelize: Sequelize,
  ) {}

  async addMenu(CreatMenuDto: CreateMenuDto) {
    const menu = [
      {
        value: '编程',
        path: '/'
      },
      {
        value: '项目',
        path: '/article'
      },
      {
        value: '标签',
        path: '/tag'
      },
      {
        value: '归档',
        path: '/record'
      },
      {
        value: 'GitHub',
        path: 'GitHub'
      },
    ]
    const { value, path } = CreatMenuDto;
    const menuList = await this.getMenus();

    // if( menuList && menuList.length > 4 ) return {
    //   code: 1,
    //   data: 'helow'
    // }
    const res = this.categoryModel.build({...CreatMenuDto})
    res.save()

    // console.log(result);
    // return result

    // return await this.categoryModel.bulkCreate(menu)
    // const sql = `
    //   INSERT INTO category (value,path) VALUES ('${value}','${path}')
    // `
    // return await this.sequelize.query(sql, {
    //   type: sequelizes.QueryTypes.INSERT,
    // });
  }

  async getMenus(): Promise<Category[]> {

    const sql = `
      SELECT
        id, value, path
      FROM
        category
    `;
    
    return await this.sequelize.query(sql, {
      type: sequelizes.QueryTypes.SELECT,
      raw: true,
      logging: true
    })
  }

  async updateMenu(CreatMenuDto: CreateMenuDto) {
    const { id, ...arg } = CreatMenuDto;
    const [ menuId ] = await this.categoryModel.update(arg, { where: { id } });
    return menuId ? 'success' : {code: 1, data: 'throw error', message: 'error'};
  }

  async deleteMenu(id) {
    const result = await this.categoryModel.destroy({ where: { id } });
    return result ? 'success' : {code: 1, data: 'throw error', message: 'error'};
  }
}


// 后续需要解决如何讲这个函数抽离出去
// 需要看下管道 拦截器