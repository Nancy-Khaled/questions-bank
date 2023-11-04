import React from "react";
import { Link } from "react-router-dom";
import cardContents from "../../cardContent";
import QuestionPreview from "../components/QuestionPreview";

export default function MainContent() {
  const newQuestions = cardContents.slice(0, 4);

  function newQuestion(newContent) {
    return (
      <QuestionPreview
        key={newContent.id}
        name={newContent.name}
        question={newContent.question}
        time={newContent.time}
      ></QuestionPreview>
    );
  }

  return (
    <main>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {newQuestions.map(newQuestion)}
            <div className="d-flex justify-content-end mb-4">
              <Link className="btn btn-secondary" to={"/questions"}>
                Older Questions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
