import React from "react";

const NumberStat = () => {
  return (
    <section className="numbers numbers__two section__space__bottom">
      <div className="container">
        <div className="numbers__area wow fadeInUp">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="content column__space">
                <h5 className="neutral-top">Your success is our success.</h5>
                <h2>Why sell through Revest?</h2>
                <p>
                  Revest enables real estate owners to sell their properties
                  through its platform. Submit your property quickly and easily!
                </p>
                <p>
                  <a href="contact-us.html">Let us know about your property</a>
                </p>
                <a href="login.html" className="button button--effect">
                  Submit Your Property
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row d-flex align-items-start align-items-lg-center">
                <div className="col-sm-6">
                  <div className="numbers__single shadow__effect">
                    <img
                      src="assets/images/icons/attractive.png"
                      alt="Attractive"
                    />
                    <h5>Attractive conditions</h5>
                    <p className="neutral-bottom">
                      With us you sell your property without paying a brokerage
                      commission.
                    </p>
                  </div>
                  <div className="numbers__single shadow__effect">
                    <img src="assets/images/icons/fast.png" alt="Fast" />
                    <h5>Fast processing</h5>
                    <p className="neutral-bottom">
                      Receive an initial offer and a property assessment within
                      48 hours.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="numbers__single alt shadow__effect">
                    <img
                      src="assets/images/icons/innovation.png"
                      alt="Innovation"
                    />
                    <h5>Innovation</h5>
                    <p className="neutral-bottom">
                      Sell your property online through an innovative business
                      model.
                    </p>
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

export default NumberStat;
