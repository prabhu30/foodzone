import { useDispatch } from "react-redux";
import { RESTAURANT_IMAGE } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

export default function Dish({ item }) {
  const { name, price, description, imageId } = item;

  const dispatchAction = useDispatch();

  function handleAddItem() {
    dispatchAction(
      addItem({
        name: name,
        price: price ? price : item.defaultPrice,
        description: description,
        imageId: imageId,
      })
    );
  }

  return (
    <div className="item pt-6 py-8 border border-x-0 border-t-0 border-b-slate-300 flex justify-between">
      <div className="item-details w-[70%]">
        <h1 className="item-name font-bold text-gray-800">{name}</h1>
        <p className="item-price text-sm">
          ₹ {price ? price / 100 : item.defaultPrice / 100}
        </p>
        <p className="item-description pt-8 text-[0.825rem] text-gray-400">
          {description}
        </p>
      </div>
      <div className="item-image flex flex-col items-center gap-2 cursor-pointer">
        <img
          src={RESTAURANT_IMAGE + imageId}
          className="w-[120px] h-[100px] rounded-lg bg-center bg-cover"
        />
        <button
          className=" w-20 px-auto py-1 font-bold text-sm text-green-500 bg-white rounded-sm border border-slate-300 shadow-md hover:shadow-lg"
          onClick={handleAddItem}
        >
          ADD
        </button>
      </div>
    </div>
  );
}
