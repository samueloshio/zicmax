import React from "react";

const HeroList = () => {
  return (
    <section className="hero hero--two hero--three hero__list clear__top pos__rel over__hi bg__img">
      <div className="container">
        <div className="hero__area">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero__content">
                <h5 className="neutral-top">
                  List Your Property and sell instantly
                </h5>
                <h1>Sell your property, Online &amp; hassle-free</h1>
                <p className="primary neutral-bottom">
                  Receiving rent from a commercial property and now want to sell
                  it instantly? List your property and convert the lakhs of
                  annual rent you are receiving into Crores by selling to 5000+
                  real estate investors on Revest.
                </p>
                <div className="hero__cta__group">
                  <a
                    href="registration.html"
                    className="button button--secondary button--effect"
                  >
                    List Your Property
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroList;
