import React from "react";

const LandingFunFact = () => {
  return (
    <div class="funfact" id="fun_fact">
      <div class="container my-3 py-3 my-lg-5 py-lg-5">
        <div class="row row-cols-1 row-cols-lg-3 g-4">
          <div class="col">
            <div class="single-fun">
              <img src="https://pixner.net/dooplo3/main-v1/assets/images/funfact/icon1.png" alt="" />
              <div class="count-area">
                <div class="count">93K</div>
              </div>
              <p>Players</p>
            </div>
          </div>
          <div class="col">
            <div class="single-fun">
              <img src="https://pixner.net/dooplo3/main-v1/assets/images/funfact/icon1.png" alt="" />
              <div class="count-area">
                <div class="count">99+</div>
              </div>
              <p>Games</p>
            </div>
          </div>
          <div class="col">
            <div class="single-fun">
              <img src="https://pixner.net/dooplo3/main-v1/assets/images/funfact/icon3.png" alt="" />
              <div class="count-area">
                <div class="count">70+</div>
              </div>
              <p>Winners</p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default LandingFunFact;
