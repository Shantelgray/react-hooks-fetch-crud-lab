import React from "react";

const questionUrl = "http://localhost:4000/questions/";
function QuestionItem({
  question,
  questionNumber,
  onRemoveQuestion,
  onUpdateQuestion,
}) {
  const { prompt, answers, correctIndex } = question;
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  const handleDelete = () => {
    fetch(questionUrl + question.id, { method: "DELETE" })
      .then((response) => response.json())
      .then(() => onRemoveQuestion(question));
  };

  const handleChange = ({ target: { value } }) => {
    fetch(questionUrl + question.id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correctIndex: value }),
    })
      .then((response) => response.json())
      .then(onUpdateQuestion);
  };
  return (
    <li>
      <h4>Question {questionNumber}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} defaultValue={correctIndex}>
          {options}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
