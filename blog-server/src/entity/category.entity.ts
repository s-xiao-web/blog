import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  public id : number

  @Column()
  public name : string

  @Column()
  public path : string

  @CreateDateColumn()
  public createdAt: Date

  @UpdateDateColumn()
  public update: Date
}