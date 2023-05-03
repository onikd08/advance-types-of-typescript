const kgToGram = (param: string | number): string | number => {
  if (typeof param === "string") {
    return `${parseFloat(param) * 1000}`;
  } else {
    return param * 1000;
  }
};

const output1 = kgToGram(10) as number;
const output2 = kgToGram("10") as string;
const output3 = <number>kgToGram(20);

console.log(output1, output2);
console.log(output3);

type CustomErrorType = {
  message: string;
};

try {
} catch (error) {
  console.log((error as CustomErrorType).message);
  // console.log(<CustomErrorType>error.message);
}
