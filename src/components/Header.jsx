import FoodBgImage from "/food-bg.jpg";

const Header = function () {
  return (
    <div>
      <div className="header relative h-80 flex justify-center items-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${FoodBgImage})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative header-text flex flex-col gap-6 items-center">
          <div>
            <p className="text-3xl font-bold text-white mb-3">
              Welcome to the FoodZone
            </p>
            <p className="text-lg text-blue-200 italic">
              One-Stop Hub to find best restaurants with wide range of cuisines
            </p>
          </div>
          <a
            href="#search"
            className="w-40 button rounded uppercase text-white border border-slate-800 bg-slate-800 px-2 py-2 hover:bg-green-800 hover:border-green-800"
          >
            <span className="pr-1">Explore</span> Food
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
