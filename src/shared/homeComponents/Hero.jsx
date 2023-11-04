import React from "react";

import "../../assets/css/home.css";

export default function Hero() {
  return (
    <section className="masthead">
      <div className="container position-relative px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="site-heading">
              <h1>Question Bank</h1>
              <span className="subheading">
                Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
