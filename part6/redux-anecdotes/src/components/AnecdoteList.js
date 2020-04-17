import React from 'react'
// import { useSelector, useDispatch, connect } from 'react-redux'
import { connect } from 'react-redux'

import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

function AnecdoteList (props) {
  // const anecdotes = useSelector(state => state.anecdotes)
  // const filter = useSelector(state => state.formValue)
  // const dispatch = useDispatch()

  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    // dispatch(addVote(anecdote))
    props.addVote(anecdote)
    props.setNotification(`you voted ${anecdote.content}`, 5000)
  }

  const filteredAnecdotes = props.anecdotes.filter(ele => new RegExp(props.filter, 'i').test(ele.content))
  console.log(filteredAnecdotes, new RegExp(props.filter, 'gi'), new RegExp(props.filter, 'gi').test('asd'))

  return (
    <div>
      {filteredAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    anecdotes: state.anecdotes,
    filter: state.formValue
  }
}

const mapDispatchToProps = {
  addVote,
  setNotification
}

const connectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default connectedAnecdoteList
