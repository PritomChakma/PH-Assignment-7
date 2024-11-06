import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "../../src/assets/banner-main.png";
import img1 from "../../src/assets/bg-shadow.png";
const Banner = ({ addMoney, notify }) => {
  return (
    <section>
      <div className="hero min-h-screen bg-black mt-20">
        <img className="" src={img} alt="" srcSet="" />

        <div className=" text-neutral-content text-center space-y-5 mb-20">
          <div className="flex text-center justify-center  ">
            <img className="" src={img1} alt="" srcSet="" />
          </div>
          <div className="mb-20">
            <p className="mb-5 text-3xl font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </p>
            <p>Beyond Boundaries Beyond Limits</p>
            <div className="mt-5">
              <button
                onClick={() => {
                  addMoney(50000);
                  notify();
                }}
                className="btn bg-[#E7FE29] text-black"
              >
                Claim Free Credit
              </button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
