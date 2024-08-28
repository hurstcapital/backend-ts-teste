import { CarRepository } from './car.repository';
import { Module } from '@nestjs/common';

@Module({
  providers: [CarRepository],
  exports: [CarRepository],
})
export class CarModule {}
