import React from "react";

import "../assets/css/questions.css";
import Card from "../shared/components/Card";
import cardContents from "../cardContent";

function creatCard(cardContent) {
  return (
    <Card
      key={cardContent.id}
      name={cardContent.name}
      question={cardContent.question}
    ></Card>
  );
}

export default function Questions() {
  return (
    <section className="mt-5 mb-5 questions-content">
      <div className="container">
        <div className="row hidden-md-up">
          {cardContents.map(creatCard)}
        </div>
      </div>
    </section>
  );
}
