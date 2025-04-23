
import express, { Request, Response } from 'express';
import PF from 'pathfinding';
import map from '../utils/map';

const router = express.Router();

interface PathRequest {
  start: { x: number; y: number };
  end: { x: number; y: number };
}

router.post('/find-path', (req: Request<{}, {}, PathRequest>, res: Response): void => {
  const { start, end } = req.body;
  console.log('Received pathfinding request:', req.body);

  if (!start || !end) {
    res.status(400).json({ message: 'Missing start or end coordinates' });
    return;
  }
  if (!Number.isInteger(start.x) || !Number.isInteger(start.y)) {
    res.status(400).json({ message: 'Start coordinates must be integers' });
    return;
  }
  if (!Number.isInteger(end.x) || !Number.isInteger(end.y)) {
    res.status(400).json({ message: 'End coordinates must be integers' });
    return;
  }

  const width = map[0]?.length || 0;
  const height = map.length;
  if (
    start.x < 0 || start.x >= width || start.y < 0 || start.y >= height ||
    end.x < 0 || end.x >= width || end.y < 0 || end.y >= height
  ) {
    res.status(400).json({ message: `Coordinates out of bounds (0-${width-1}, 0-${height-1})` });
    return;
  }

  if (map[start.y][start.x] === 1) {
    res.status(400).json({ message: `Start position (${start.x},${start.y}) is on an obstacle` });
    return;
  }
  if (map[end.y][end.x] === 1) {
    res.status(400).json({ message: `End position (${end.x},${end.y}) is on an obstacle` });
    return;
  }

  try {
    const grid = new PF.Grid(map);
    const finder = new PF.AStarFinder();
    const path = finder.findPath(start.x, start.y, end.x, end.y, grid);
    if (path.length === 0) {
      res.status(404).json({ message: 'No path found' });
      return;
    }
    res.json(path);
  } catch (error: any) {
    console.error('Pathfinding error:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

export default router;