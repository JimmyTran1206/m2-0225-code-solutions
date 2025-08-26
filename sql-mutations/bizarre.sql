update "addresses"
  set "cityId"=1
  where "cityId"=(
    select "cityId"
      from "cities"
      where "name" = 'Pyongyang'
  );

delete
  from "cities"
 where "name" = 'Pyongyang'
 returning *;
