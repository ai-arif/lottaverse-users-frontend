import React from "react";

const LandingFeatures = () => {
  return (
    <div className="features" id="features">
      <div className="container my-3 py-3 my-lg-5 py-lg-5">
        <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-4">
          <div className="col">
            <div className="single-feature">
              <div className="icon one">
                <img src="assets/images/feature/icon1.png" alt="" />
              </div>
              <div className="content">
                <h4 className="title">Easy</h4>
                <a href="#" className="link">
                  read more <i class="bi bi-arrow-right-short"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col">
            <div className="single-feature">
              <div className="icon two">
                <img src="assets/images/feature/icon2.png" alt="" />
              </div>
              <div className="content">
                <h4 className="title">Super</h4>
                <a href="#" className="link">
                  read more <i class="bi bi-arrow-right-short"></i>
                </a>
              </div>
            </div>
          </div> */}
          <div className="col">
            <div className="single-feature">
              <div className="icon three">
                <img src="assets/images/feature/icon3.png" alt="" />
              </div>
              <div className="content">
                <h4 className="title">Super-X</h4>
                <a href="#" className="link">
                  read more <i class="bi bi-arrow-right-short"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingFeatures;
