import {
  Table,
  Column, 
  Model, 
  PrimaryKey, 
  AutoIncrement,
} from 'sequelize-typescript';

import * as sequelizes from 'sequelize'

@Table
export class Article extends Model<Article> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column
  comment: string

}