interface Iinfo {
  name: string;
  age: number;
  //isMarried: boolean;
}

interface IMandatory {
  name: string;
  age: number;
}

const userInfo: Iinfo = {
  name: "User 1",
  age: 40,
  //isMarried: false,
};

const addProperty = <T extends IMandatory>(info: T) => {
  const newProperty = "Hello World";
  const newInfo = { ...info, newProperty };
  return newInfo;
};

const res1 = addProperty(userInfo);
console.log(res1.newProperty);
