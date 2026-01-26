SELECT
        "countries"."countryId" as "countryId",
        "countries"."name" as "name",
        COUNT("cities"."cityId")
FROM "countries"
LEFT JOIN "cities"
USING ("countryId")
GROUP BY ("countries"."countryId","countries"."name")
ORDER BY "countries"."countryId";
