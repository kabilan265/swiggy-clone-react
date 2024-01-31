import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import ShimmerUI from "./ShimmerUI";
import useRestuarant from "../utils/useRestuarant";
import RestuarantCategory from "./RestuarantCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";
import {
  faStar,
  faMotorcycle,
  faClock,
  faIndianRupee,
} from "@fortawesome/free-solid-svg-icons";
import { cartContext } from "../utils/UserContext";
export default restaurant = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  const [resInfo, setResInfo, fetchFailed] = useRestuarant(resId);
  const dispatch = useDispatch();
  function handleCart(item, index, type, action) {
    let findIndex;
    for (let [
      index,
      card,
    ] of (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards).entries()) {
      if (card?.card?.card?.title === type) {
        findIndex = index;
      }
    }
    const data = _.cloneDeep(resInfo);
    const subData =
      data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[findIndex];
    const nestedData = subData?.card?.card?.itemCards;
    let nestedIndex;
    for (let [index, card] of nestedData.entries()) {
      if (card?.card?.info.id === item?.card?.info.id) {
        nestedIndex = index;
        if (card.card.info.count) {
          if (action === "increment") {
            card.card.info.count = card.card.info.count + 1;
          } else {
            card.card.info.count = card.card.info.count - 1;
          }
        } else {
          card.card.info.count = 1;
        }
        dispatch(addItem(card));
      }
    }
    setResInfo(data);
  }

  if (!resInfo) {
    return (
      <div className="w-[750] m-auto">
        {!fetchFailed ? (
          <ShimmerUI />
        ) : (
          <div className="text-xl text-warning text-center">
            CORS ERROR!!! Add CORS extension to your browser
          </div>
        )}
      </div>
    );
  }
  const {
    name,
    cuisines,
    locality,
    costForTwoMessage,
    avgRating,
    feeDetails,
    totalRatingsString,
    sla,
  } = resInfo?.cards[0]?.card?.card?.info;
  const { message } = feeDetails;
  const filteredList =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (card) => {
        return (
          card.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div className="w-[750] m-auto">
      <div className="px-3">
        <header className="mt-9 flex justify-between border-b-[0.5px] menu-border pb-6">
          <div>
            <h3 className="text-xl mb-2 font-bold text-card-heading">{name}</h3>
            <div className="text-sm opacity-80">{cuisines.join(", ")}</div>
            <div className="text-sm opacity-80">{locality}</div>
            {message && (
              <div className="mt-2">
                <FontAwesomeIcon
                  icon={faMotorcycle}
                  color="#777"
                  fontSize="18px"
                  className="opacity-70"
                />
                <span className="ml-3 text-sm opacity-90">{message}</span>
              </div>
            )}
          </div>
          <div>
            <div className="p-2 border border-accordin-menu-border border-solid rounded">
              <div className="flex items-center justify-center gap-1 p-1  border-b-accordin-menu-border border-b">
                <FontAwesomeIcon
                  icon={faStar}
                  color="#3e8914"
                  fontSize="18px"
                  className="opacity-80"
                />
                <span className="font-semibold text-green opacity-80">
                  {avgRating}
                </span>
              </div>
              <div className="text-xs font-medium p-1">
                {totalRatingsString}
              </div>
            </div>
          </div>
        </header>
        <section className="py-4 flex items-center justify-start gap-5 border-b-[0.5px] menu-border ">
          <div className="flex items-center ">
            <FontAwesomeIcon icon={faClock} color="#444" fontSize="18px" />
            <span className="ml-2 text-base font-bold opacity-85">
              {sla.deliveryTime} MINS
            </span>
          </div>
          <div className="flex items-center ">
            <FontAwesomeIcon
              icon={faIndianRupee}
              color="#444"
              fontSize="18px"
            />
            <span className="ml-2 text-base font-bold opacity-85">
              {costForTwoMessage}
            </span>
          </div>
        </section>
        {filteredList.map((category, index) => {
          return (
            <cartContext.Provider
              value={{ handleCart }}
              key={category.card.card.title}
            >
              <RestuarantCategory
                resData={category}
                showMenu={showIndex === index}
                setShowIndex={(data) => {
                  if (showIndex === index) {
                    setShowIndex(null);
                    return;
                  }
                  setShowIndex(index);
                }}
              />
            </cartContext.Provider>
          );
        })}
      </div>
    </div>
  );
};
