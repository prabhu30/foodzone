import Header from "./Header";
import RestaurantsContainer from "./RestaurantsContainer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Content = function () {
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <div className="about-page text-center mt-12">
        <h1 className="text-red-500">
          Oops!! Looks like you&apos;re offline, Please check your internet
          connection!
        </h1>
      </div>
    );
  }

  return (
    <>
      <Header />
      <RestaurantsContainer />
    </>
  );
};

export default Content;
