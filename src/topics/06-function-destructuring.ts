export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Galaxy s24 ultra",
  price: 1500.0,
};

const tablet: Product = {
  description: "iPad Air",
  price: 250.0,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

// function taxCalculation(options: TaxCalculationOptions): [number,number] { // se puede especificar un retorno de la funcion de una tupla con el tipo de cada uno de los dos valores devueltos asi sera mas cencillo identificar el return cuando se necesite usar dicha funcion
export function taxCalculation(options: TaxCalculationOptions): [number, number] {

  const { tax, products } = options;

  let total = 0;

  products.forEach(({ price }) => { // se puede desestructurar con las  {} el price que esta dentro de products
    total += price;
  });

  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
  products: shoppingCart,
  tax: tax,
});

console.log("Total", total);
console.log("Tax", taxTotal);

// export {};
