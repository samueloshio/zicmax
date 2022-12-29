import React from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <section className="properties__grid properties__grid--two section__space__top">
      <div className="container">
        <div className="properties__grid__area wow fadeInUp">
          <div className="title__with__cta">
            <div className="row d-flex align-items-center">
              <div className="col-lg-8">
                <h2>Featured Properties</h2>
              </div>
              <div className="col-lg-4">
                <div className="text-start text-lg-end">
                  <Link
                    to="/properties"
                    className="button button--secondary button--effect"
                  >
                    Browse All Properties
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="property__grid__wrapper">
            <div className="row">
              <div className="col-lg-6 col-xl-4">
                <div className="property__grid__single column__space--secondary">
                  <div className="img__effect">
                    <Link to="property-details">
                      <img
                        src="assets/images/property/grid-one.jpg"
                        alt="Property"
                      />
                    </Link>
                  </div>
                  <div className="property__grid__single__inner">
                    <h4>Los Angeles</h4>
                    <p className="sub__info">
                      <i className="fa-solid fa-location-dot" /> 8706 Herrick
                      Ave, Los Angeles
                    </p>
                    <div className="progress__type">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="project__has">
                        <span className="project__has__investors">
                          159 Investors{" "}
                        </span>
                        |
                        <span className="project__has__investors__amount">
                          {" "}
                          ₦ 1,94,196
                        </span>
                        <span className="project__has__investors__percent">
                          {" "}
                          (64.73%)
                        </span>
                      </p>
                    </div>
                    <div className="item__info">
                      <div className="item__info__single">
                        <p>Annual Return</p>
                        <h6>7.5% + 2%</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Property Type</p>
                        <h6>Commercial</h6>
                      </div>
                    </div>
                    <div className="invest__cta__wrapper">
                      <div className="countdown__wrapper">
                        <p className="secondary">
                          <i className="fa-solid fa-clock" /> Left to invest
                        </p>
                        <div className="countdown">
                          <h5>
                            <span className="days">00</span>
                            <span className="ref">d</span>
                            <span className="seperator">:</span>
                          </h5>
                          <h5>
                            <span className="hours"> 00</span>
                            <span className="ref">h</span>
                            <span className="seperator">:</span>
                          </h5>
                          <h5>
                            <span className="minutes">00</span>
                            <span className="ref">m</span>
                            <span className="seperator" />
                          </h5>
                        </div>
                      </div>
                      <div className="invest__cta">
                        <Link
                          to="property-details"
                          className="button button--effect"
                        >
                          Invest Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="property__grid__single column__space--secondary">
                  <div className="img__effect">
                    <Link to="property-details">
                      <img
                        src="assets/images/property/grid-two.jpg"
                        alt="Property"
                      />
                    </Link>
                  </div>
                  <div className="property__grid__single__inner">
                    <h4>San Francisco, CA</h4>
                    <p className="sub__info">
                      <i className="fa-solid fa-location-dot" /> 3335 21 St, San
                      Francisco
                    </p>
                    <div className="progress__type">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="project__has">
                        <span className="project__has__investors">
                          159 Investors{" "}
                        </span>
                        |
                        <span className="project__has__investors__amount">
                          {" "}
                          ₦ 1,94,196
                        </span>
                        <span className="project__has__investors__percent">
                          {" "}
                          (64.73%)
                        </span>
                      </p>
                    </div>
                    <div className="item__info">
                      <div className="item__info__single">
                        <p>Annual Return</p>
                        <h6>7.5% + 2%</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Property Type</p>
                        <h6>Commercial</h6>
                      </div>
                    </div>
                    <div className="invest__cta__wrapper">
                      <div className="countdown__wrapper">
                        <p className="secondary">
                          <i className="fa-solid fa-clock" /> Left to invest
                        </p>
                        <div className="countdown">
                          <h5>
                            <span className="days">00</span>
                            <span className="ref">d</span>
                            <span className="seperator">:</span>
                          </h5>
                          <h5>
                            <span className="hours"> 00</span>
                            <span className="ref">h</span>
                            <span className="seperator">:</span>
                          </h5>
                          <h5>
                            <span className="minutes">00</span>
                            <span className="ref">m</span>
                            <span className="seperator" />
                          </h5>
                        </div>
                      </div>
                      <div className="invest__cta">
                        <Link
                          to="property-details"
                          className="button button--effect"
                        >
                          Invest Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="property__grid__single">
                  <div className="img__effect">
                    <Link to="property-details">
                      <img
                        src="assets/images/property/grid-three.jpg"
                        alt="Property"
                      />
                    </Link>
                  </div>
                  <div className="property__grid__single__inner">
                    <h4>San Diego</h4>
                    <p className="sub__info">
                      <i className="fa-solid fa-location-dot" /> 356 La Jolla,
                      San Diego
                    </p>
                    <div className="progress__type">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="project__has">
                        <span className="project__has__investors">
                          159 Investors{" "}
                        </span>
                        |
                        <span className="project__has__investors__amount">
                          {" "}
                          ₦ 1,94,196
                        </span>
                        <span className="project__has__investors__percent">
                          {" "}
                          (64.73%)
                        </span>
                      </p>
                    </div>
                    <div className="item__info">
                      <div className="item__info__single">
                        <p>Annual Return</p>
                        <h6>7.5% + 2%</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Property Type</p>
                        <h6>Commercial</h6>
                      </div>
                    </div>
                    <div className="invest__cta__wrapper">
                      <div className="countdown__wrapper">
                        <p className="secondary">
                          <i className="fa-solid fa-clock" /> Left to invest
                        </p>
                        <div className="countdown">
                          <h5>
                            <span className="days">00</span>
                            <span className="ref">d</span>
                            <span className="seperator">:</span>
                          </h5>
                          <h5>
                            <span className="hours"> 00</span>
                            <span className="ref">h</span>
                            <span className="seperator">:</span>
                          </h5>
                          <h5>
                            <span className="minutes">00</span>
                            <span className="ref">m</span>
                            <span className="seperator" />
                          </h5>
                        </div>
                      </div>
                      <div className="invest__cta">
                        <Link
                          to="property-details"
                          className="button button--effect"
                        >
                          Invest Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
