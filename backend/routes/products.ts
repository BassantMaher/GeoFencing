
import express, { Request, Response } from 'express';
import products from '../data/products';

const router = express.Router();

router.get('/', (req: Request, res: Response): void => {
  res.json(products);
});

export default router;