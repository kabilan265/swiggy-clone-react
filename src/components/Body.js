import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import Caurosel from "./Caurosel";
export default Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [subHeading, setSubHeading] = useState("");
  const [cauroselData, setCauroselData] = useState();
  const [fetchFailed, setFetchFailed] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1281104&lng=80.1629374&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await res.json();
        setResList(
          json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setfilteredList(
          json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setSubHeading(json.data?.cards[1]?.card?.card?.header?.title);
        setCauroselData(json.data?.cards[0]?.card?.card);
      } catch (err) {
        console.log(err);
        setFetchFailed(true);
      }
    })();
  }, []);
  if (!resList.length) {
    return (
      <div className="body-container max-w-[900] m-auto mb-8">
        {!fetchFailed ? (
          <ShimmerUI />
        ) : (
          <div className="text-xl text-warning text-center">
            CORS ERROR!!! Add CORS extension to your browser
          </div>
        )}
      </div>
    );
  } else
    return (
      <div className="body-container max-w-[900] m-auto mb-8">
        {!resList.length ? (
          <ShimmerUI />
        ) : (
          <div>
            <section className="mb-12">
              <Caurosel resData={cauroselData} />
            </section>
            <div className="menu-border h-[1px]"></div>
            <section className="mt-10">
              <h2 className="t font-bold text-2xl mb-5">{subHeading}</h2>
              <div className="res-container grid grid-cols-4 gap-[30px] w-full">
                {filteredList.map((resOj) => {
                  return (
                    <Link to={"retuarant/" + resOj.info.id} key={resOj.info.id}>
                      {resOj.info.avgRating > 6 ? (
                        <TopRatedRes resData={resOj} />
                      ) : (
                        <ResCard resData={resOj} />
                      )}
                    </Link>
                  );
                })}
              </div>
            </section>
          </div>
        )}
      </div>
    );
};
