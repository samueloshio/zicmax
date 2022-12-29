import React from "react";

const Market = () => {
  return (
    <section className="market section__space over__hi">
      <div className="container">
        <div className="market__area">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-xl-5">
              <div className="market__thumb thumb__rtl column__space">
                <img
                  src="assets/images/market-illustration.png"
                  alt="Explore the Market"
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 offset-xl-1">
              <div className="content">
                <h5 className="neutral-top">
                  Real exposure to the real estate market
                </h5>
                <h2>You Invest. Zicmax Does the Rest</h2>
                <p>
                  Transparent Real Estate Investing Through Zicmax. Join us and
                  experience a smarter, better way to invest in real estate
                </p>
                <a href="properties.html" className="button button--effect">
                  Start Exploring
                </a>
                <img src="assets/images/arrow.png" alt="Go to" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
