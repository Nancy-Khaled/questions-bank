import React from "react";
import { Link } from "react-router-dom";

export default function QuestionPreview(props) {
  return (
    <div>
      <div className="post-preview">
        <Link to={"/manage-questions"}>
          <h2 className="post-title">{props.question}</h2>
        </Link>
        <p className="post-meta">
          Written by{" "}
          <Link to={"/profile"}>
            <u>Prof.{props.name}</u>
          </Link>{" "}
          on {props.time}
        </p>
      </div>
      <hr className="my-4" />
    </div>
  );
}
