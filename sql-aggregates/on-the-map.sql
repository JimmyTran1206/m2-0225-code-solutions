select count(*),
       "countries"."name" as "countryName"
  from "cities"
  join "countries" using ("countryId")
  group by ("countryName");
