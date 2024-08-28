import { CarModel } from "@/infra/repository/car.model";

export interface CategorizeCarListResponse {
  expensiveCar: CarModel;
  cheapCar: CarModel;
  oldestCar: CarModel;
  newestCar: CarModel;
  colorCount: {[brand: string]: number};
  categorizedBrandCount: {[brand: string]: number};
  totalCarCount: number;
  carListSortedByPrice: CarModel[];
  totalCountCarPrice: number;
  totalCarByBrand: Record<string, number>;
  averagePrice: number;
  averagePriceByBrand: Record<string, number>;
}
