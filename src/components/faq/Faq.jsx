import React from "react";

const Faq = () => {
  return (
    <section className="faq section__space">
      <div className="container">
        <div className="faq__area">
          <div className="section__header">
            <h2 className="neutral-top">Frequently Asked Questions</h2>
          </div>
          <div className="faq__group">
            <div className="accordion" id="accordionExampleQuestions">
              <div className="accordion-item content__space">
                <h5 className="accordion-header" id="headingQuestionsOne">
                  <span className="icon_box">
                    <img
                      src="assets/images/icons/message.png"
                      alt="Questions"
                    />
                  </span>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseQuestionsOne"
                    aria-expanded="true"
                    aria-controls="collapseQuestionsOne"
                  >
                    Who may apply for investment ?
                  </button>
                </h5>
                <div
                  id="collapseQuestionsOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingQuestionsOne"
                  data-bs-parent="#accordionExampleQuestions"
                >
                  <div className="accordion-body">
                    <p>
                      combined with a handful of model sentence structures, to
                      generate Lorem Ipsum which looks reasonable. The generated
                      Lorem Ipsum is therefore always free from repetition,
                      injected humour, or
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item content__space">
                <h5 className="accordion-header" id="headingQuestionsTwo">
                  <span className="icon_box">
                    <img
                      src="assets/images/icons/message.png"
                      alt="Questions"
                    />
                  </span>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseQuestionsTwo"
                    aria-expanded="false"
                    aria-controls="collapseQuestionsTwo"
                  >
                    How long does it take to collect the amount necessary for my
                    project?
                  </button>
                </h5>
                <div
                  id="collapseQuestionsTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingQuestionsTwo"
                  data-bs-parent="#accordionExampleQuestions"
                >
                  <div className="accordion-body">
                    <p>
                      combined with a handful of model sentence structures, to
                      generate Lorem Ipsum which looks reasonable. The generated
                      Lorem Ipsum is therefore always free from repetition,
                      injected humour, or
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item content__space">
                <h5 className="accordion-header" id="headingQuestionsThree">
                  <span className="icon_box">
                    <img
                      src="assets/images/icons/message.png"
                      alt="Questions"
                    />
                  </span>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseQuestionsThree"
                    aria-expanded="false"
                    aria-controls="collapseQuestionsThree"
                  >
                    What will happen if the full amount required for the project
                    is not collected?
                  </button>
                </h5>
                <div
                  id="collapseQuestionsThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingQuestionsThree"
                  data-bs-parent="#accordionExampleQuestions"
                >
                  <div className="accordion-body">
                    <p>
                      combined with a handful of model sentence structures, to
                      generate Lorem Ipsum which looks reasonable. The generated
                      Lorem Ipsum is therefore always free from repetition,
                      injected humour, or
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item content__space">
                <h5 className="accordion-header" id="headingQuestionsFour">
                  <span className="icon_box">
                    <img
                      src="assets/images/icons/message.png"
                      alt="Questions"
                    />
                  </span>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseQuestionsFour"
                    aria-expanded="false"
                    aria-controls="collapseQuestionsFour"
                  >
                    Is it possible to change the term of the project, the
                    schedule of repayment of the received investments?
                  </button>
                </h5>
                <div
                  id="collapseQuestionsFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingQuestionsFour"
                  data-bs-parent="#accordionExampleQuestions"
                >
                  <div className="accordion-body">
                    <p>
                      combined with a handful of model sentence structures, to
                      generate Lorem Ipsum which looks reasonable. The generated
                      Lorem Ipsum is therefore always free from repetition,
                      injected humour, or
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item content__space">
                <h5 className="accordion-header" id="headingQuestionsFive">
                  <span className="icon_box">
                    <img
                      src="assets/images/icons/message.png"
                      alt="Questions"
                    />
                  </span>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseQuestionsFive"
                    aria-expanded="false"
                    aria-controls="collapseQuestionsFive"
                  >
                    Do I need to present any documents on the use of the
                    collected investments?
                  </button>
                </h5>
                <div
                  id="collapseQuestionsFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingQuestionsFive"
                  data-bs-parent="#accordionExampleQuestions"
                >
                  <div className="accordion-body">
                    <p>
                      combined with a handful of model sentence structures, to
                      generate Lorem Ipsum which looks reasonable. The generated
                      Lorem Ipsum is therefore always free from repetition,
                      injected humour, or
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item content__space">
                <h5 className="accordion-header" id="headingQuestionsSix">
                  <span className="icon_box">
                    <img
                      src="assets/images/icons/message.png"
                      alt="Questions"
                    />
                  </span>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseQuestionsSix"
                    aria-expanded="false"
                    aria-controls="collapseQuestionsSix"
                  >
                    What should I do if the project is unsuccessful and I am
                    unable to repay the sum borrowed?
                  </button>
                </h5>
                <div
                  id="collapseQuestionsSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingQuestionsSix"
                  data-bs-parent="#accordionExampleQuestions"
                >
                  <div className="accordion-body">
                    <p className="neutral-top neutral-bottom">
                      combined with a handful of model sentence structures, to
                      generate Lorem Ipsum which looks reasonable. The generated
                      Lorem Ipsum is therefore always free from repetition,
                      injected humour, or
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

export default Faq;
