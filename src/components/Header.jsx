const Header = function () {
  return (
    <div>
      <div className="header relative h-80 flex justify-center items-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/food-bg.jpg')",
            backgroundSize: "100%",
            filter: "blur(3px)",
          }}
        ></div>
        <div className="relative z-10 header-text flex flex-col gap-6 items-center">
          <div>
            <p className="text-2xl font-bold text-orange-500 mb-3">
              Welcome to the FoodZone
            </p>
            <p className="text-lg text-purple-800 italic">
              One-Stop Hub to find best restaurants with wide range of cuisines
            </p>
          </div>
          <a
            href="#search"
            className="w-40 button uppercase border border-slate-700 px-2 py-1 hover:bg-green-800 hover:text-white hover:border-green-800"
          >
            <span className="pr-1">Explore</span> Food
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
