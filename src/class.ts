export class People {
  public name: string;
  protected age: number; // protected modifier.
  private _id: number;
  private _entryDate: Date;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this._id = new Date().getTime();
    this._entryDate = new Date();
  }

  public greet() {
    return `Hello, My name is ${this.name}, I'm ${this.age} years old.`;
  }
}
