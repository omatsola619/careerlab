import React, {useState} from "react";
import Science from '../../images/science2.png';
import '../../components/general pages/General.css';
import Modal from "../Modal";

function Js() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 header-text">
              <h4>Stream selection Career Mapping for class 9(JSS)</h4>
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
            <h2 className="text-left">What next after JSS classes ?</h2>
            <p className="text-left" style={{paddingBottom: "20px"}}>
              Securing your child's future starts today
              with making informed career decision. Investing in your child
              early paves way for a better tomorrow.
              don’t choose your child’s career in ignorance. Discover your
              child’s perfect career path using our world-class career
              assessment. Every child excels when they are in the right career.
              Our Assessment finds whether Science, Art or Commercial is fit for
              your child.
            </p>
          </div>
        </div>
      </section>
      {/*more features section */}
      <section className="features-blue">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">
              Why career Counseling for JSS2 - JSS3 ?
            </h2>
          </div>
          <div className="row features">
            <div className="col-sm-6 col-md-4 item">
              <h3 className="name">CHOOSE THE RIGHT STREAM</h3>
              <p className="description">
                Know about the streams after jss classes, compare your interest
                and aptitude in different streams.
              </p>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <h3 className="name">KNOW NEW AGE CAREERS</h3>
              <p className="description">
                Explore new age careers required for the next few decades, know
                about their expected work skills.
              </p>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <h3 className="name">DON'T HAVE ANY CAREER ADVISORS</h3>
              <p className="description">
                Jss classes is a good time to get mentored, discuss and plan
                your career in more depth. Don't let any question be left on
                your mind.
              </p>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <h3 className="name">PLAN FOR YOUR ADMISSION</h3>
              <p className="description">
                Learn about various colleges and institution at home and abroad,
                their eligibility and admission criteria.
              </p>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <h3 className="name">EXPLORE CAREER OPTIONS</h3>
              <p className="description">
                know about 500+ career options available in each streams.
                Discuss and plan your career in more depth.
              </p>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <h3 className="name">BUILD AN IMPRESSIVE PROFILE</h3>
              <p className="description">
                Build profile, resume and new age skills which will make your
                future ready.
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
                  It is a scientifically designed psychometric test for
                  className 10th
                </li>
                <li>
                  Provides answers to the questions What to do after 10th ?
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

      {/* pricing section */}
      <div className="container">
        <div className="pricing">
          <h3 className="price-header text-center">
            Choose the package that best fits you
          </h3>
          <div className="row">
            <div className="col-md-12 price">
              <div class="price-top">
                <span class="tag text-center">Popular</span>
                <div class="price-info">
                  <h4 class="text-center">What's included</h4>
                  <p class="text-center">Our most popular career plan</p>
                </div>
              </div>
              <div className="price-body">
                <div class="price-amt">₦9,999</div>
                <div class="benefits">
                  <div class="benefit-item">
                    <p>
                      <i class="fas fa-chart-pie"></i>2 psychometric career
                      reports
                    </p>
                  </div>
                  <hr />
                  <div class="benefit-item">
                    <p>
                      <i class="fas fa-graduation-cap"></i>
                      stream selector & ideal career
                    </p>
                  </div>
                  <hr />
                  <div class="benefit-item">
                    <p>
                      <i class="fas fa-phone-alt"></i>4 video career counselling
                      session (45 mins each)
                    </p>
                  </div>
                  <hr />
                  <div class="benefit-item">
                    <p>list of entrance exams</p>
                  </div>
                </div>
                <button className="started" onClick={() => setVisible(true)}>Get Started</button>
              </div>
            </div>
            {/*second price */}
            <div className="col-md-12 price">
              <div class="price-top">
                <div class="price-info">
                  <h4 class="text-center">What's included</h4>
                  <p class="text-center">Our Best Plan</p>
                </div>
              </div>
              <div className="price-body">
                <div class="price-amt">₦4,999</div>
                <div class="benefits">
                  <div class="benefit-item">
                    <p>
                      <i class="fas fa-chart-pie"></i>1 psychometric career
                      reports
                    </p>
                  </div>
                  <hr />
                  <div class="benefit-item">
                    <p>
                      <i class="fas fa-graduation-cap"></i>
                      stream selector test
                    </p>
                  </div>
                  <hr />
                  <div class="benefit-item">
                    <p>
                      <i class="fas fa-phone-alt"></i>4 video career counselling
                      session 45 mins each)
                    </p>
                  </div>
                </div>
                <button className="started" onClick={() => setVisible(true)}>Get Started</button>
              </div>
            </div>
            <div className="col-md-12 price">
              <div class="price-top">
                <div class="price-info">
                  <h4 class="text-center">What's Included</h4>
                  <p class="text-center">Career Report</p>
                </div>
              </div>
              <div className="price-body">
                <div class="price-amt">₦1,999</div>
                <div class="benefits">
                  <div class="benefit-item">
                    <p>
                      <i class="fas fa-chart-pie"></i>1 psychometric career
                      reports
                    </p>
                  </div>
                  <hr />
                  <div class="benefit-item">
                    <p>
                      <i class="fas fa-graduation-cap"></i>
                      stream selector test
                    </p>
                  </div>
                </div>
                <button className="started" onClick={() => setVisible(true)}>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal visible={visible} setVisible={setVisible} />
    </>
  );
}

export default Js;
