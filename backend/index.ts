
import express from 'express';
import cors from 'cors';
import navigationRouter from './routes/navigation';
import productsRouter from './routes/products';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/navigation', navigationRouter);
app.use('/api/products', productsRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));