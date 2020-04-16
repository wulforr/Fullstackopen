import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

export default function AnecdoteList () {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.formValue)
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    dispatch(addVote(anecdote))
    dispatch(setNotification(`you voted ${anecdote.content}`, 5000))
  }

  const filteredAnecdotes = anecdotes.filter(ele => new RegExp(filter, 'i').test(ele.content))
  console.log(filteredAnecdotes, new RegExp(filter, 'gi'), new RegExp(filter, 'gi').test('asd'))

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
