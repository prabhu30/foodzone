import RestaurantCard, { CostPerTwo } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API_RESPONSE } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RestaurantsContainer = function () {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  function searchRestaurants(value) {
    let restaurantsFilteredByText = restaurantsList.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(value);
    });
    setSearchText(value);
    setFilteredRestaurants(restaurantsFilteredByText);
  }

  function sortByRatingDescending() {
    let sortedRestaurantsList = [...restaurantsList].sort(
      (restaurant1, restaurant2) => {
        let RestaurantOneRating = Number(restaurant1.avgRating);
        let RestaurantTwoRating = Number(restaurant2.avgRating);
        return RestaurantTwoRating - RestaurantOneRating;
      }
    );
    setFilteredRestaurants(sortedRestaurantsList);
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(SWIGGY_API_RESPONSE);
    const response = await data.json();
    // console.log("Swiggy API Data fetched: ", response);
    const restaurantsListResponse =
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const restaurantsListData = restaurantsListResponse.map((restaurant) => {
      return restaurant?.info;
    });

    setRestaurantsList(restaurantsListData);
    setFilteredRestaurants(restaurantsListData);
  };

  const CostPerTwoCard = CostPerTwo(RestaurantCard);

  console.log("rendering restaurants container component");

  return restaurantsList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div
        id="search"
        className="search bg-gray-100 flex flex-col gap-3 sm:flex-row sm:gap-0 justify-center items-center py-8"
      >
        <div className="mr-8">
          <input
            value={searchText}
            type="text"
            placeholder="Search Restaurants"
            className="search-input bg-white px-4 py-1 mr-0 text-black outline-none border border-b-slate-800"
            onChange={(e) => searchRestaurants(e.target.value)}
          />
          <button className="search-icon px-2 py-1 ml-0 bg-blue-300 border border-b-blue-300">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <button
          className="sort-by-rating py-1 bg-orange-300 hover:bg-green-300 px-4 rounded-sm"
          onClick={() => sortByRatingDescending()}
        >
          Sort by Rating
        </button>
      </div>
      <div className="restaurants-container bg-gray-100 pb-12 flex justify-evenly flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={"/restaurant/" + restaurant?.id}
            className="restaurant-card"
          >
            <CostPerTwoCard key={restaurant.id} data={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default RestaurantsContainer;
