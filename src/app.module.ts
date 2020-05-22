import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { GradeModule } from './grade/grade.module';
import { GradeController } from './grade/grade.controller';
import { logger } from './middlewares/logger.middleware';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    GradeModule, SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootadmin@cr7',
      database: 'test',
      models: [__dirname + './models'],
      synchronize: true,
      autoLoadModels: true
    })
  ]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes(GradeController)
  }
}
