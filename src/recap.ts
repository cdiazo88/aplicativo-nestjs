// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myName = 'Carlos';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};

suma(2, 2);

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const carlos = new Persona(34, 'Carlos');
