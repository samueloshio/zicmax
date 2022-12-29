import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero hero--two hero--three clear__top pos__rel over__hi bg__img">
      <div className="container">
        <div className="hero__area">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero__content">
                <h5 className="neutral-top">
                  Smart &amp; Secure Real Estate Investment Platform
                </h5>
                <h1>Invest in the future of real estate</h1>
                <p className="primary neutral-bottom">
                  Start earning daily rental income and capital growth with our
                  property-backed investments
                </p>
                <div className="hero__cta__group">
                  <Link
                    href="business-loan.html"
                    className="button button--secondary button--effect"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
