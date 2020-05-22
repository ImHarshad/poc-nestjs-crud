import { HttpException, HttpStatus } from "@nestjs/common";

export class GradeNotFoundException extends HttpException {
  constructor() {
    super('Grade with given id not found', HttpStatus.BAD_REQUEST);
  }
}