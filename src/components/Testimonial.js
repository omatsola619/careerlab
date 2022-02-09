import React from "react";
import "./Testimonial.css"
import Dp from '../images/oma.jpg'

function Testimonial() {
  return (
    <div>
      <section class="testimonials-clean">
        <div class="container">
          <div class="intro">
            <h2 class="text-center">Testimonials </h2>
            <p class="text-center">
              Our customers love us! Read what they have to say below
            </p>
          </div>
          <div class="row people">
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <p class="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est.
                </p>
              </div>
              <div class="author">
                <img class="rounded-circle" src={Dp} />
                <h5 class="name">Omatsola</h5>
                <p class="title">Parent of a student</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <p class="description">
                  Praesent aliquam in tellus eu gravida. Aliquam varius finibus
                  est, et interdum justo suscipit id.
                </p>
              </div>
              <div class="author">
                <img class="rounded-circle" src={Dp} />
                <h5 class="name">Emmanuel</h5>
                <p class="title">Product Manager</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <p class="description">
                  Aliquam varius finibus est, et interdum justo suscipit.
                  Vulputate quis leo in, vehicula rhoncus lacus. Praesent
                  aliquam in tellus eu.
                </p>
              </div>
              <div class="author">
                <img class="rounded-circle" src={Dp} />
                <h5 class="name">Ade</h5>
                <p class="title">Backend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
