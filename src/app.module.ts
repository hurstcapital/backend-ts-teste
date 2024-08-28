import { CategorizeCarModule } from './core/categorize-car-list/categorize-car-list.module';
import { Module } from '@nestjs/common';
@Module({
  imports: [CategorizeCarModule],
})
export class AppModule {}
