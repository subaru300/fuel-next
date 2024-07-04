export interface IChildren {
  children: React.ReactNode;
}

export interface IEnteredData {
  id: string;
  date: string;
  distance: number;
  consumption: number;
  cost: number;
  reqFuel: number;
  costFuel: number;
}

export interface IResult {
  distanceNum: number;
  consumptionNum: number;
  fuelCostNum: number;
  calculateRequiredFuel: number;
  calculateCost: number;
}
