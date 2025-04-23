interface Product {
  name: string;
  aisle: string;
  coordinates: { x: number; y: number };
}

const products: Product[] = [
  { name: 'Milk', aisle: 'Aisle 1', coordinates: { x: 2, y: 3 } },
  { name: 'Bread', aisle: 'Aisle 1', coordinates: { x: 2, y: 7 } },
  { name: 'Apples', aisle: 'Aisle 2', coordinates: { x: 6, y: 3 } },
  { name: 'Pasta', aisle: 'Aisle 2', coordinates: { x: 6, y: 7 } },
  { name: 'Cheese', aisle: 'Central Area', coordinates: { x: 4, y: 5 } },
];

export default products;