import { useDispatch, useSelector } from "react-redux";
import Dish from "./Dish";
import { clearCart } from "../utils/cartSlice";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = Math.floor(
    cartItems
      .map((item) => item.price / 100)
      .reduce((acc, value) => {
        return acc + value;
      }, 0)
  );

  const dispatchAction = useDispatch();
  const handleClearCart = () => {
    dispatchAction(clearCart());
  };

  return (
    <div className="my-12 flex flex-col">
      <div className="flex justify-center items-center gap-3">
        <h1 className="text-2xl font-bold">Food Cart</h1>
        <i
          className="fa-solid fa-cart-shopping text-2xl pt-2"
          style={{ color: "#B197FC" }}
        ></i>
      </div>
      {cartItems.length == 0 ? (
        <div className="mt-6 text-xl flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <p className="text-slate-700">Your Cart is empty</p>
            <i className="fa-regular fa-face-frown pt-1 text-yellow-700"></i>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-burger text-orange-400"></i>
            <p className="text-slate-700">
              Add some food and get into good mood
            </p>
            <i className="fa-sharp fa-solid fa-champagne-glasses pt-1 text-blue-700"></i>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex mt-8">
            <div className="w-6/12 px-8 flex flex-col">
              <button
                className="w-28 mr-1 py-2 px-3 self-end bg-green-600 font-bold text-white rounded-lg"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
              <div className="">
                {cartItems.map((item, index) => (
                  <div key={index} className="cart-page">
                    <Dish key={index} item={item} />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-6/12 px-8 mt-16">
              <h1 className="text-xl font-bold text-slate-800 mb-4">
                Bill Details
              </h1>
              <div className="px-4 mb-2 border border-t-0 border-x-0 border-b-slate-300">
                <div className="flex justify-between mb-3">
                  <p>Item Total</p>
                  <p>₹ {totalPrice}</p>
                </div>
                <div className="flex justify-between mb-3">
                  <p>Delivery partner fee</p>
                  <p>₹ {32}</p>
                </div>
              </div>
              <div className="px-4">
                <div className="flex justify-between mb-3">
                  <p>Delivery Tip</p>
                  <a href="#" className="text-orange-500">
                    Add tip
                  </a>
                </div>
                <div className="flex justify-between mb-3">
                  <p>Platform fee</p>
                  <div className="flex justify-between">
                    <p className="line-through text-gray-500 pr-2">₹ 5.00</p>
                    <p>4</p>
                  </div>
                </div>
                <div className="flex justify-between mb-3">
                  <p>GST and Restaurant Charges</p>
                  <p>₹ {30.22}</p>
                </div>
              </div>
              <div className="flex justify-between border border-t-2 border-t-slate-800 border-x-0 border-b-0 pt-2 px-4 font-bold">
                <p>TO PAY</p>
                <p>{totalPrice + 32 + 4 + 30.22}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
