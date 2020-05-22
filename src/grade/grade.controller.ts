import { Controller, Get, Post, HttpCode, Param, Put, Delete, Body } from '@nestjs/common';
import { GradeService } from './grade.service';
import { Grade } from '../models/grade.model';

@Controller('grade')
export class GradeController {
  constructor(private readonly gradeService: GradeService) { }

  @Get()
  async findAll(): Promise<Grade[]> {
    return await this.gradeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Grade> {
    return await this.gradeService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() gradeToCreate: Grade): Promise<Grade> {
    return this.gradeService.create(gradeToCreate);
  }

  @Put(':id')
  @HttpCode(204)
  update(@Param('id') id: number, @Body() gradeToUpdate: Grade) {
    return this.gradeService.update(id, gradeToUpdate);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.gradeService.remove(id);
  }
}
