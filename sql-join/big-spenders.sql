select "amount"
  from "payments" join "customers" using ("customerId")
  order by "amount" desc
  limit 20;
