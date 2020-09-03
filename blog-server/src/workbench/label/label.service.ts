import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

import * as sequelizes from 'sequelize';

import { Label } from '../../models/label.model';
import { CreateLabelDto } from './dto/label.dto';

@Injectable()
export class LabelService {

  constructor(
    @InjectModel(Label)
    private readonly labelModel: typeof Label,
    private readonly sequelize: Sequelize,
  ) {}

  async addLabel(CreateLabelDto: CreateLabelDto) {
    const isRepeat = await this.labelModel.findOne({where: {content: CreateLabelDto.content}});
    if ( !isRepeat ) {
      const result =  await this.labelModel.create(CreateLabelDto);
      // result.save();
      return result;
    } else {
      return ''
    }
  }

  async getLabel() {
    const result = await this.labelModel.findAll()
    return result;
  }


  async deleteLabel(id) {
    const result = await this.labelModel.destroy({ where: { id } });
    return result ? 'success' : {code: 1, data: 'throw error', message: 'error'};
  }
  // async getMenus(): Promise<Category[]> {

  //   const sql = `
  //     SELECT
  //       id, value, path
  //     FROM
  //       category
  //   `;
    
  //   return await this.sequelize.query(sql, {
  //     type: sequelizes.QueryTypes.SELECT,
  //     raw: true,
  //     logging: true
  //   })
  // }

  // async updateMenu(CreatMenuDto: CreateMenuDto) {
  //   const { id, ...arg } = CreatMenuDto;
  //   const [ menuId ] = await this.categoryModel.update(arg, { where: { id } });
  //   return menuId ? 'success' : {code: 1, data: 'throw error', message: 'error'};
  // }

  // async deleteMenu(id) {
  //   const result = await this.categoryModel.destroy({ where: { id } });
  //   return result ? 'success' : {code: 1, data: 'throw error', message: 'error'};
  // }
}


// 后续需要解决如何讲这个函数抽离出去
// 需要看下管道 拦截器