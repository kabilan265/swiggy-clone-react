import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const BrowseMenu = (props) => {
  const [enableMenu, setEnableMenu] = useState(false);
  const { menuList, setShowIndex } = { ...props };
  return (
    <div>
      <div
        className="fixed bottom-20 shadow-lg cursor-pointer text-sm left-1/2 px-5 py-2 rounded-2xl -translate-x-1/2 bg-blue  text-white font-semibold"
        onClick={() => {
          setEnableMenu(true);
          document.body.style.overflow = "hidden";
        }}
      >
        <FontAwesomeIcon icon={faUtensils} />
        <span className="ml-2"> BROWSE MENU</span>
      </div>
      <div
        className={`fixed bottom-28 left-1/2 px-5 py-2 
        bg-white shadow-xl w-full max-w-[500px] pr-0 z-20 rounded-l-xl -translate-x-1/2 transition-all ease-linear duration-150 ${
          enableMenu ? "scale-100 -translate-y-[0px]" : "scale-0"
        }`}
      >
        <ul className="p-4 max-h-80 overflow-y-auto">
          {menuList.map((category, index) => {
            return (
              <li
                onClick={() => {
                  setEnableMenu(false);
                  document.body.style = {};
                  setShowIndex(index, category.card.card.title)
                  /* const elem = document.body.querySelector(
                    `#${idMaker(category.card.card.title)}`
                  );
                  elem.scrollIntoView({ behavior: "smooth" });
                   */
                }}
                key={category.card.card.title}
                className="flex justify-between items-center mb-4 last:mb-0 text-lg cursor-pointer  "
              >
                <span className="">{category.card.card.title}</span>
                <span>{category.card.card.itemCards.length}</span>
              </li>
            );
          })}
        </ul>
      </div>
      {enableMenu && (
        <div
          className="bg-overlay fixed top-0 left-0 w-full h-full z-10"
          onClick={() => {
            setEnableMenu(false);
            document.body.style = {};
          }}
        ></div>
      )}
    </div>
  );
};
export default BrowseMenu;
