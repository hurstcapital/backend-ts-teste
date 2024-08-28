export class CarModel {
  public constructor(init?: Partial<CarModel>) {
    Object.assign(this, init);
  }

  id!: string;
  brand!: string;
  model!: string;
  year!: number;
  price!: number;
  color!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt!: Date;
}
