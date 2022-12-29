import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="wrapper bg__img">
      {/* ==== Login section start ==== */}
      <section className="registration">
        <div className="container">
          <div className="registration__area">
            <h4 className="neutral-top">Log in</h4>
            <p>
              Don't have an account?{" "}
              <Link to="/registration">Register here.</Link>
            </p>
            <form
              action="#"
              method="post"
              name="login__form"
              className="form__login"
            >
              <div className="input input--secondary">
                <label htmlFor="loginMail">Email*</label>
                <input
                  type="email"
                  name="login__email"
                  id="loginMail"
                  placeholder="Enter your email"
                  required="required"
                />
              </div>
              <div className="input input--secondary">
                <label htmlFor="loginPass">Password*</label>
                <input
                  type="password"
                  name="login__pass"
                  id="loginPass"
                  placeholder="Password"
                  required="required"
                />
              </div>
              <div className="checkbox login__checkbox">
                <label>
                  <input
                    type="checkbox"
                    id="remeberPass"
                    name="remeber__pass"
                    defaultValue="remember"
                  />
                  <span className="checkmark" />
                  Remember Me
                </label>
                <Link to="/javascript:void(0)">Forget Password</Link>
              </div>
              <div className="input__button">
                <button type="submit" className="button button--effect">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* ==== #registration section end ==== */}
      {/* Scroll To Top */}
      <Link to="/javascript:void(0)" className="scrollToTop">
        <i className="fa-solid fa-angles-up" />
      </Link>
    </div>
  );
};

export default Login;
