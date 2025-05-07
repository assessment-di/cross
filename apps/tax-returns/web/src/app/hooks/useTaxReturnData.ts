import { useState } from "react";

export type OtherDebt = {
  id: string
  description: string
  interestExpenses: number
  remainingDebt: number
}

export type Loan = {
  purchaseYear: number
  residentialLocation: string
  loanProvider: string
  loanProviderSSN: string
  loanNumber: string
  loanDate: string // ISO format: 'YYYY-MM-DD'
  loanTimeYears: number
  totalPayments: number
  installmentOfNominalValue: number
  interestExpenses: number
  remainingDebt: number
}
export type Car = {
  id: string;
  carNumber: string;
  year: number;
  estimatedValue: number;
};

export type RealEstate = {
  id: string;
  address: string;
  number: string;
  estimatedValue: number;
};

export type Revenue = {
  id: string;
  type: "salary" | "vehicleAllowance" | "pensionsAndGrants";
  description: string
  amount: number;
};

export type DebtsSection = {
  loan?: Loan;
  otherDebts: OtherDebt[];
};

export type AssetsSection = {
  cars: Car[];
  realEstate: RealEstate[];
};

export type TaxReturnData = {
  revenues: Revenue[];
  assets: AssetsSection;
  debts: DebtsSection;
};

// Default data
const initialData: TaxReturnData = {
  revenues: [
    {
      id: "rev1",
      description: "Norðurljós Software ehf",
      type: "salary",
      amount: 800000,
    },
    {
      id: "rev2",
      description: "Daily allowance",
      type: "vehicleAllowance",
      amount: 50000,
    },
  ],
  assets: {
    cars: [
      {
        id: "car1",
        carNumber: "KB-521",
        year: 2020,
        estimatedValue: 3100000,
      },
      {
        id: "car2",
        carNumber: "JU-329",
        year: 2012,
        estimatedValue: 430000,
      },
    ],
    realEstate: [
      {
        id: "re1",
        number: "210-9876",
        address: "Bergstaðastræti 12, 101 Reykjavík",
        estimatedValue: 45000000,
      },
    ],
  },
  debts: {
    loan: {
      purchaseYear: 2021,
      residentialLocation: 'Bláfjallagata 12',
      loanProvider: 'Íslandsbanki hf.',
      loanProviderSSN: '491008-0160',
      loanNumber: '56783900123',
      loanDate: '2021-06-15',
      loanTimeYears: 30,
      totalPayments: 2_280_000,
      installmentOfNominalValue: 1_360_000,
      interestExpenses: 920_000,
      remainingDebt: 28_540_000,
    },
    otherDebts: [
      {
        id: 'od1',
        description: 'Eftirstöðvar á korti númer: 4469 88XX XXXX 4567',
        interestExpenses: 39_200,
        remainingDebt: 217_000
      },
      {
        id: 'od2',
        description: 'Aukalán',
        interestExpenses: 86_000,
        remainingDebt: 980_000
      },
      {
        id: 'od3',
        description: '0142-26-732645 Varðan',
        interestExpenses: 14_500,
        remainingDebt: 62_000
      },
      {
        id: 'od4',
        description: 'Kilometer fee, Tax',
        interestExpenses: 0,
        remainingDebt: 2_370
      },
      {
        id: 'od5',
        description: 'Parliamentary and local government fees, Tax',
        interestExpenses: 224,
        remainingDebt: 0
      }
    ],
  },
};

export function useTaxReturnData() {
  const [data, setData] = useState<TaxReturnData>(initialData);

  // Debt
  const addDebt = (debt: OtherDebt) => {
    setData((prev) => ({
      ...prev,
      debts: { ...prev.debts, otherDebts: [...prev.debts.otherDebts, debt] },
    }));
  };

  const removeDebt = (id: string) => {
    setData((prev) => ({
      ...prev,
      debts: {
        ...prev.debts,
        otherDebts: prev.debts.otherDebts.filter((d) => d.id !== id),
      },
    }));
  };

  const editDebt = (updated: OtherDebt) => {
    setData((prev) => ({
      ...prev,
      debts: {
        ...prev.debts,
        otherDebts: prev.debts.otherDebts.map((d) =>
          d.id === updated.id ? updated : d
        ),
      },
    }));
  };

  const editLoan = (loan: Loan) => {
    setData((prev) => ({ ...prev, debts: { ...prev.debts, loan } }));
  };

  const removeLoan = () => {
    setData((prev) => ({ ...prev, debts: { ...prev.debts, loan: undefined } }));
  };

  // Car
  const addCar = (car: Car) => {
    setData((prev) => ({
      ...prev,
      assets: { ...prev.assets, cars: [...prev.assets.cars, car] },
    }));
  };

  const editCar = (updated: Car) => {
    setData((prev) => ({
      ...prev,
      assets: {
        ...prev.assets,
        cars: prev.assets.cars.map((c) => (c.id === updated.id ? updated : c)),
      },
    }));
  };

  const removeCar = (id: string) => {
    setData((prev) => ({
      ...prev,
      assets: {
        ...prev.assets,
        cars: prev.assets.cars.filter((c) => c.id !== id),
      },
    }));
  };

  // Real estate
  const addRealEstate = (estate: RealEstate) => {
    setData((prev) => ({
      ...prev,
      assets: {
        ...prev.assets,
        realEstate: [...prev.assets.realEstate, estate],
      },
    }));
  };

  const editRealEstate = (updated: RealEstate) => {
    setData((prev) => ({
      ...prev,
      assets: {
        ...prev.assets,
        realEstate: prev.assets.realEstate.map((e) =>
          e.id === updated.id ? updated : e
        ),
      },
    }));
  };

  const removeRealEstate = (id: string) => {
    setData((prev) => ({
      ...prev,
      assets: {
        ...prev.assets,
        realEstate: prev.assets.realEstate.filter((e) => e.id !== id),
      },
    }));
  };

  // Revenue
  const addRevenue = (revenue: Revenue) => {
    setData((prev) => ({
      ...prev,
      revenues: [...prev.revenues, revenue],
    }));
  };

  const editRevenue = (updated: Revenue) => {
    setData((prev) => ({
      ...prev,
      revenues: prev.revenues.map((r) =>
        r.id === updated.id ? updated : r
      ),
    }));
  };

  const removeRevenue = (id: string) => {
    setData((prev) => ({
      ...prev,
      revenues: prev.revenues.filter((r) => r.id !== id),
    }));
  };

  return {
    data,
    addDebt,
    removeDebt,
    editDebt,
    editLoan,
    removeLoan,
    addCar,
    editCar,
    removeCar,
    addRealEstate,
    editRealEstate,
    removeRealEstate,
    addRevenue,
    editRevenue,
    removeRevenue,
  };
}
