interface IEmployee<T, U, V = null> {
  name: string;
  address: {
    street: string;
    postalCode: T;
  };
  phoneNumber: string;
  maritalStatus: U;
  pet?: V;
}

const employee1: IEmployee<number, boolean> = {
  name: "AD",
  address: {
    street: "Kuusikonkatu 4A",
    postalCode: 33820,
  },
  phoneNumber: "018000000",
  maritalStatus: false,
};
