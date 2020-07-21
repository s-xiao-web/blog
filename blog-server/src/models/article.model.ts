import {
  Table,
  Column, 
  Model, 
  PrimaryKey, 
  AutoIncrement,
} from 'sequelize-typescript';

@Table
export class Article extends Model<Article> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column
  title: string

  @Column
  comment: string
  
  @Column
  user_id: number

  @Column
  label_id: number

  @Column
  like_id: number
}