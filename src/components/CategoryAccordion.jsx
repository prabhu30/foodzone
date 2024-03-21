import { useState } from "react";
import Dish from "./Dish";

export default function CategoryAccordion({ category, showItems, setShowCategoryIndex }) {
    const { title, itemCards } = category?.card?.card;

    // const [showItems, setShowItems] = useState(false);
    // function handleClick() {
    //     setShowItems(!showItems);
    // }

    return (
        <div className="">
            <div className="flex justify-between py-3 px-4 shadow-lg bg-gray-100 my-2 rounded cursor-pointer" onClick={setShowCategoryIndex}>
                <h1 className="font-bold text-gray-700">{title} ({itemCards.length})</h1>
                <i className="fa-solid fa-angle-down pt-1"></i>
            </div>
            {showItems && <div className="px-2 itemsList">
                {
                    itemCards.map((item, index) => (
                        <Dish key={index} item={item.card.info} />
                    ))
                }
            </div>}
        </div>
    )
}