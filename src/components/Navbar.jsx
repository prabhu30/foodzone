import { useState } from "react";
import { NAVBAR_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const loginLogoutBtn = document.querySelector('.login-logout-btn');

const Navbar = function () {

    const onlineStatus = useOnlineStatus();

    const [btnText, setBtnText] = useState("Sign In");

    function updateText() {
        if (btnText === "Sign In") {
            setBtnText("Sign Out");
            // WARNING - This classList isn't working - to be understood why
            // loginLogoutBtn.classList.add('logout-btn');
        } else {
            setBtnText("Sign In");
            // loginLogoutBtn.classList.remove('logout-btn');
        }
    }

    return (
        <div className='navbar flex justify-between items-center h-16 py-3 px-4 bg-cyan-200 shadow-lg'>
            <div className='logo-container flex items-center w-2/4'>
                <img className='logo w-14 h-10 rounded mr-2 bg-transparent' src={NAVBAR_LOGO_URL} alt="Website Logo" />
                <p className="font-bold italic">FoodZone</p>
            </div>
            <div className='nav-links w-2/4'>
                <ul className="flex justify-around">
                    <li className="online-status py-1">
                        {
                            onlineStatus == true ? <span className="text-green-700 pr-2">Online</span> : <span className="text-red-500 pr-2">Offline</span>
                        }
                        {
                            // <i class="fa-solid fa-wifi" style="color: #56ae94;"></i>
                            onlineStatus == true ?
                                <i className="fa-solid fa-wifi text-green-500"></i> :
                                <i className="fa-solid fa-wifi text-red-500"></i>
                        }

                    </li>
                    <li className="py-1"><Link to="/">Home</Link></li>
                    <li className="py-1"><Link to="/grocery">Grocery</Link></li>
                    <li className="py-1"><Link to="/about">About</Link></li>
                    <li className="py-1"><Link to="/cart">Cart</Link></li>
                    <button className="login-logout-btn uppercase bg-neutral-900 px-4 py-1 rounded-full text-white" onClick={() => updateText()}>{btnText}</button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;