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

  async createMenu(CreatMenuDto: CreateMenuDto) {
    const sql = `
      INSERT INTO category (value,path) VALUES ('add', '/pageasdasd')
    `
    const result = await this.sequelize.query(sql, {
      type: sequelizes.QueryTypes.INSERT,
    })
    console.log(result);
    return result
    // return await this.categoryModel.create(CreatMenuDto);
  }

  async getMenus(): Promise<Category[]> {

    const sql = `
      SELECT
        id, value, path
      FROM
        category
      WHERE
        id = 1
    `;
    
    return await this.sequelize.query(sql, {
      type: sequelizes.QueryTypes.SELECT,
      raw: true,
      logging: true
    })
  }
}


// 后续需要解决如何讲这个函数抽离出去