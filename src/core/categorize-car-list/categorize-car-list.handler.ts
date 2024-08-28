import { CarRepository } from '../../infra/repository/car.repository';
import { Injectable } from '@nestjs/common';
import { CategorizeCarListResponse } from './categorize-car-list.interface';

export enum Sort {
  Asc = 'asc',
  Desc = 'desc',
}

@Injectable()
export class CategorizeCarHandler {
  public constructor(private readonly carRepository: CarRepository) {}

  public async execute(input: { sort: Sort }): Promise<Partial<CategorizeCarListResponse>> {
    const car = await this.carRepository.findAll();

    const carCount = car.length;

    return {
      totalCarCount: carCount,
    };
  }
}
