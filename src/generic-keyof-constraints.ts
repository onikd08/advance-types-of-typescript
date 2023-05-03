/*
Write a function that takes an object and its property
as arguments and return the value of that property.
*/

interface IPerson<T> {
  name: string;
  age: number;
  data: T;
}

const userNew: IPerson<string[]> = {
  name: "New User",
  age: 40,
  data: ["abc", "def"],
};

function getPropertyValue<X, Y extends keyof X>(obj: X, key: Y): X[Y] {
  console.log(obj[key]);
  return obj[key];
}
// const getPropertyValue = <X,Y extends keyof X> (obj:X, key: Y) =>obj[key];

getPropertyValue(userNew, "name");
