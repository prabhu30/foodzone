import Search from './Search';
import Header from './Header';
import RestaurantsContainer from './RestaurantsContainer';
import useOnlineStatus from '../utils/useOnlineStatus';

const Content = function () {

    const onlineStatus = useOnlineStatus();

    console.log(onlineStatus);

    
    if (!onlineStatus) {
        return (
            <div className="about-page">
                <h1>
                    Oops!! Looks like you're offline, Please check your internet connection!
                </h1>
            </div>
        )
    }

    return (
        <>
            {/* <Search /> */}
            <Header />
            <RestaurantsContainer />
        </>
    )
}

export default Content;