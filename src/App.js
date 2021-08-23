import React from "react"
import useWordGame from "./hooks/useWordGame"

function App() {
  const {
    handleChange,
    text,
    isTimeRunning,
    textBoxRef,
    timeRemaining,
    startGame,
    wordCount,
  } = useWordGame()

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
        ref={textBoxRef}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  )
}

export default App
