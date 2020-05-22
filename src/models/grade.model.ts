import { Column, Model, Table, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class Grade extends Model<Grade> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({ allowNull: false })
  grade: string;

  @Column
  desc: string;

  @Column
  seq: number;

  @Column
  hourly_rate: number;
}