import { CDN_URL } from "../utils/Constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default ResCard = (prop) => {
    const { resData } = prop;
    const { cloudinaryImageId, name, avgRating, cuisines, sla } = resData.info;
    return (

        <div className='res-card hover:scale-95 transition-all duration-200 overflow-x-hidden' data-testid="res-card">
            <div className='res-img-container mb-2'>
                <img src={CDN_URL + '/' + cloudinaryImageId} className="w-full h-[130] object-cover img-filter rounded-2xl" />
                {/* <img src="https://recipes.net/wp-content/uploads/2023/05/air-fryer-chicken-biryani-recipe_6968eb6ab4a5ae22d136dab86c9ea8af.jpeg" /> */}
            </div>
            <div className="pl-2">
                <h3 className="text-lg font-bold text-card-heading text-ellipsis overflow-x-hidden w-44 whitespace-nowrap ">{name}</h3>
                <div className="flex items-center justify-start gap-1">
                    <div className="w w-4 h-4 bg-green rounded-lg flex items-center justify-center"><FontAwesomeIcon icon={faStar} color="#fff" fontSize='10px' /></div>
                    <span className="font-semibold  text-light-heading  text-base">{avgRating}</span>
                    <span className="font-semibold  text-light-heading  text-base">.</span>
                    <span className="font-semibold  text-light-heading  text-base">{sla.deliveryTime} mins</span>
                </div>
                <p className="text-ellipsis overflow-x-hidden w-44 whitespace-nowrap opacity-70">{cuisines.join(' ')}</p>
            </div>
        </div>
    )
}
export const isHighlyRated = (ResCard) => {
    return (props) => {
        return (
            <div>
                <label>Top Rated</label>
                <ResCard {...props} />
            </div>
        )
    }
}