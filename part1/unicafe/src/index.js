import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(1)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      <h1> Give Feedback</h1>

      <div className="feedbackbuttons">
      <button onClick={() => setGood(good+1)} >Good</button>
      <button onClick = {() => setNeutral(neutral+1)} >Neutral</button>
      <button onClick = {() => setBad(bad+1)} >Bad</button>
      </div>

      <h2>Statistics</h2>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good+neutral+bad}</p>
      <p>average {(good - bad)/(good+bad+neutral)} </p>
      <p>positive {good/(good+bad+neutral)} </p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root'))
