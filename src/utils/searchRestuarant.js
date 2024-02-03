import { useEffect, useState } from "react";

const useSearchRestuarant = async (searchText) => {
  let json = {};
  try {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=13.1281104&lng=80.1629374&str=${searchText}&trackingId=undefined`
    );
    json = await response.json();
  } catch (err) {}
  return json;
};
export default useSearchRestuarant;
