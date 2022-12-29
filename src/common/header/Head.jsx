import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <header className="header header--secondary">
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="assets/images/logo.png" alt="Logo" className="logo" />
          </Link>
          <div className="navbar__out order-2 order-xl-3">
            <div className="nav__group__btn">
              <Link to={"/login"} className="log d-none d-sm-block">
                Log In
              </Link>
              <Link
                to={"/registration"}
                className="button button--effect d-none d-sm-block"
              >
                Join Now <i className="fa-solid fa-arrow-right-long" />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#primaryNav"
              aria-controls="primaryNav"
              aria-expanded="false"
              aria-label="Toggle Primary Nav"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse order-3 order-xl-2"
            id="primaryNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/properties">
                  Properties
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sell">
                  List your property
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">
                  Faq
                </Link>
              </li>
              <li className="nav-item d-block d-sm-none">
                <Link to="/login" className="nav-link">
                  Log In
                </Link>
              </li>
              <li className="nav-item d-block d-sm-none">
                <Link
                  to="/registration"
                  className="button button--effect button--last"
                >
                  Join Now <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Head;
