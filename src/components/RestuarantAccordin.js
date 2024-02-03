import { CDN_URL } from "../utils/Constants";
import { cartContext } from "../utils/UserContext";
import { useContext } from "react";
const MenuItem = (props) => {
  const { resData, type } = { ...props };
  const { handleCart } = useContext(cartContext);
  return (
    <ul>
      {resData.map((item, index) => {
        return (
          <div
            data-testid="menus"
            key={item.card.info.name}
            className="grid according-wrap pb-10 last:pb-10 border-b-[0.5px] menu-border pt-5 gap-x-4"
          >
            <div>
              <h3 className="text-lg font-semibold text-card-heading">
                {item.card.info.name}
              </h3>
              <div className="mb-3 text-sm">
                <span className="mr-1">&#8377;</span>
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </div>
              <p className="opacity-60 text-sm">{item.card.info.description}</p>
            </div>
            <div className="relative">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="rounded-lg w-full h-[100] object-cover img-filter"
              />
              {!item.card.info.count ? (
                <button
                  className="px-8 py-2 absolute bottom-[-8px] shadow-md left-2/4 text-green font-medium text-xs rounded-md -translate-x-1/2 bg-white"
                  onClick={() => {
                    /*  handleAddItem(item); */
                    handleCart(item, index, type);
                  }}
                >
                  Add
                </button>
              ) : (
                <button className="flex  items-center justify-between gap-4 px-4 py-2 absolute bottom-[-8px] shadow-md left-2/4 text-green font-medium text-sm rounded-md -translate-x-1/2 bg-white">
                  <span
                    onClick={() => {
                      /*  handleAddItem(item); */
                      handleCart(item, index, type, "decrement");
                    }}
                  >
                    -
                  </span>
                  <span>{item.card.info.count}</span>
                  <span
                    onClick={() => {
                      /*  handleAddItem(item); */
                      handleCart(item, index, type, "increment");
                    }}
                  >
                    +
                  </span>
                </button>
              )}
            </div>
          </div>
        );
      })}
    </ul>
  );
};
export default MenuItem;
