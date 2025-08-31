function addNumbers(a: number, b: number): number {  // importante indicar que tipo de datos recibe y devuelven las funciones para tener mejor contrrol del codigo y no dejarle a typecript infiera todos los datos manejados ya que podria acarriar posibles errores.
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return  `${a + b}`;  // los backtics ``  ayudan a escribir en multilinea un string o convertir inplicitamente a String los valores.
};


function multiply(firsNumber: number, secondNumber?: number, base: number = 2){
    return firsNumber * base;

}

// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5)

// console.log({ result,result2, multiplyResult });

interface Character{
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount: number) => {
    
    
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider,10);

strider.showHp();

export {};
