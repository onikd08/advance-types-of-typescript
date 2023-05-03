const createArray = <T>(param: T): [T] => [param];

console.log(createArray(10));
console.log(createArray("ad"));

const myInfo: {
  fName: string;
  lName: string;
} = {
  fName: "Anik",
  lName: "Das",
};

const addAge = <T>(info: T) => {
  const age = 30;
  const updatedInfo = { ...info, age };
  return updatedInfo;
};
const res = addAge(myInfo);
