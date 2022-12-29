import React from "react";
import { Link } from "react-router-dom";

const PropertyGrid = () => {
  return (
    <section className="properties__filter section__space__bottom">
      <div className="container wow fadeInUp">
        <div className="properties__filter__wrapper">
          <h6>
            Showing <span>505</span> properties
          </h6>
          <div className="grid__wrapper">
            <select className="grid__select">
              <option data-display="Sort By">Sort By</option>
              <option value="grid">Date</option>
              <option value="list">Price</option>
            </select>
            <Link
              to="/javascript:void(0)"
              className="grid__btn grid__view grid__btn__active"
            >
              <i className="fa-solid fa-grip" />
            </Link>
            <Link to="/javascript:void(0)" className="grid__btn grid__list">
              <i className="fa-solid fa-bars" />
            </Link>
          </div>
        </div>
        <div className="row property__grid__area__wrapper">
          <div className="col-xl-4 col-md-6 property__grid__area__wrapper__inner">
            <div className="property__list__wrapper property__grid">
              <div className="row d-flex align-items-center">
                <div className="property__grid__area__wrapper__inner__two">
                  <div className="property__item__image column__space--secondary">
                    <div className="img__effect">
                      <Link to="property-details.html">
                        <img
                          src="assets/images/property/los.png"
                          alt="Los Angeles"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="property__grid__area__wrapper__inner__three">
                  <div className="property__item__content">
                    <div className="item__head">
                      <div className="item__head__left">
                        <h4>Los Angeles</h4>
                        <p>
                          <i className="fa-solid fa-location-dot" /> 8706
                          Herrick Ave, Los Angeles
                        </p>
                      </div>
                      <div className="item__head__right">
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
                      </div>
                    </div>
                    <div className="progress__type progress__type--two">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="project__info">
                        <p className="project__has">
                          <span className="project__has__investors">
                            159 Investors
                          </span>
                          {"{"}" "{"}"}|{"{"}" "{"}"}
                          <span className="project__has__investors__amount">
                            <i className="fa-solid fa-dollar-sign" /> 1,94,196
                          </span>
                          {"{"}" "{"}"}
                          <span className="project__has__investors__percent">
                            (64.73%)
                          </span>
                        </p>
                        <p className="project__goal">
                          <i className="fa-solid fa-dollar-sign" /> 3,00,000
                          Goal
                        </p>
                      </div>
                    </div>
                    <div className="item__info">
                      <div className="item__info__single">
                        <p>Annual Return</p>
                        <h6>7.5% + 2%</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Maximum Term</p>
                        <h6>36 Months</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Property Type</p>
                        <h6>Commercial</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Distribution</p>
                        <h6>Monthly</h6>
                      </div>
                    </div>
                    <div className="item__footer">
                      <div className="item__security">
                        <div className="icon__box">
                          <img src="assets/images/home.png" alt="Security" />
                        </div>
                        <div className="item__security__content">
                          <p className="secondary">Security</p>
                          <h6>1st-Rank Mortgage</h6>
                        </div>
                      </div>
                      <div className="item__cta__group">
                        <a
                          href="registration.html"
                          className="button button--effect"
                        >
                          Invest Now
                        </a>
                        <a
                          href="property-details.html"
                          className="button button--secondary button--effect"
                        >
                          Details
                        </a>
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
                        <a
                          href="property-details.html"
                          className="button button--effect"
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 property__grid__area__wrapper__inner">
            <div className="property__list__wrapper property__grid">
              <div className="row d-flex align-items-center">
                <div className="property__grid__area__wrapper__inner__two">
                  <div className="property__item__image column__space--secondary">
                    <div className="img__effect">
                      <Link to="property-details.html">
                        <img
                          src="assets/images/property/lily.png"
                          alt="Los Angeles"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="property__grid__area__wrapper__inner__three">
                  <div className="property__item__content">
                    <div className="item__head">
                      <div className="item__head__left">
                        <h4>San Francisco, CA</h4>
                        <p>
                          <i className="fa-solid fa-location-dot" /> 3335 21 St,
                          San Francisco
                        </p>
                      </div>
                      <div className="item__head__right">
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
                      </div>
                    </div>
                    <div className="progress__type progress__type--two">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="project__info">
                        <p className="project__has">
                          <span className="project__has__investors">
                            159 Investors
                          </span>
                          {"{"}" "{"}"}|{"{"}" "{"}"}
                          <span className="project__has__investors__amount">
                            <i className="fa-solid fa-dollar-sign" /> 1,94,196
                          </span>
                          {"{"}" "{"}"}
                          <span className="project__has__investors__percent">
                            (64.73%)
                          </span>
                        </p>
                        <p className="project__goal">
                          <i className="fa-solid fa-dollar-sign" /> 3,00,000
                          Goal
                        </p>
                      </div>
                    </div>
                    <div className="item__info">
                      <div className="item__info__single">
                        <p>Annual Return</p>
                        <h6>7.5% + 2%</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Maximum Term</p>
                        <h6>36 Months</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Property Type</p>
                        <h6>Commercial</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Distribution</p>
                        <h6>Monthly</h6>
                      </div>
                    </div>
                    <div className="item__footer">
                      <div className="item__security">
                        <div className="icon__box">
                          <img src="assets/images/home.png" alt="Security" />
                        </div>
                        <div className="item__security__content">
                          <p className="secondary">Security</p>
                          <h6>1st-Rank Mortgage</h6>
                        </div>
                      </div>
                      <div className="item__cta__group">
                        <a
                          href="registration.html"
                          className="button button--effect"
                        >
                          Invest Now
                        </a>
                        <a
                          href="property-details.html"
                          className="button button--secondary button--effect"
                        >
                          Details
                        </a>
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
                        <a
                          href="property-details.html"
                          className="button button--effect"
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 property__grid__area__wrapper__inner">
            <div className="property__list__wrapper property__grid">
              <div className="row d-flex align-items-center">
                <div className="property__grid__area__wrapper__inner__two">
                  <div className="property__item__image column__space--secondary">
                    <div className="img__effect">
                      <Link to="property-details.html">
                        <img
                          src="assets/images/property/san.png"
                          alt="Los Angeles"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="property__grid__area__wrapper__inner__three">
                  <div className="property__item__content">
                    <div className="item__head">
                      <div className="item__head__left">
                        <h4>San Diego</h4>
                        <p>
                          <i className="fa-solid fa-location-dot" /> 356 La
                          Jolla, San Diego
                        </p>
                      </div>
                      <div className="item__head__right">
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
                      </div>
                    </div>
                    <div className="progress__type progress__type--two">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="project__info">
                        <p className="project__has">
                          <span className="project__has__investors">
                            159 Investors
                          </span>
                          {"{"}" "{"}"}|{"{"}" "{"}"}
                          <span className="project__has__investors__amount">
                            <i className="fa-solid fa-dollar-sign" /> 1,94,196
                          </span>
                          {"{"}" "{"}"}
                          <span className="project__has__investors__percent">
                            (64.73%)
                          </span>
                        </p>
                        <p className="project__goal">
                          <i className="fa-solid fa-dollar-sign" /> 3,00,000
                          Goal
                        </p>
                      </div>
                    </div>
                    <div className="item__info">
                      <div className="item__info__single">
                        <p>Annual Return</p>
                        <h6>7.5% + 2%</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Maximum Term</p>
                        <h6>36 Months</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Property Type</p>
                        <h6>Commercial</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Distribution</p>
                        <h6>Monthly</h6>
                      </div>
                    </div>
                    <div className="item__footer">
                      <div className="item__security">
                        <div className="icon__box">
                          <img src="assets/images/home.png" alt="Security" />
                        </div>
                        <div className="item__security__content">
                          <p className="secondary">Security</p>
                          <h6>1st-Rank Mortgage</h6>
                        </div>
                      </div>
                      <div className="item__cta__group">
                        <a
                          href="registration.html"
                          className="button button--effect"
                        >
                          Invest Now
                        </a>
                        <a
                          href="property-details.html"
                          className="button button--secondary button--effect"
                        >
                          Details
                        </a>
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
                        <a
                          href="property-details.html"
                          className="button button--effect"
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row property__grid__area__wrapper mt-30">
          <div className="col-xl-4 col-md-6 property__grid__area__wrapper__inner">
            <div className="property__list__wrapper property__grid">
              <div className="row d-flex align-items-center">
                <div className="property__grid__area__wrapper__inner__two">
                  <div className="property__item__image column__space--secondary">
                    <div className="img__effect">
                      <Link to="property-details.html">
                        <img
                          src="assets/images/property/los.png"
                          alt="Los Angeles"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="property__grid__area__wrapper__inner__three">
                  <div className="property__item__content">
                    <div className="item__head">
                      <div className="item__head__left">
                        <h4>Los Angeles</h4>
                        <p>
                          <i className="fa-solid fa-location-dot" /> 8706
                          Herrick Ave, Los Angeles
                        </p>
                      </div>
                      <div className="item__head__right">
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
                      </div>
                    </div>
                    <div className="progress__type progress__type--two">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="project__info">
                        <p className="project__has">
                          <span className="project__has__investors">
                            159 Investors
                          </span>
                          {"{"}" "{"}"}|{"{"}" "{"}"}
                          <span className="project__has__investors__amount">
                            <i className="fa-solid fa-dollar-sign" /> 1,94,196
                          </span>
                          {"{"}" "{"}"}
                          <span className="project__has__investors__percent">
                            (64.73%)
                          </span>
                        </p>
                        <p className="project__goal">
                          <i className="fa-solid fa-dollar-sign" /> 3,00,000
                          Goal
                        </p>
                      </div>
                    </div>
                    <div className="item__info">
                      <div className="item__info__single">
                        <p>Annual Return</p>
                        <h6>7.5% + 2%</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Maximum Term</p>
                        <h6>36 Months</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Property Type</p>
                        <h6>Commercial</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Distribution</p>
                        <h6>Monthly</h6>
                      </div>
                    </div>
                    <div className="item__footer">
                      <div className="item__security">
                        <div className="icon__box">
                          <img src="assets/images/home.png" alt="Security" />
                        </div>
                        <div className="item__security__content">
                          <p className="secondary">Security</p>
                          <h6>1st-Rank Mortgage</h6>
                        </div>
                      </div>
                      <div className="item__cta__group">
                        <a
                          href="registration.html"
                          className="button button--effect"
                        >
                          Invest Now
                        </a>
                        <a
                          href="property-details.html"
                          className="button button--secondary button--effect"
                        >
                          Details
                        </a>
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
                        <a
                          href="property-details.html"
                          className="button button--effect"
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 property__grid__area__wrapper__inner">
            <div className="property__list__wrapper property__grid">
              <div className="row d-flex align-items-center">
                <div className="property__grid__area__wrapper__inner__two">
                  <div className="property__item__image column__space--secondary">
                    <div className="img__effect">
                      <Link to="property-details.html">
                        <img
                          src="assets/images/property/lily.png"
                          alt="Los Angeles"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="property__grid__area__wrapper__inner__three">
                  <div className="property__item__content">
                    <div className="item__head">
                      <div className="item__head__left">
                        <h4>The Lily</h4>
                        <p>
                          <i className="fa-solid fa-location-dot" /> Colorado
                          Springs, CO
                        </p>
                      </div>
                      <div className="item__head__right">
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
                      </div>
                    </div>
                    <div className="progress__type progress__type--two">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="project__info">
                        <p className="project__has">
                          <span className="project__has__investors">
                            159 Investors
                          </span>
                          {"{"}" "{"}"}|{"{"}" "{"}"}
                          <span className="project__has__investors__amount">
                            <i className="fa-solid fa-dollar-sign" /> 1,94,196
                          </span>
                          {"{"}" "{"}"}
                          <span className="project__has__investors__percent">
                            (64.73%)
                          </span>
                        </p>
                        <p className="project__goal">
                          <i className="fa-solid fa-dollar-sign" /> 3,00,000
                          Goal
                        </p>
                      </div>
                    </div>
                    <div className="item__info">
                      <div className="item__info__single">
                        <p>Annual Return</p>
                        <h6>7.5% + 2%</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Maximum Term</p>
                        <h6>36 Months</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Property Type</p>
                        <h6>Commercial</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Distribution</p>
                        <h6>Monthly</h6>
                      </div>
                    </div>
                    <div className="item__footer">
                      <div className="item__security">
                        <div className="icon__box">
                          <img src="assets/images/home.png" alt="Security" />
                        </div>
                        <div className="item__security__content">
                          <p className="secondary">Security</p>
                          <h6>1st-Rank Mortgage</h6>
                        </div>
                      </div>
                      <div className="item__cta__group">
                        <a
                          href="registration.html"
                          className="button button--effect"
                        >
                          Invest Now
                        </a>
                        <a
                          href="property-details.html"
                          className="button button--secondary button--effect"
                        >
                          Details
                        </a>
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
                        <a
                          href="property-details.html"
                          className="button button--effect"
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 property__grid__area__wrapper__inner">
            <div className="property__list__wrapper property__grid">
              <div className="row d-flex align-items-center">
                <div className="property__grid__area__wrapper__inner__two">
                  <div className="property__item__image column__space--secondary">
                    <div className="img__effect">
                      <Link to="property-details.html">
                        <img
                          src="assets/images/property/weldon.png"
                          alt="Los Angeles"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="property__grid__area__wrapper__inner__three">
                  <div className="property__item__content">
                    <div className="item__head">
                      <div className="item__head__left">
                        <h4>The Weldon</h4>
                        <p>
                          <i className="fa-solid fa-location-dot" /> Gastonia,
                          NC
                        </p>
                      </div>
                      <div className="item__head__right">
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
                      </div>
                    </div>
                    <div className="progress__type progress__type--two">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="project__info">
                        <p className="project__has">
                          <span className="project__has__investors">
                            159 Investors
                          </span>
                          {"{"}" "{"}"}|{"{"}" "{"}"}
                          <span className="project__has__investors__amount">
                            <i className="fa-solid fa-dollar-sign" /> 1,94,196
                          </span>
                          {"{"}" "{"}"}
                          <span className="project__has__investors__percent">
                            (64.73%)
                          </span>
                        </p>
                        <p className="project__goal">
                          <i className="fa-solid fa-dollar-sign" /> 3,00,000
                          Goal
                        </p>
                      </div>
                    </div>
                    <div className="item__info">
                      <div className="item__info__single">
                        <p>Annual Return</p>
                        <h6>7.5% + 2%</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Maximum Term</p>
                        <h6>36 Months</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Property Type</p>
                        <h6>Commercial</h6>
                      </div>
                      <div className="item__info__single">
                        <p>Distribution</p>
                        <h6>Monthly</h6>
                      </div>
                    </div>
                    <div className="item__footer">
                      <div className="item__security">
                        <div className="icon__box">
                          <img src="assets/images/home.png" alt="Security" />
                        </div>
                        <div className="item__security__content">
                          <p className="secondary">Security</p>
                          <h6>1st-Rank Mortgage</h6>
                        </div>
                      </div>
                      <div className="item__cta__group">
                        <a
                          href="registration.html"
                          className="button button--effect"
                        >
                          Invest Now
                        </a>
                        <a
                          href="property-details.html"
                          className="button button--secondary button--effect"
                        >
                          Details
                        </a>
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
                        <a
                          href="property-details.html"
                          className="button button--effect"
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta__btn">
          <Link to="property-details.html" className="button button--effect">
            Load More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
