import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  const handleRemoveQuestion = (deletedQuestion) => {
    const filteredQuestions = questions.filter(
      (question) => question.id !== deletedQuestion.id
    );

    setQuestions(filteredQuestions);
  };

  const handleUpdateQuestion = (updatedQuestion) => {
    const updatedQuestions = questions.map((question) =>
      question.id === updatedQuestion.id ? updatedQuestion : question
    );

    setQuestions(updatedQuestions);
  };

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((questions) => {
        console.log("Fetched questions:", questions);
        setQuestions(questions);
      });
  }, []);
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onNewQuestion={handleAddQuestion} />
      ) : (
        <QuestionList
          questions={questions}
          onRemoveQuestion={handleRemoveQuestion}
          onUpdateQuestion={handleUpdateQuestion}
        />
      )}
    </main>
  );
}

export default App;
