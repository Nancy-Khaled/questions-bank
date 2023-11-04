import React from "react";
import { Link } from "react-router-dom";


export default function MainContent() {
  return (
    <main>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="post-preview">
              <Link to={"/manage-questions"}>
                <h2 className="post-title">
                What technology is used to record cryptocurrency transactions?
                </h2>
              </Link>
              <p className="post-meta">
                Written by{" "}
                <Link to={"/profile"}>
                  <u>Prof.Mohamed Ali</u>
                </Link>{" "}
                on September 24, 2023
              </p>
            </div>
            <hr className="my-4" />
            <div className="post-preview">
              <Link to={"/manage-questions"}>
                <h2 className="post-title">
                  What is the first search engine on internet?
                </h2>
              </Link>
              <p className="post-meta">
                Written by{" "}
                <Link to={"/profile"}>
                  <u>Prof.Ahmed Ali</u>
                </Link>{" "}
                on September 18, 2023
              </p>
            </div>
            <hr className="my-4" />
            <div className="post-preview">
              <Link to={"/manage-questions"}>
                <h2 className="post-title">
                  What is the first web browser invented in 1990?
                </h2>
              </Link>
              <p className="post-meta">
                Written by{" "}
                <Link to={"/profile"}>
                  <u>Prof.Ali Nour</u>
                </Link>{" "}
                on May 20, 2023
              </p>
            </div>
            <hr className="my-4" />
            <div className="post-preview">
              <Link to={"/manage-questions"}>
                <h2 className="post-title">
                What technology is used to record cryptocurrency transactions?
                </h2>
              </Link>
              <p className="post-meta">
                Written by{" "}
                <Link to={"/profile"}>
                  <u>Prof.Ali Nour</u>
                </Link>{" "}
                on May 11, 2023
              </p>
            </div>
            <hr className="my-4" />
            <div className="d-flex justify-content-end mb-4">
              <Link className="btn btn-secondary" to={'/questions'}>
                Older Questions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
