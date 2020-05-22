import { Module } from '@nestjs/common';
import { GradeController } from './grade.controller';
import { GradeService } from './grade.service';
import { Grade } from '../models/grade.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Grade])],
  controllers: [GradeController],
  providers: [GradeService],
  exports: [SequelizeModule]
})
export class GradeModule {}
