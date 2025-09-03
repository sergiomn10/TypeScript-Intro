


export class Person{
    // public name: string;  // las propiedades se pueden declarar directamenbte en el constructor en typescript
    // private address: string;

    constructor(
        public fisrtName: string,  
        public lastName: string,  
        private address: string = 'No Address' ){}
}


// export class Hero extends Person {



//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ){
//         super(realName, 'NY');// super es el constructor de la clase que se extiende
//     }
// }

export class Hero {

    // public person: Person;
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){
        // this.person = new Person(realName); // se agraga el uso de la clase extendida directamente en el construtor por si la clase Person cambia no afecte directamente a Hero
    }
}


const tony = new Person('Tony','Stark', 'New York');
const ironman = new Hero('Ironman',45,'Tony',tony);

console.log(ironman);
