import { Link } from 'react-router-dom';
import { RESTAURANT_IMAGE, RESTAURANT_URL_PREFIX } from '../utils/constants';

const RestaurantCard = function ({ data }) {
    let { id, name, locality, areaName, avgRating, sla, cuisines, cloudinaryImageId } = data;

    const imageUrl = RESTAURANT_IMAGE + cloudinaryImageId;

    let restaurantName = name;
    let restaurantArea = areaName;
    name = name.toLowerCase().split(' ').join('-');
    locality = locality.toLowerCase().split(' ').join('-');
    areaName = areaName.toLowerCase().split(' ').join('-');

    cuisines = cuisines.join(', ');

    // const restaurantLink = `${RESTAURANT_URL_PREFIX}${name}-${locality}-${areaName}-${id}`;
    const restaurantLink = `/restaurant/${id}`
    // console.log(restaurantLink);

    return (
        <div className='w-56 mx-4 mb-8 shadow-2xl rounded-2xl'>
            <img src={imageUrl} alt="Image of Food" className='restaurant-image h-40 w-56 rounded-tl-2xl rounded-tr-2xl' />
            <div className='restaurant-details px-3 bg-slate-200 rounded-bl-2xl rounded-br-2xl hover:bg-orange-100'>
                <p className='restaurant-name w-48 pt-3 pb-1 font-bold text-ellipsis whitespace-nowrap overflow-hidden'>{restaurantName}</p>
                <div className='rating-and-delivery-time flex items-center gap-1 pb-2'>
                    <i className="fa-solid fa-star" style={{ 'color': '#42a98f' }}></i>
                    <div className='rating'>{avgRating}</div> |
                    <div className='delivery-time'>{sla.deliveryTime} mins</div>
                </div>
                <p className='cuisines text-sm italic text-ellipsis whitespace-nowrap overflow-hidden pb-1'>{cuisines}</p>
                <p className='restaurant-area text-sm italic pb-5'>{restaurantArea}</p>
            </div>
        </div>
    )
}

export function CostPerTwo(RestaurantCard) {
    return (props) => {
        return (
            <div>
                <label className='absolute bg-green-500 text-white font-bold italic border border-slate-500 ml-2 mt-5 px-2'>{props.data.costForTwo}</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;