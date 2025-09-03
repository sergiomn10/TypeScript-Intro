

export interface Passenger {
    name: string;
    children?: string[];
}


const passenger1: Passenger = {
    name: 'Sergio'
}

const passenger2: Passenger = {
    name: 'Yomali',
    children: ['Catalina','Yesbeth']
}


const printChildren = (passenger: Passenger) => {

    const howManyChildren = passenger.children?.length || 0; // los signos || de tuberia ayudan a validar si es indefinido y dar un valor 

    // const howManyChildren = passenger.children!.length; // agregar el signo ! indica que siempre va recibir el dato

    console.log(passenger.name,howManyChildren);

    // return howManyChildren;
    
}

printChildren(passenger2);