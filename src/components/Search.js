import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import SearchResCard from "./SearchResCard";
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [resList, setResList] = useState({});
  async function fetchResList(text) {
    const value = text.trim();
    if (value.length >= 2) {
      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=13.1281104&lng=80.1629374&str=${value}&trackingId=undefined`
        );
        const json = await response.json();
        setResList(json);
      } catch (err) {}
    } else {
      setResList({});
    }
  }
  return (
    <div>
      <div className="p-4 fixed w-full top-[74px] h-[90px]  bg-white ">
        <div className="max-w-2xl m-auto p-4 flex bg-white justify-between border border-[rgba(40,44,63,.3)] border-solid z-20">
          <input
            className=" flex-grow font-medium bg-white"
            placeholder="Search for restuarants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              fetchResList(e.target.value);
            }}
          />
          <button className="px-2 pl-4">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
      <div className=" max-w-2xl m-auto mt-[90px] ">
        <div className="px-2">
          {resList.data && (
            <div className="px-3 mt-5">
              {resList.data.suggestions.map((res, index) => {
                return <SearchResCard resData={res} key={index} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Search;
