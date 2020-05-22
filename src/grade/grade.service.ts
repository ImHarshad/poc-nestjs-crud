import { Injectable } from '@nestjs/common';
import { Grade } from '../models/grade.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class GradeService {

  constructor(
    @InjectModel(Grade)
    private gradeModel: typeof Grade
  ) { }

  async findAll(): Promise<Grade[]> {
    return await this.gradeModel.findAll();
  }

  async findOne(id: number): Promise<Grade> {
    return await this.gradeModel.findOne({ where: { id } });
  }

  async create(gradeToCreate: Grade): Promise<Grade> {
    return await this.gradeModel.create(gradeToCreate);
  }

  async update(id: number, gradeToUpdate: Grade): Promise<void> {
    const grade = await this.findOne(id);
    grade.set(gradeToUpdate);
    grade.save();
  }

  async remove(id: number): Promise<void> {
    const grade = await this.findOne(id);
    await grade.destroy();
  }
}
