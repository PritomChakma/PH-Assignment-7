const Footer = () => {
  return (
    <div className="relative w-full">
      <footer className="mx-h-32[549px]  bg-[#06091A] text-white p-10 mt-44">
        <div className="flex justify-center mb-16 mt-64 ">
          <img src="../../public/assets/logo-footer.png" alt="" srcSet="" />
        </div>
        <div className="md:flex md: justify-between space-y-5 md:space-y-1">
          <div className="">
            <nav>
              <h6 className="footer-title">About us</h6>
              <p className="w-48 text-[#FFFFFF99]">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </nav>
          </div>

          <div className="md:text-center">
            <nav>
              <h6 className="footer-title ">Quick Links</h6>
              <p className="link link-hover text-[#FFFFFF99]">Home</p>
              <p className="link link-hover text-[#FFFFFF99]">Fixture</p>
              <p className="link link-hover text-[#FFFFFF99]">Teams</p>
              <p className="link link-hover text-[#FFFFFF99]">Schedules</p>
            </nav>
          </div>

          <div>
            <form className="justify-center">
              <h6 className="footer-title">Subscribe</h6>
              <fieldset className="form-control w-80">
                <label className="label">
                  <span className="label-text text-[#FFFFFF99]">
                    Enter your email address
                  </span>
                </label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="pritom@gmail.com"
                    className="input input-bordered join-item text-black "
                  />
                  <button className="btn btn-primary join-item">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>

        <div className="text-center mt-20 border-t pt-5">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
