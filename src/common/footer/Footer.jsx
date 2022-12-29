import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer pos__rel over__hi">
      <div className="container">
        <div className="footer__newsletter">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="footer__newsletter__content column__space">
                <h3>Subscribe for updates</h3>
                <p>
                  Stay on top of the latest blog posts, news and announcements
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-5 offset-xxl-1">
              <div className="footer__newsletter__form">
                <form action="#" method="post">
                  <div className="footer__newsletter__input__group">
                    <div className="input">
                      <input
                        type="email"
                        name="news__letter"
                        id="newsLetterMail"
                        placeholder="Enter Your Email"
                        required="required"
                      />
                    </div>
                    <button type="submit" className="button button--effect">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__area section__space">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-4">
              <div className="footer__intro">
                <Link to="/">
                  <img
                    src="assets/images/logo-light.png"
                    alt="Zicmax"
                    className="logo"
                  />
                </Link>
                <p>
                  Zicmax is a platform offering anyone the ability to invest and
                  potentially earn money from property at the click of a button
                </p>
                <div className="social">
                  <Link to="/javascript:void(0)">
                    <i className="fa-brands fa-facebook-f" />
                  </Link>
                  <Link to="/javascript:void(0)">
                    <i className="fa-brands fa-twitter" />
                  </Link>
                  <Link to="/javascript:void(0)">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                  <Link to="/javascript:void(0)">
                    <i className="fa-brands fa-linkedin-in" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer__links footer__links--alt">
                <h5>Company</h5>
                <ul>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/career">Careers</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  <li className="neutral-bottom">
                    <Link to="affiliate-program">Affiliate</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer__links footer__links--alt">
                <h5>Invest</h5>
                <ul>
                  <li>
                    <Link to="/properties">Browse Properties</Link>
                  </li>
                  <li>
                    <Link to="/how-it-works">How it works</Link>
                  </li>
                  <li>
                    <Link to="/loan-application">Loan Application </Link>
                  </li>
                  <li>
                    <Link to="/property-alert">Property Alerts</Link>
                  </li>
                  <li className="neutral-bottom">
                    <Link to="/support">FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer__links footer__links--alt--two">
                <h5>Insights</h5>
                <ul>
                  <li>
                    <Link to="/support">Help Center</Link>
                  </li>
                  <li>
                    <Link to="/list-your-property">List Your Property</Link>
                  </li>
                  <li className="neutral-bottom">
                    <Link to="/loyality-program">Loyality program </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer__links">
                <h5>Legal</h5>
                <ul>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-conditions">Term &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link to="/cookie-policy">Cookie Policy</Link>
                  </li>
                  <li className="neutral-bottom">
                    <Link to="/key-risks">Key Risks</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__credit">
          <div className="row d-flex align-items-center">
            <div className="col-sm-9 order-1 order-sm-0">
              <div className="footer__copyright">
                <p>
                  Copyright ©{" "}
                  <Link to="https://themeforest.net/user/pixelaxis">
                    Zicmax International
                  </Link>{" "}
                  | Real Estate Investment Platform
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer__language">
                <select className="language-select">
                  <option value="english">En</option>
                  <option value="australia">Aus</option>
                  <option value="brazil">Bra</option>
                  <option value="argentina">Arg</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__animation">
        <img
          src="assets/images/footer/footer__left__circle.png"
          alt="Circle"
          className="left__circle"
        />
        <img
          src="assets/images/footer/footer__right__circle.png"
          alt="Circle"
          className="right__circle"
        />
        <img
          src="assets/images/footer/footer__home___illustration.png"
          alt="Home"
          className="home__illustration"
        />
      </div>
    </footer>
  );
};

export default Footer;
