import { useEffect, useState } from "react";
import { setRestuarantDetails } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

export default userRestuarant = (paramId) => {
  const [resInfo, setResInfo] = useState(null);
  const [fetchFailed, setFetchFailed] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.1281104&lng=80.1629374&restaurantId=" +
          paramId
      );
      const json = await res.json();
      setResInfo(json.data);
      dispatch(setRestuarantDetails(json.data));
    } catch (err) {
        setFetchFailed(true)
    }
  }
  return [resInfo, setResInfo , fetchFailed];
};
