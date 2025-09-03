
// funcion generica por la  <T>
export function whatsMyType<T>( argument: T): T {  // hacer todo lo posible por no usar el tipo de dato 'any' ya que se pueden sobre escribir cualquier tipo de dato y puede causar problemas en desarrollos complejos.
       
    
    return argument;
}

let  amIString = whatsMyType<string>('Hola Mundo'); // especificar el tipo de dato manejado en la clase generica en las llaves <string>
let  amINumber = whatsMyType<number>(100);
let  amIArray = whatsMyType<number[]>([1,2,3,4,5]);


console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));
