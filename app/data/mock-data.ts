export type Charger = {
  id: number;
  street: string;
  distance: string;
  tariff: number;
  power: string;
  solarSurplus: boolean;
  available: boolean;
};

export const chargers: Charger[] = [
  {
    id: 1,
    street: "Acacialaan 12",
    distance: "0,4 km",
    tariff: 0.2,
    power: "11 kW",
    solarSurplus: true,
    available: true,
  },
  {
    id: 2,
    street: "Lindestraat 28",
    distance: "0,8 km",
    tariff: 0.35,
    power: "11 kW",
    solarSurplus: false,
    available: true,
  },
  {
    id: 3,
    street: "Watermuntweg 4",
    distance: "1,2 km",
    tariff: 0.35,
    power: "7,4 kW",
    solarSurplus: false,
    available: true,
  },
  {
    id: 4,
    street: "Parklaan 62",
    distance: "1,6 km",
    tariff: 0.35,
    power: "22 kW",
    solarSurplus: false,
    available: true,
  },
];

export const hostStats = {
  currentProductionKw: 3.5,
  homeUsageKw: 1.0,
  surplusKw: 2.5,
  monthlyEarnings: 45.2,
  feedInSavings: 12.5,
};
