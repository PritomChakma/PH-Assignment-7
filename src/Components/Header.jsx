import img from "../../src/assets/logo.png";
const Header = ({ balance }) => {
  // add money in account

  return (
    <div className="sticky top-0  backdrop-blur-md pb-3 shadow-lg z-10">
      <div className="navbar bg-base-100 md:py-3 nav-bg-color backdrop-blur-sm">
        <div className="navbar-start">
          <div className="">
            <img src={img} alt="" srcSet="" />
          </div>
        </div>
        <div className="navbar-center hidden md:inline">
          <div className="flex md:gap-5 gap-2 font-semibold ">
            <p>Home</p>
            <p>Fixture</p>
            <p>Teams</p>
            <p>Schedules</p>
          </div>
        </div>

        <div className="navbar-end">
          <button className="btn px-5">
            {balance} coin
            <i className="fa-brands fa-bitcoin text-xl text-orange-400"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
