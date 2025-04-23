
const map: number[][] = Array(10)
  .fill(0)
  .map(() => Array(10).fill(0));

// Perimeter walls
for (let x = 0; x < 10; x++) {
  map[0][x] = 1;
  map[9][x] = 1;
  map[x][0] = 1;
  map[x][9] = 1;
}
map[0][1] = 0; // Entrance at (1, 0)

// Aisles (x=2-3, x=6-7, y=2-8) and cross-aisle (y=5)
for (let y = 2; y <= 8; y++) {
  map[y][2] = 0;
  map[y][3] = 0;
  map[y][6] = 0;
  map[y][7] = 0;
}
for (let x = 1; x <= 8; x++) {
  map[5][x] = 0;
}

// Shelves
const shelves = [
  [2, 1, 3, 1], [2, 4, 3, 1], [6, 1, 3, 1], [6, 4, 3, 1],
];
shelves.forEach(([y, x, height, width]) => {
  for (let dy = 0; dy < height; dy++) {
    for (let dx = 0; dx < width; dx++) {
      map[y + dy][x + dx] = 1;
    }
  }
});

export default map;