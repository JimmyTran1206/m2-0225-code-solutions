import express from 'express';
import pg from 'pg';
import { ClientError,errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(errorMiddleware);

app.get('/api/countries',async(req,res,next)=>{
  try{
    const sql=`
    SELECT
        "countries"."countryId" as "countryId",
        "countries"."name" as "name",
        COUNT("cities"."cityId") as "cities"
    FROM "countries"
    LEFT JOIN "cities"
    USING ("countryId")
    GROUP BY ("countries"."countryId","countries"."name")
    ORDER BY "countries"."countryId";
    `;
    const result = await db.query(sql);
    const countries = result.rows;
    res.json(countries);
  }catch(err){
    next(err)
  }
})

app.get('/api/cities/:cityId', async(req,res,next)=>{
  try{
    const {cityId}=req.params;
    if (!Number.isInteger(+cityId)) {
      throw new ClientError(400, 'cityId must be an integer value');
    }
    if (!cityId) {
      throw new ClientError(400, 'cityId required');
    }
    const sql=`
    SELECT
        "cities"."cityId" as "cityId",
        "countries"."name" as "country",
        "cities"."name" as "name"
    FROM "countries"
    LEFT JOIN "cities"
    USING ("countryId")
    WHERE "cities"."cityId"=$1
    `;
    const result = await db.query(sql,[cityId]);
    const city = result.rows;
    res.json(city);
  }catch(err){
    next(err)
  }
})

app.listen(8080, () => {
  console.log('listening on port 8080');
});
