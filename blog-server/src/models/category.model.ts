import {
  Table,
  Column, 
  Model, 
  PrimaryKey, 
  AutoIncrement,
  Default,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
// import moment from 'monent';

@Table({
  tableName: 'category'
})
export class Category extends Model<Category> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column
  value: string

  @Column
  path: string
  
}