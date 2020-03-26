import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'



const Statistic = (props) => {
  return(
      <p>{props.text} {props.value}</p>
  )
}

const Statistics = (props) => {
  return(
    <div>
      <Statistic text={'good'} value={props.good} />
      <Statistic text={'neutral'} value={props.neutral} />
      <Statistic text={'bad'} value={props.bad} />
      <Statistic text={'all'} value={props.all} />
      <Statistic text={'average'} value={props.average} />
      <Statistic text={'positive'} value={props.positive} />
    </div>
  )
}




const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(1)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [stats, toggleStats] = useState(false)



  return (
    <div>
      <h1> Give Feedback</h1>

      <div className="feedbackbuttons">
      <button onClick={() => {
        setGood(good+1)
        toggleStats(true)
      }} >Good</button>
      <button onClick = {() => {
        setNeutral(neutral+1)
        toggleStats(true)
      }} >Neutral</button>
      <button onClick = {() => {
        setBad(bad+1)
        toggleStats(true)
      }} >Bad</button>
      </div>

      <h2>Statistics</h2>

      { stats ? <Statistics good={good} neutral={neutral} bad={bad} all={good+neutral+bad} average={(good - bad)/(good+bad+neutral)} positive={good/(good+bad+neutral)} />: <p>Submit feedback first</p> 
}

    </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root'))
