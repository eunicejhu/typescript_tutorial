import { People } from "./class";

const Isabella = new People("isabella", 29);
console.log(Isabella.greet());
Isabella.name = "Zuoqin";
console.log(Isabella.greet());
