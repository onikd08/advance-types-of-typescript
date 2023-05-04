type a1 = number;
type a2 = string;

type a3 = a1 extends string ? string : a2 extends number ? number : null;

interface IPersonUser {
  name: string;
  age: number;
  profession: string;
}

type checkProperty<T, K> = K extends keyof T ? string : undefined;

type checkPropertyOfIPersonUser1 = checkProperty<IPersonUser, "profession">;
type checkPropertyOfIPersonUser2 = checkProperty<IPersonUser, "address">;

// remove a type
type friends = "Monica" | "Rachel" | "Pheobe";
type removeFriend<T, V> = T extends V ? never : T;
type check = removeFriend<friends, "Pheobe">;
