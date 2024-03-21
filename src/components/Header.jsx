import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Header = function () {
    return (
        <>
            <div className='header h-80 flex justify-center items-center text-center bg-gradient-to-r from-blue-100 to-blue-300'>
                <div className='header-text flex flex-col gap-6 items-center'>
                    <div>
                        <p className='text-2xl font-bold text-orange-700 mb-3'>Welcome to the FoodZone</p>
                        <p className='text-lg text-purple-800 italic'>One-Stop Hub to find best restaurants with wide range of cuisines</p>
                    </div>
                    <a href='#search' className='w-40 button uppercase border border-slate-700 px-2 py-1 hover:bg-green-800 hover:text-white hover:border-green-800'><span className='pr-1'>Explore</span> Food</a>
                </div>
            </div>
        </>
    )
}

export default Header;