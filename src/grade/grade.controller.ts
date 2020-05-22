import { Controller, Get, Post, HttpCode, Param, Put, Delete, Body } from '@nestjs/common';
import { GradeService } from './grade.service';
import { Grade } from '../models/grade.model';
import { CreateGradeDto } from './dto/create-grade.dto';
import { GradeNotFoundException } from './exception/grade-not-found.exception';

@Controller('grade')
export class GradeController {
  constructor(private readonly gradeService: GradeService) { }

  @Get()
  async findAll(): Promise<Grade[]> {
    return await this.gradeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Grade> {
    const grade: Grade = await this.gradeService.findOne(id); 
    if (!grade) throw new GradeNotFoundException();
    return grade;
  }

  @Post()
  @HttpCode(201)
  async create(@Body() gradeToCreate: CreateGradeDto): Promise<Grade> {
    return await this.gradeService.create(gradeToCreate);
  }

  @Put(':id')
  @HttpCode(204)
  async update(@Param('id') id: number, @Body() gradeToUpdate: CreateGradeDto) {
    const currentGrade: Grade = await this.findOne(id);
    if (!currentGrade) throw new GradeNotFoundException();
    return this.gradeService.update(id, gradeToUpdate);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    const currentGrade: Grade = await this.findOne(id);
    if (!currentGrade) throw new GradeNotFoundException();
    return await this.gradeService.remove(id);
  }
}
