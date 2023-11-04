import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/questions.css";

export default function Questions() {
  return (
    <section className="mt-5 mb-5 questions-content">
      <div className="container">
        <div className="row hidden-md-up">
          <div className="col-md-4">
            <div className="card mt-3 mb-3">
              <div className="card-block">
                <h4 className="card-title mb-2.5">What technology is used to record cryptocurrency transactions?</h4>
                <h6 className="card-subtitle text-muted text-sm mb-3">Written by Prof.Mohamed Ali</h6>
                <Link to={'/manage-questions'} className="card-link text-blue-500">
                  Edit question
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3 mb-3">
              <div className="card-block">
                <h4 className="card-title mb-2.5">What is the first web browser invented in 1990?</h4>
                <h6 className="card-subtitle text-muted text-sm mb-3">Written by Prof.Mohamed Ali</h6>
                <Link to={'/manage-questions'} className="card-link text-blue-500">
                  Edit question
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3 mb-3">
              <div className="card-block">
                <h4 className="card-title mb-2.5">What technology is used to record cryptocurrency transactions?</h4>
                <h6 className="card-subtitle text-muted text-sm mb-3">Written by Prof.Mohamed Ali</h6>
                <Link to={'/manage-questions'} className="card-link text-blue-500">
                  Edit question
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card mt-3 mb-3">
              <div className="card-block">
                <h4 className="card-title mb-2.5">What technology is used to record cryptocurrency transactions?</h4>
                <h6 className="card-subtitle text-muted text-sm mb-3">Written by Prof.Mohamed Ali</h6>
                <Link to={'/manage-questions'} className="card-link text-blue-500">
                  Edit question
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3 mb-3">
              <div className="card-block">
                <h4 className="card-title mb-2.5">What is the first search engine on internet?</h4>
                <h6 className="card-subtitle text-muted text-sm mb-3">Written by Prof.Mohamed Ali</h6>
                <Link to={'/manage-questions'} className="card-link text-blue-500">
                  Edit question
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3 mb-3">
              <div className="card-block">
                <h4 className="card-title mb-2.5">What technology is used to record cryptocurrency transactions?</h4>
                <h6 className="card-subtitle text-muted text-sm mb-3">Written by Prof.Mohamed Ali</h6>
                <Link to={'/manage-questions'} className="card-link text-blue-500">
                  Edit question
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card mt-3 mb-3">
              <div className="card-block">
                <h4 className="card-title mb-2.5">What is the first search engine on internet?</h4>
                <h6 className="card-subtitle text-muted text-sm mb-3">Written by Prof.Mohamed Ali</h6>
                <Link to={'/manage-questions'} className="card-link text-blue-500">
                  Edit question
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3 mb-3">
              <div className="card-block">
                <h4 className="card-title mb-2.5">What is the first search engine on internet?</h4>
                <h6 className="card-subtitle text-muted text-sm mb-3">Written by Prof.Mohamed Ali</h6>
                <Link to={'/manage-questions'} className="card-link text-blue-500">
                  Edit question
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-3 mb-3">
              <div className="card-block">
                <h4 className="card-title mb-2.5">What is the first web browser invented in 1990?</h4>
                <h6 className="card-subtitle text-muted text-sm mb-3">Written by Prof.Mohamed Ali</h6>
                <Link to={'/manage-questions'} className="card-link text-blue-500">
                  Edit question
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
