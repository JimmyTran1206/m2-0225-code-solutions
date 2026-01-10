select "firstName",
       "lastName",
       "rentals"."customerId"
  from "customers"
  join "rentals" using ("customerId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId")
  where "films"."title" = 'Magic Mallrats';
