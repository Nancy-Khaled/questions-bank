import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="col-md-4">
      <div className="card mt-3 mb-3">
        <div className="card-block">
          <h4 className="card-title mb-2.5">{props.question}</h4>
          <h6 className="card-subtitle text-muted text-sm mb-3">
            Written by Prof.{props.name}
          </h6>
          <Link to={"/manage-questions"} className="card-link text-blue-500">
            Edit question
          </Link>
        </div>
      </div>
    </div>
  );
}
