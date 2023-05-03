type CoupleType<X, Y> = [X, Y];
const [bf, gf]: CoupleType<string, string> = ["AD", "RT"];

type GenericArrayType<T> = Array<T>;

const numbers: GenericArrayType<number> = [1, 2, 3, 4, 5];
const strings: GenericArrayType<string> = ["1", "2", "3"];

type PersonType = {
  name: string;
  age: number;
};

const objects: GenericArrayType<PersonType> = [
  {
    name: "Anik",
    age: 30,
  },
  {
    name: "Das",
    age: 33,
  },
];

console.log(objects);

type GenericTest<T> = T;

const myName: GenericTest<string> = "Anik";
const myAge: GenericTest<number> = 30;
console.log(myName, myAge);

type AnotherGeneric<T, U> = {
  property1: T;
  property2: U;
};

const test1: AnotherGeneric<string, number> = {
  property1: "ABC",
  property2: 234,
};
console.log(test1);
