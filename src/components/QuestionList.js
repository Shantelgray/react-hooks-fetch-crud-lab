import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onRemoveQuestion, onUpdateQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question, index) => (
          <QuestionItem
            key={question.id}
            question={question}
            onRemoveQuestion={onRemoveQuestion}
            onUpdateQuestion={onUpdateQuestion}
            numberQuestion={index + 1}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
