import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const addvote = (votes,index) => {
  const copy = [...votes]
  copy[index]++
  return copy
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes,setvotes] = useState(new Array(props.anecdotes.length).fill(0))
  console.log(votes)
  return (
    <div>
      <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <button onClick = {() => setvotes(addvote(votes,selected))} >vote</button>
      <button onClick = {()=> setSelected(Math.floor(Math.random()*5))} >next anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{props.anecdotes[votes.indexOf(Math.max(...votes))]}</p>
        <p>has {Math.max(...votes)} votes</p>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)