/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
  name: string;
  age: number;
  address: Address; // siempre que tenga mas de 1 propiedad un objeto se recomienda hacer una interface separada
  showAddress: () => string;
}

interface Address {
  street: string;
  country: string;
  city: string;
}

const superHeroe: SuperHero = {
  name: "Spiderman",
  age: 30,
  address: {
    street: "Main St",
    country: "USA",
    city: "NY",
  },
  showAddress() {
    return this.name + ", " + this.address.city + ", " + this.address.country;
  },
};

const address = superHeroe.showAddress();
console.log(address);

export {};
