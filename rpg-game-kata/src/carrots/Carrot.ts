type CreateCarrotParams = {
  carrotness: number;
};

export class Carrot {
  private carrotness: number;

  constructor(params: CreateCarrotParams) {
    this.carrotness = params.carrotness;
  }

  getCarrotness() {
    return this.carrotness;
  }
}
