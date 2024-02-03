import { CDN_URL } from "../utils/Constants";

const SearchResCard = (props) => {
  const { resData } = { ...props };
  const { type, cloudinaryId, text } = { ...resData };
  return (
    <div>
      <div className="flex justify-start gap-5 mb-3 cursor-pointer hover:bg-[#f2f6fc] py-2">
        <div>
          <img
            className="w-[80px] h-[80px] object-cover"
            src={CDN_URL + cloudinaryId}
          />
        </div>
        <div>
          <div className="text-medium">{text}</div>
          <span className="text-xs text-[#5e5d5d]">{type}</span>
        </div>
      </div>
    </div>
  );
};
export default SearchResCard;
