import RestuarantAccordin from "./RestuarantAccordin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { idMaker } from "../utils/HelperFunctions";
const RestuarantCategory = (props) => {
  const { resData, showMenu, setShowIndex } = { ...props };
  const { title, itemCards } = resData?.card?.card;
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="pt-5">
      <div
        className="flex items-center justify-between cursor-pointer"
        id={idMaker(title)}
        onClick={handleClick}
      >
        <h2 className="text-lg font-bold text-card-heading my-4 ">
          {title} ({itemCards.length})
        </h2>
        '
        <FontAwesomeIcon icon={showMenu ? faChevronUp : faChevronDown} />
      </div>
      {showMenu && (
        <div>{<RestuarantAccordin resData={itemCards} type={title} />}</div>
      )}
      <div className="h-[16] bg-accordin-border"></div>
    </div>
  );
};

export default RestuarantCategory;
