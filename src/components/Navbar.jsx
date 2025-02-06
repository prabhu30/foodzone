import { useState, useContext } from "react";
import { NAVBAR_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react";

const Navbar = function () {
  const [btnText, setBtnText] = useState("Sign In");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  const { username, setUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  function updateText() {
    if (btnText === "Sign In") {
      setUser("Prabhu");
      setBtnText("Sign Out");
    } else {
      setUser("Guest");
      setBtnText("Sign In");
    }
  }

  function handleLinkClick() {
    setIsMenuOpen(false);
  }

  return (
    <div className="navbar flex justify-between items-center h-12 px-4 bg-slate-200">
      <div className="logo-container flex items-center w-2/5">
        <img
          className="logo w-12 h-8 rounded mr-2 bg-transparent"
          src={NAVBAR_LOGO_URL}
          alt="Website Logo"
        />
        <Link to="/" className="font-bold italic">
          FoodZone
        </Link>
      </div>
      <div className="nav-links w-3/6 hidden 2xl:flex">
        <ul className="flex justify-around gap-8">
          <li className="online-status py-1">
            {onlineStatus == true ? (
              <span className="text-green-700 pr-2">You&apos;re online</span>
            ) : (
              <span className="text-red-500 pr-2">You&apos;re offline</span>
            )}
            {onlineStatus == true ? (
              <i className="fa-solid fa-wifi text-green-500"></i>
            ) : (
              <i className="fa-solid fa-wifi text-red-500"></i>
            )}
          </li>
          <li className="py-1">
            <Link to="/">Home</Link>
          </li>
          <li className="py-1">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="py-1">
            <Link to="/about">About</Link>
          </li>
          <li className="py-1 text-amber-700">Welcome, {username}!</li>
          <li className="">
            <Link to="/cart">
              <div className="flex justify-center items-center gap-2">
                <i className="fa-solid fa-cart-shopping text-2xl text-slate-700"></i>
                <span className="text-lg">
                  {cartItems.length === 0 ? "" : cartItems.length}
                </span>
              </div>
            </Link>
          </li>
          <button
            className="login-logout-btn uppercase bg-neutral-900 px-4 py-1 rounded-sm text-white"
            onClick={() => updateText()}
          >
            {btnText}
          </button>
        </ul>
      </div>
      <div className="2xl:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute z-10 top-9 left-0 w-full bg-slate-200 shadow-lg 2xl:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li className="online-status py-1">
              {onlineStatus == true ? (
                <span className="text-green-700 pr-2">You&apos;re online</span>
              ) : (
                <span className="text-red-500 pr-2">You&apos;re offline</span>
              )}
              {onlineStatus == true ? (
                <i className="fa-solid fa-wifi text-green-500"></i>
              ) : (
                <i className="fa-solid fa-wifi text-red-500"></i>
              )}
            </li>
            <li className="py-1">
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className="py-1">
              <Link to="/grocery" onClick={handleLinkClick}>
                Grocery
              </Link>
            </li>
            <li className="py-1">
              <Link to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li className="py-1 text-amber-700">Welcome, {username}!</li>
            <li className="">
              <Link to="/cart" onClick={handleLinkClick}>
                <div className="flex justify-center items-center gap-2">
                  <i className="fa-solid fa-cart-shopping text-2xl text-blue-400"></i>
                  <span className="text-lg">
                    {cartItems.length === 0 ? "" : cartItems.length}
                  </span>
                </div>
              </Link>
            </li>
            <button
              className="login-logout-btn uppercase bg-neutral-900 px-4 py-1 rounded-sm text-white"
              onClick={() => {
                updateText();
                handleLinkClick();
              }}
            >
              {btnText}
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
