// generic: type variable, return what is passed in
function identity<T>(input: T): T {
  return input;
}
const name = identity<string>("isabella");
const age = identity<number>(29);

function wrapInArray<T>(input: T): T[] {
  return [input];
}

const wrapInArray1 = <T>(input: T): T[] => [input];

// which is different from return any
function identity1(input: any): any {
  return input;
}

// type argument inference

const hobbies = identity(["dancing", "reading"]);

function loggingIdentity<T>(input: T[]): T[] {
  console.log(input.length);
  return input;
}

// generic types/interfaces
interface ILengthWise {
  length: number;
}

function logging<T extends ILengthWise>(input: T): void {
  console.log(input.length);
}

// using type parameters in Generic Constraints
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const object = { a: "he", b: ["apple"], c: false };
console.log(getProperty(object, "a"));

// use class types in Generics
function create<T>(c: new () => T): T {
  return new c();
}

// generic class

class GenericNumber<T> {
  public zeroValue!: T;
  public add!: (a: T, b: T) => T;
}

const genericNumber = new GenericNumber<number>();
genericNumber.zeroValue = 0;
genericNumber.add = (x: number, y: number) => x + y;

export { name, age };
