function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "New Property";
    hello = "oerride";
  };
}

// se usan los decoradores para indicar que tipo de clase sera si un Servicio, componente , una directia, un modulo etc.
@classDecorator
export class SuperClass {
  public myProperty: string = "Abc123";

  print() {
    console.log("Hola Mundo");
  }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);
