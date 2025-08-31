


const skills: string[] = ['Bash', 'Counter', 'Healing']; // las variables const son mas ligeras proque no tienen metodos de asignacion


// las interfaces cuando son transpiladas a Jaascript no reprensen ninguna linea de codigo, asi sean miles de interfaces.
interface Character {
    name: string;
    hp:number;
    skills: string[];
    hometown?: string;  //signo de interrogacion para indicar es opcional
}   


const striper: Character = {
    name: 'Striper',
    hp: 100,
    skills: ['Bash', 'Counter'],
};

striper.hometown = 'Rivendell';

console.table(striper); //imprimir otra forma los datos con .table



export {} // convertir el archivo en un modulo y se pueda ejecutar el script en el main