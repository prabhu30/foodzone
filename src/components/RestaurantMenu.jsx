import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Dish from "./Dish";
import CategoryAccordion from "./CategoryAccordion";
import { RESTAURANT_IMAGE } from "../utils/constants";

export default function RestaurantMenu() {

  const { id } = useParams();

  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [recommendedItems, setRecommendedItems] = useState(null);
  const [categoryHeading, setCategoryHeading] = useState("");
  const [categories, setCategories] = useState(null);
  const [restaurantOffers, setRestaurantOffers] = useState(null);
  const [showCategoryIndex, setShowCategoryIndex] = useState(null);

  useEffect(() => {
    fetchRestaurantInfo();
  }, [])

  async function fetchRestaurantInfo() {
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.50330&lng=80.64650&restaurantId=${id}`);
    const restaurantDetails = await response.json();
    const restaurantInfo = restaurantDetails?.data?.cards[0]?.card?.card?.info;
    let recommendedItems = restaurantDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    const restaurantOffersList = restaurantDetails?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;

    const allCategories = restaurantDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const categories = allCategories.filter(category => category?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    setCategories(categories);

    if (!recommendedItems) {
      recommendedItems = restaurantDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    }

    const categoryHeading = restaurantDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title;

    // console.log(restaurantDetails);
    // console.log(restaurantDetails?.data?.cards[0]?.card?.card);
    // console.log(recommendedItems);
    // console.log(restaurantInfo);

    setRestaurantDetails(restaurantDetails);
    setRestaurantInfo(restaurantInfo);
    setCategoryHeading(categoryHeading);
    setRecommendedItems(recommendedItems);
    setRestaurantOffers(restaurantOffersList);
  }

  console.log(restaurantOffers);

  function setCategoryIndex(index) {
    index == showCategoryIndex ? setShowCategoryIndex(-1) : setShowCategoryIndex(index);
  }

  if (restaurantDetails === null) return <Shimmer />;

  return (
    <div className="restaurant-page  bg-gray-100 pb-16">
      <div className="restaurant-menu w-[800px] m-auto pt-8">

        { /* Bread Crumb */}
        <p className="bread-crumb text-xs  text-gray-500"><span>Home</span> / {restaurantInfo?.city} / <span className="text-gray-900">{restaurantInfo?.name}</span></p>

        { /* Restaurant Details and Ratings */}
        <div className="res-header py-8 px-4 border border-dashed border-t-0 border-x-0 border-b-gray-400">
          <div className="res-header-top flex justify-between">
            <div className="res-header-top-left">
              <h1 className="res-name font-bold text-xl">{restaurantInfo?.name}</h1>
              <p className="res-cuisines text-sm text-gray-500 pt-2">{restaurantInfo?.cuisines.join(', ')}</p>
              <p className="res-areaName text-sm text-gray-500 pt-0">{restaurantInfo?.areaName}, {restaurantInfo?.sla.lastMileTravelString}</p>
            </div>
            <div className="res-header-top-right border border-gray-400 rounded-lg text-green-500 text-center font-bold p-2">
              <p className="res-rating  border border-t-0 border-x-0 border-b-gray-400 pb-2"><i className="fa-sharp fa-solid fa-star"></i> {restaurantInfo?.avgRatingString}</p>
              <p className="ratings-string text-gray-400 text-xs pt-2">{restaurantInfo?.totalRatingsString}</p>
            </div>
          </div>

          <div>
            <p className="res-distance-delivery-msg text-gray-500 text-sm pt-4"> <i className="fa-solid fa-person-biking"></i> {restaurantInfo?.feeDetails?.message}</p>
          </div>
        </div>

        { /* Delivery time and Cost per two */}
        <div className="res-delivery-time-cost px-4 py-4 flex gap-6 text-gray-800">
          <p className="font-bold text-gray-700"><i className="fa-solid fa-clock"></i> {restaurantInfo?.sla.slaString}</p>
          <p className="font-bold text-gray-700"><i className=" fa-solid fa-coins"></i> {restaurantInfo?.costForTwoMessage}</p>
        </div>

        { /* Offers & Coupon Codes */}
        <div className="flex whitespace-nowrap text-ellipsis overflow-hidden pb-8 border border-t-0 border-x-0 border-b-gray-400">
          {
            restaurantOffers.map(offer => (
              <div key={offer.info.offerIds[0]} className="border border-gray-300 rounded-lg py-2 px-3 mr-4 cursor-pointer">
                <div className="flex font-bold items-center">
                  <img src={RESTAURANT_IMAGE + offer.info.offerLogo} className="w-5 h-5 mr-2" />
                  <h1 className="text-gray-600 tracking-tighter w-44">{offer.info.header}</h1>
                </div>
                <div>
                  <h1 className="text-xs font-bold text-gray-500 tracking-tighter">{offer.info.couponCode} | {offer.info.description}</h1>
                </div>
              </div>
            ))
          }
        </div>
      </div >

      { /* Categories */}
      <div className="w-[800px] m-auto px-4 pt-4">
        {
          categories.map((category, index) => (
            <CategoryAccordion
              key={index}
              category={category}
              showItems={index == showCategoryIndex && true}
              setShowCategoryIndex={() => setCategoryIndex(index)} />
          ))
        }
      </div>
    </div >
  )
}