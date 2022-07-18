import React, { useState } from "react";
import Science from "../../images/science2.png";
import "../../components/general pages/General.css";
import Modal from "../Modal";

function Ss() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 header-text">
              <h4>Stream selection Career Mapping for class 10(SSS)</h4>
            </div>
            <div className="col-lg-5">
              <img src={Science} alt="science" className="sc-img" />
            </div>
          </div>
        </div>
      </div>
      {/*your why section */}
      <section className="highlight-clean">
        <div className="container">
          <div className="intro">
            <h2 className="text-left">What next after SSS classes ?</h2>
            <p className="text-left">
              Settle your career doubts! Wrong career choices can be so
              frustrating. Don’t be a victim. With our tailored programs, we
              guide className 11-12 (SSS) students to make great career choices and
              make early career plans. With our award-winning career assessment,
              we help you to discover that career that is perfect for you.
            </p>
          </div>
        </div>
      </section>
      {/*more features section */}
      <section className="features-blue">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">
              Why career Counseling for SSS1 - SSS3 ?
            </h2>
          </div>
          <div className="row features">
            <div className="col-sm-6 col-md-4 item">
              <h3 className="name">CHOOSE YOUR IDEAL CAREER</h3>
              <p className="description">
                Know the best career fit for you based on your interest and
                aptitude
              </p>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <h3 className="name">DON'T HAVE ANY CAREER ADVISORS</h3>
              <p className="description">
                Explore new age careers required for the next few decades, know
                about their expected work skills.
              </p>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <h3 className="name">DON'T HAVE ANY CAREER ADVISORS</h3>
              <p className="description">
                Discuss and plan your Career in more depth. Don’t let any
                question be left in your mind
              </p>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <h3 className="name">EXPLORE CAREER OPTIONS</h3>
              <p className="description">
                If you are asking yourself "How Do I get There" in your Career
              </p>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <h3 className="name">PLAN FOR YOUR ADMISSIONS</h3>
              <p className="description">
                Learn about various colleges & institutions in India & abroad,
                their eligibility and admission criteria
              </p>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <h3 className="name">BUILD AN IMPRESSIVE PROFILE</h3>
              <p className="description">
                Build profile, resume and skills which will make you future
                ready
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*program info starts here */}
      <div className="program-info">
        <h2 className="text-center pb-5">
          What you will get from this program
        </h2>
        <div className="container mt-5">
          <div className="row p-row">
            <div className="col-md-6 p-image p-one">
              <img
                src="https://r7q6w9z6.rocketcdn.me/career/wp-content/uploads/2021/04/1_E74RlgZteM0J2wqiFyGk1w-150x150.jpeg"
                alt=""
              />
            </div>
            <div className="col-md-6 p-text p-two">
              <h4>#1 Psychometric Test - Stream Selector</h4>
              <ul>
                <li>
                  It is a scientifically designed psychometric test for SSS
                  classes
                </li>
                <li>
                  Provides answers to the questions What to do after SSS classes
                  ?
                </li>
                <li>
                  Assess aptitude & personality to determine suitable stream
                </li>
                <li>
                  Give assessment online and get unbiased report immediately
                </li>
                <li>Click here to generate A Sample Report</li>
              </ul>
            </div>
          </div>
          {/* second row */}
          <div className="row p-row">
            <div className="col-md-6 p-image p-three">
              <img
                src="https://r7q6w9z6.rocketcdn.me/career/wp-content/uploads/2021/04/stream-selector-2-150x150.jpg"
                alt=""
              />
            </div>
            <div className="col-md-6 p-text p-four">
              <h4>#2 Analysis On Stream Selection</h4>
              <ul>
                <li>
                  Analysis of generated reports by a Certified Career Counsellor
                </li>
                <li>Analysis Sessions (duration: 45 mins)</li>
                <li>Will explain about various streams and subjects in it</li>
                <li>Explains about career options in each stream</li>
                <li>Discuss which stream will be the best for your child</li>
              </ul>
            </div>
          </div>
          {/* third row */}
          <div className="row p-row">
            <div className="col-md-6 p-image p-five">
              <img
                src="https://r7q6w9z6.rocketcdn.me/career/wp-content/uploads/2021/04/career-exploration-2-150x150.jpg"
                alt=""
              />
            </div>
            <div className="col-md-6 p-text p-six">
              <h4>#3 Personalized Deep Dive On Career</h4>
              <ul>
                <li>Schedule Video Sessions to discuss career options</li>
                <li>
                  Introduce new age career options in Career Counselling for
                  10th
                </li>
                <li>
                  Discuss career options related to technology, commerce & arts
                </li>
                <li>Get E-books about list of Career Options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/*gains section */}
      <div className="gains container text-center">
        <div className="gain-cover">
          <div className="benefitItem">
            <h3 className="b-intro">Get E-books</h3>
            <div className="line"></div>
            <p className="b-exp">
              Fascinating, informative E-book on Science (Maths) career pathway
            </p>
          </div>
          <div className="benefitItem">
            <h3 className="b-intro text-center">Psychometric Test</h3>
            <div className="line"></div>
            <p className="b-exp">
              Informed stream selection & analysis, best AI enabled psychometric
              test for stream choices
            </p>
          </div>
          <div className="benefitItem">
            <h3 className="b-intro text-center">Video Calls</h3>
            <div className="line"></div>
            <p className="b-exp text-center">
              4 personal calls over video or voice to resolve any doubt related
              to your child's future
            </p>
          </div>
        </div>
      </div>

      {/*services section */}
      <div className="services-cover">
        <div className="container">
          <div className="services">
            <div className="services-header">
              <h3 className="services-intro1">HOW IS SERVICE DELIVERED ?</h3>
              <p>Let us help you take the right direction</p>
            </div>
            <ul>
              <li>Service is delivered via Calls, video calls and WhatsApp</li>
              <li>Access to certified career expert</li>
              <li>1- 4 Video Sessions with your counsellor</li>
              <li>Continuous support</li>
              <li>
                We will share requirements & eligibilities of universities
              </li>
              <li>Take Psychometric Assessments</li>
              <li>Guidance on entrance exams for different universities</li>
            </ul>
          </div>
        </div>
      </div>

      {/* pricing section */}
      <div className="container">
        <div className="pricing">
          <h3 className="price-header text-center">
            Choose the package that best fits you
          </h3>
          <div className="row">
            <div className="col-md-12 price">
              <div className="price-top">
                <span className="tag text-center">Popular</span>
                <div className="price-info">
                  <h4 className="text-center">What's included</h4>
                  <p className="text-center">Our most popular career plan</p>
                </div>
              </div>
              <div className="price-body">
                <div className="price-amt">₦10,000</div>
                <div className="benefits">
                  <div className="benefit-item">
                    <p>
                      <i className="fas fa-chart-pie"></i>2 psychometric career
                      reports
                    </p>
                  </div>
                  <hr />
                  <div className="benefit-item">
                    <p>
                      <i className="fas fa-graduation-cap"></i>
                      ideal career test & engineering branch selector
                    </p>
                  </div>
                  <hr />
                  <div className="benefit-item">
                    <p>
                      <i className="fas fa-phone-alt"></i>4 video career counselling
                      session
                    </p>
                  </div>
                </div>
                <button className="started" onClick={() => setVisible(true)}>
                  Get Started
                </button>
              </div>
            </div>
            {/*second price */}
            <div className="col-md-12 price">
              <div className="price-top">
                <div className="price-info">
                  <h4 className="text-center">What's included</h4>
                  <p className="text-center">Our Best Plan</p>
                </div>
              </div>
              <div className="price-body">
                <div className="price-amt">₦6,000</div>
                <div className="benefits">
                  <div className="benefit-item">
                    <p>
                      <i className="fas fa-chart-pie"></i>1 psychometric career
                      reports
                    </p>
                  </div>
                  <hr />
                  <div className="benefit-item">
                    <p>
                      <i className="fas fa-graduation-cap"></i>
                      Ideal career test
                    </p>
                  </div>
                  <hr />
                  <div className="benefit-item">
                    <p>
                      <i className="fas fa-phone-alt"></i>4 video career counselling
                      session
                    </p>
                  </div>
                </div>
                <button className="started" onClick={() => setVisible(true)}>
                  Get Started
                </button>
              </div>
            </div>
            <div className="col-md-12 price">
              <div className="price-top">
                <div className="price-info">
                  <h4 className="text-center">What's Included</h4>
                  <p className="text-center">Career Report</p>
                </div>
              </div>
              <div className="price-body">
                <div className="price-amt">₦3,000</div>
                <div className="benefits">
                  <div className="benefit-item">
                    <p>
                      <i className="fas fa-chart-pie"></i>1 psychometric career
                      reports
                    </p>
                  </div>
                  <hr />
                  <div className="benefit-item">
                    <p>
                      <i className="fas fa-graduation-cap"></i>
                      Ideal career test
                    </p>
                  </div>
                </div>
                <button className="started" onClick={() => setVisible(true)}>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal visible={visible} setVisible={setVisible} />
    </>
  );
}

export default Ss;
