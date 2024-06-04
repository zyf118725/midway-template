// src/entity/news.ts  PrimaryKey
import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class News extends Model {
  // 主键不用写，否则报错
  // @Column
  // id: string;

  @Column
  name: string;

  @Column
  content: string;

}