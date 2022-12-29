import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="wrapper bg__img">
      <section className="registration">
        <div className="container">
          <div className="registration__area">
            <h4 className="neutral-top">Registration</h4>
            <p>
              Already Registered? <Link to="/login">Login</Link>
            </p>
            <form action="#" method="post" name="registration__form">
              <div className="regi__type">
                <label htmlFor="typeSelect">You are?</label>
                <select className="nice-select type__select" id="typeSelect">
                  <option value="particular">Particular</option>
                  <option value="individual">Individual</option>
                </select>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="input input--secondary">
                    <label htmlFor="firstName">First Name*</label>
                    <input
                      type="text"
                      name="first__name"
                      id="firstName"
                      placeholder="First Name"
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input input--secondary">
                    <label htmlFor="lastName">Last Name*</label>
                    <input
                      type="text"
                      name="last__name"
                      id="lastName"
                      placeholder="Last Name"
                      required="required"
                    />
                  </div>
                </div>
              </div>
              <div className="input input--secondary">
                <label htmlFor="registrationMail">Email*</label>
                <input
                  type="email"
                  name="registration__email"
                  id="registrationMail"
                  placeholder="Enter your email"
                  required="required"
                />
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="input input--secondary">
                    <label htmlFor="regiPass">Password*</label>
                    <input
                      type="password"
                      name="regi__pass"
                      id="regiPass"
                      placeholder="Password"
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input input--secondary">
                    <label htmlFor="passCon">Password Confirmation*</label>
                    <input
                      type="password"
                      name="pass__con"
                      id="passCon"
                      placeholder="Password Confirm"
                      required="required"
                    />
                  </div>
                </div>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    id="condtion"
                    name="accept__condition"
                    defaultValue="agree"
                  />
                  <span className="checkmark" />I have read and I agree to the
                  {"{"}" "{"}"}
                  <Link to="/key-risks">Privacy Policy</Link>
                </label>
              </div>
              <div className="input__button">
                <button type="submit" className="button button--effect">
                  Create My Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
