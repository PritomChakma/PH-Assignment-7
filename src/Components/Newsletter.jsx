import bgImg from "../../src/assets/bg-shadow.png";
const Newsletter = () => {
  return (
    <div className="absolute z-10  ">
      <div className=" p-5 w-9/12 mx-auto flex items-center justify-center  backdrop-blur-md border-2 rounded-xl">
        <section>
          <div className="hero rounded-xl">
            <img className="bg-white" src={bgImg} alt="" srcSet="" />

            <div className=" text-neutral-content text-center space-y-5">
              <div>
                <p className="mb-5 text-3xl font-bold text-black">
                  Subscribe to our Newsletter
                </p>
                <p className="text-gray-800">
                  Get Letest Update and news in your inbox
                </p>
                <div className="mt-5">
                  <div>
                    <form className="flex justify-center">
                      <fieldset className="form-control w-80">
                        <label className="label">
                          <span className="label-text text-[#FFFFFF99]">
                            Enter your email address
                          </span>
                        </label>
                        <div className="join">
                          <input
                            type="text"
                            placeholder="Enter your email"
                            className="input input-bordered join-item text-black "
                          />
                          <button className="btn bg-orange-400 join-item text-bold">
                            Subscribe
                          </button>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Newsletter;
