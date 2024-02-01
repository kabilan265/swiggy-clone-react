import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/Constants";
const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const resDetails = useSelector((store) => store.cart.restuarantDetails);
  if (!items.length) {
    return (
      <div className="absolute right-0 shadow-xl all bottom-[0px] translate-y-full p-10 z-10 bg-white max-w-[400px] w-[500px]">
        <h2 className="text-xl font-semibold opacity-80 mb-2"> Cart Empty</h2>
        <span className="text-base opacity-70">
          Good food is always cooking! Go ahead, order some yummy items from the
          menu
        </span>{" "}
      </div>
    );
  }
  const { name, info, areaName, cloudinaryImageId } =
    resDetails?.cards?.[0]?.card?.card.info;
  const sum = items.reduce((sum, item) => {
    const price = item.card.info.price
      ? item.card.info.price / 100
      : item.card.info.defaultPrice / 100;
    return (sum = Math.trunc(
      sum + (price ) * item.card.info.count
    ));
  }, 0);
  return (
    <div className="absolute right-0 shadow-xl all bottom-[0px] translate-y-full p-6 z-10 bg-white max-w-[400px] w-[500px]">
      <header className="flex  justify-start gap-6 pb-5 cart-border">
        <div className="w-[60px] h-[60px] object-cover self-stretch">
          <img className="w-full h-full" src={CDN_URL + cloudinaryImageId} />
        </div>
        <div>
          <h3 className="font-semibold text-ellipsis overflow-x-hidden w-60 whitespace-nowrap ">
            {name}
          </h3>
          <span className="opacity-75 text-sm relative -top-1.5">
            {areaName}
          </span>
          <button className="block font-semibold text-xs text-blue">
            VIEW FULL MENU
          </button>
        </div>
      </header>
      <ul className="max-h-52 overflow-y-auto pt-4 cart-border">
        {items.map((item, index) => {
          return (
            <li
              key={item.card.info.id + index}
              className="flex items-center justify-between mb-2"
            >
              <div className="text-sm font-semibold">
                {item.card.info.name} * {item.card.info.count}
              </div>
              {/*  <span>{item.card.info.count}</span> */}
              <span className="text-sm opacity-80">
                &#8377;{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="py-4 flex items-center justify-between">
        <div className="text-bold text-lg">
          <h3 className=" font-semibold text-sm">Sub total</h3>
          <span className="opacity-75 text-xs relative -top-2">
            Extra charges may apply
          </span>
        </div>
        <span>&#8377; {sum}</span>
      </div>
    </div>
  );
};

export default Cart;