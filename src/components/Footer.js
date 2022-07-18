import React from "react";
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer className="footer-clean">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Career guidance</a>
                </li>
                <li>
                  <a href="#">Psychometric test</a>
                </li>
                <li>
                  <a href="#">Career planning</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>Careers</h3>
              <ul>
                <li>
                  <a href="#">Patner with us</a>
                </li>
                <li>
                  <a href="#">Join us</a>
                </li>
                <li>
                  <a href="#">feedbacks</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 item social">
              <a href="#">
              <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
              <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <p className="copyright">Career Lab © 2022</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
