update "customers"
set "addressId"=1
where "addressId"=61
returning *;

delete from "addresses"
where "addressId"=61
returning *;
