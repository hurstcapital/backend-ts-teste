import { randomBytes, randomUUID } from 'crypto';
import { CarModel } from './car.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarRepository {
  public async findAll(): Promise<CarModel[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const brandList = {
      Toyota: 8,
      Honda: 12,
      Ford: 5,
      Chevrolet: 12,
      Nissan: 7,
      Volkswagen: 6,
      Hyundai: 8,
      'Mercedes-Benz': 4,
      'Build Your Dreams': 1,
    };

    const colors = ['White', 'Black', 'Red', 'Blue', 'Silver', 'Gray', 'Green', 'Brown', 'Orange', 'Gold'];

    return Object.entries(brandList).flatMap(([brand, numberOfItems]) => {
      return Array.from({ length: numberOfItems }).map(
        () =>
          new CarModel({
            id: randomUUID(),
            brand,
            model: randomBytes(5).toString('hex'),
            year: Math.floor(Math.random() * (2021 - 2000 + 1)) + 2000,
            price: Math.floor(Math.random() * (100000 - 50000 + 1)) + 50000,
            color: colors[Math.floor(Math.random() * colors.length)],
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: new Date(),
          }),
      );
    });
  }
}
