import { CarModule } from '@/infra/repository/car.module';
import { CategorizeCarHandler } from './categorize-car-list.handler';
import { Module } from '@nestjs/common';

@Module({
  imports: [CarModule],
  providers: [CategorizeCarHandler],
  exports: [CategorizeCarHandler],
})
export class CategorizeCarModule {}
