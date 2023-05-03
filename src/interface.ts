// Type Alias for objects

type UserType = {
  name: string;
  age: number;
};

type ExtendedUserType = UserType & {
  profession: string;
};

const user1: UserType = {
  name: "AD",
  age: 20,
};

const extendedUser1: ExtendedUserType = {
  name: "BD",
  age: 30,
  profession: "student",
};

// Interface for objects

interface IUser {
  name: string;
  age: number;
}

interface IExtendedUser extends IUser {
  profession: string;
}

const interfaceUser1: IUser = {
  name: "Ak",
  age: 20,
};

const interfaceUser2: IExtendedUser = {
  name: "Ad",
  age: 20,
  profession: "student",
};

// type alias for functions

type AddNumberType = (num1: number, num2: number) => number;

const addNumbers: AddNumberType = (num1, num2) => num1 + num2;

// Interface for functions

interface IAddNumbers {
  (num1: number, num2: number): number;
}

//Type alias for array
type ageType = number[];
const ageGroup: ageType = [1, 2, 3];

//Interface for array
interface IAgeGroup {
  [index: number]: number;
}
const adultGroup: IAgeGroup = [20, 30, 40];
