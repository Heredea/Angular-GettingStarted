export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  chestii_de_pictura: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 7990,
    description: 'A large phone with one of the best screens',
    chestii_de_pictura: 'Picasso',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 6990,
    description: 'A great phone with one of the best cameras',
    chestii_de_pictura: 'Da Vinci',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 2990,
    description: '',
    chestii_de_pictura: 'Van gogh',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
