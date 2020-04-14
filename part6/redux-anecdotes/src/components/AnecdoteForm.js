import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnec } from '../reducers/anecdoteReducer'


export default function AnecdoteForm() {

    const dispatch = useDispatch()

    const addAnecdote = (e) => {
        e.preventDefault()
        console.log(e.target.anecdote.value)
        const anecdote = e.target.anecdote.value
        dispatch(addAnec(anecdote))
      }
    

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote} >
                <div><input name='anecdote' /></div>
                <button type='submit' >create</button>
            </form>
        </div>
    )
}
