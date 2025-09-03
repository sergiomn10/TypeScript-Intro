
import { taxCalculation, type Product } from './06-function-destructuring';

// solo importar definiciones o codigo que no cause un impacto no deseado ya que ne las importaciones ejecuta todo el codigo del archio importado.



const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
];

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total ', total);
console.log('tax ', tax);
