
declare module 'pathfinding' {
  class Grid {
    constructor(width: number, height: number);
    constructor(matrix: number[][]);
    setWalkableAt(x: number, y: number, walkable: boolean): void;
  }

  class AStarFinder {
    constructor(options?: { allowDiagonal?: boolean; dontCrossCorners?: boolean });
    findPath(startX: number, startY: number, endX: number, endY: number, grid: Grid): number[][];
  }
}