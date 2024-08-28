import {
  CategorizeCarHandler,
  Sort,
} from "./core/categorize-car-list/categorize-car-list.handler";
import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  app
    .get(CategorizeCarHandler)
    .execute({ sort: Sort.Asc })
    .then((i) => console.log(JSON.stringify(i, null, 2)));
}

bootstrap();
