import {
  Table,
  Column, 
  Model, 
  PrimaryKey, 
  AutoIncrement,
  DataType,
} from 'sequelize-typescript';

@Table
export class Article extends Model<Article> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column
  title: string

  @Column(DataType.TEXT)
  comment: string
  
  @Column
  describe: string

  @Column
  cover: string

  @Column
  user_id: number

  @Column({
    defaultValue: 0
  })
  label_id: number

  @Column({
    defaultValue: 0
  })
  like_id: number
}