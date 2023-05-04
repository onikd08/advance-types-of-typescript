const makePromiseString = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is fetched";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
    }
  });
};

const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
    }
  });
};

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const makeTodo = async (): Promise<ITodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data: ITodo = await response.json();
  return data;
};

const getTodo = async (): Promise<ITodo> => {
  const data: ITodo = await makeTodo();
  console.log(data);
  return data;
};

getTodo();

const getPromiseData = async (): Promise<void> => {
  //const data = await makePromiseString();
  const data = await makePromiseBoolean();
  console.log(data);
};

getPromiseData();
