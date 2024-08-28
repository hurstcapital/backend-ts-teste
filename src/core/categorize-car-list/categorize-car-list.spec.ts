import { Test } from "@nestjs/testing";
import { CategorizeCarHandler, Sort } from "./categorize-car-list.handler";
import { CarRepository } from "../../infra/repository/car.repository";
import { CarModel } from "../../infra/repository/car.model";
import { faker } from "@faker-js/faker";

describe("Categorize Car List", () => {
  let carRepository: CarRepository;
  let sut: CategorizeCarHandler;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      providers: [
        CategorizeCarHandler,
        {
          provide: CarRepository,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    sut = app.get(CategorizeCarHandler);
    carRepository = app.get(CarRepository);
  });

  it.only("should return correct total car count", async () => {
    const carList = [
      new CarModel({
        id: faker.string.uuid(),
        brand: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        year: faker.date.past().getFullYear(),
        color: faker.vehicle.color(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past(),
        deletedAt: faker.date.past(),
        price: faker.number.float({ max: 100000, min: 50000 }),
      }),
      new CarModel({
        id: faker.string.uuid(),
        brand: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        year: faker.date.past().getFullYear(),
        color: faker.vehicle.color(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past(),
        deletedAt: faker.date.past(),
        price: faker.number.float({ max: 100000, min: 50000 }),
      }),
      new CarModel({
        id: faker.string.uuid(),
        brand: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        year: faker.date.past().getFullYear(),
        color: faker.vehicle.color(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past(),
        deletedAt: faker.date.past(),
        price: faker.number.float({ max: 100000, min: 50000 }),
      }),
    ];

    jest.spyOn(carRepository, "findAll").mockResolvedValue(carList);

    const result = await sut.execute({ sort: Sort.Asc });

    expect(result.totalCarCount).toBe(carList.length);
  });

  it("should the most expensive car", async () => {});

  it("should return the cheaper car", async () => {});

  it("should return the categorized count", async () => {});

  it("should return the newest car", async () => {});

  it("should return the oldest car", async () => {});

  it("should return the color count", async () => {});

  it("should return the car list sorted by price", async () => {});

  // Create more tests here
});
