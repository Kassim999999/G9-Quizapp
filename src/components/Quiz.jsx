import React from 'react'

const Quiz = () => {
  return (
    <div>
         <h1>G9 Quiz App</h1>
      {showScore ? (
        <div>
          <h2>Your Score: {score}</h2>
          <button onClick={handleRetry}>Retry</button>
        </div>
      ) : (
        <section>
        {questions.length > 0 && (
  <div>
    <div>
      <span>{currentQuestion + 1}</span>/{questions.length}
    </div>
    <div>
      {questions[currentQuestion]?.question}
    </div>

    <AnswerSection
      questions={questions}
      currentQuestion={currentQuestion}
      handleAnsSelected={handleAnsSelected}
    />

    <div>
      {currentQuestion > 0 && (
        <button onClick={() => setCurrentQuestion(currentQuestion - 1)}>Previous</button>
      )}
      {currentQuestion < questions.length - 1 && (
        <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next</button>
      )}
    </div>
  </div>
)}

         
        </section>
      )}
    </div>
  )
}

export default Quiz