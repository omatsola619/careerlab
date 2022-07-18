import React, {useState} from "react";
// import Science from '../../images/science2.png';
import Stream2 from '../../images/stream2.png';
import '../../components/general pages/General.css';
import Modal from "../Modal";
import Plan from '../../images/plan.jpg'
import Cone from '../../images/cone.png'
import Ctwo from '../../images/ctwo.png'
import Cthree from '../../images/cthree.png'
import Cfour from '../../images/cfour.png'
import Graduate from '../../images/graduate.jpg'

function Js() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 header-text">
              <h4>Career Counselling For Class 8-9(JSS2-JSS3) Students</h4>
              <p>Discover The Perfect Class Stream For Your Child</p>
              <p>Choosing The Right Stream After Class 9 Can Be Confusing</p>
              <p>Take Guidance From Career Experts</p>
              <button className="btn w-50 enroll-btn">Enroll Now</button>
            </div>
            <div className="col-lg-6">
              <img src={Stream2} alt="science" className="sc-img" />
            </div>
          </div>
        </div>
      </div>
      {/*your why section */}
      <section className="highlight-clean">
        <div className="container">
          <div className="row">
          <div className="intro col-md-6">
            <h2 className="text-left" style={{fontSize: "40px"}}>What next after class 9 ?</h2>
            <p className="text-left" style={{paddingBottom: "20px"}}>
              After class 9, the next important decision for your child is choosing
              the right class stream.<br />
              Securing your child's future starts today with making informed 
              career decision. <br /> Our Assessment finds whether Science, Art or Commercial is fit for
              your child. <br />Every child excels when they are in the right career.
              
            </p>
          </div>
          <div className="intro-image col-md-6">
            <img src={Graduate} style={{width: '100%'}} alt="graduate" className="graduate-img" />
          </div>
        </div>
        </div>
      </section>
      {/*more features section */}
      <section className="features-blue">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">
              Why Your Child Needs Career Counseling For Class 9
            </h2>
          </div>
          <div className="row features">
            <div className="col-sm-6 col-md-3 item">
              <div class="text-center" style={{height: "100px"}}><img src={Cone} style={{width: "150px", marginBottom: '5px'}} /></div>
              <h3 className="name text-center">HELP CHOOSE THE RIGHT STREAM</h3>
              <p className="description text-center">
                Know about the streams after jss classes, compare your interest
                and aptitude in different streams.
              </p>
            </div>
            <div className="col-sm-6 col-md-3 item">
            <div class="text-center" style={{height: "100px"}}><img src={Cfour} style={{width: "90px", marginBottom: '5px'}} /></div>
              <h3 className="name text-center">KNOW ABOUT NEW AGE CAREERS</h3>
              <p className="description text-center">
                Explore new age careers required for the next few decades, know
                about their expected work skills.
              </p>
            </div>
            <div className="col-sm-6 col-md-3 item">
            <div class="text-center" style={{height: "100px"}}><img src={Cthree} style={{width: "90px", marginBottom: '5px'}} /></div>
              <h3 className="name text-center">DON'T HAVE ANY CAREER ADVISORS</h3>
              <p className="description text-center">
                Class 9 is a good time to get mentored, discuss and plan for child's
                career in more depth.
              </p>
            </div>
            <div className="col-sm-6 col-md-3 item">
            <div class="text-center" style={{height: "100px"}}><img src={Ctwo} style={{width: "100px", marginBottom: '5px'}} /></div>
              <h3 className="name text-center">EXPLORE MORE CAREER OPTIONS</h3>
              <p className="description text-center">
                know about 500+ career options available in each streams.
                Discuss and plan your career in more depth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*program info starts here */}
      <div className="program-info">
        <h2 className="text-center pb-5">
          What Your Child Will Get From This Program
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
              <h6>Pick the right stream or subject combination for class 10(SSS1)</h6>
              <ul>
                <li>
                  This test is scientifically designed for class 10th
                </li>
                <li>
                  Provides answers to the questions What to do after 10th
                </li>
                <li>
                  Know the aptitude & interest to determine the suitable stream for your child
                </li>
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
              <h4>#2 Speak With An Expert Counsellor</h4>
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
              <h4>#3 Career Exploration</h4>
              <ul>
                <li>Schedule Video Sessions to discuss career options</li>
                <li>
                  Introduce new age career options in Career Counselling for
                  10th
                </li>
                <li>
                  Discuss career options related to science, commerce & arts
                </li>
                <li>Get E-books about list of Career Options</li>
              </ul>
            </div>
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
                <div className="price-amt">₦12,000</div>
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
                      stream selector & ideal career
                    </p>
                  </div>
                  <hr />
                  <div className="benefit-item">
                    <p>
                      <i className="fas fa-phone-alt"></i>4 video career counselling
                      session (45 mins each)
                    </p>
                  </div>
                  <hr />
                  <div className="benefit-item">
                    <p>list of entrance exams</p>
                  </div>
                </div>
                <button className="started" onClick={() => setVisible(true)}>Get Started</button>
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
                      stream selector test
                    </p>
                  </div>
                  <hr />
                  <div className="benefit-item">
                    <p>
                      <i className="fas fa-phone-alt"></i>4 video career counselling
                      session 45 mins each)
                    </p>
                  </div>
                </div>
                <button className="started" onClick={() => setVisible(true)}>Get Started</button>
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
