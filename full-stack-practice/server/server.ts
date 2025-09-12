import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

type Product = {
  productId: number;
  name: string;
  price: number;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
};

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "products"
        order by "productId"
    `;
    const result = await db.query<Product[]>(sql);
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    validateProductId(productId);
    const sql = `
      select *
        from "products"
        where "productId" = $1;
    `;
    const result = await db.query<Product>(sql, [productId]);
    const [product] = result.rows;
    if (!product)
      throw new ClientError(
        404,
        `cannot find product with productId: ${productId}`
      );
    res.json(product);
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});

function validateProductId(productId: string): void {
  if (!Number.isInteger(+productId)) {
    throw new ClientError(
      400,
      `productId: ${productId} must be an integer value`
    );
  }
}
