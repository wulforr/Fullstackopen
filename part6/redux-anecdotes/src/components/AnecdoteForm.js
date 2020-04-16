import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnec } from '../reducers/anecdoteReducer'
// import {addNewAnecdote} from '../services/anecdoteService'

export default function AnecdoteForm() {

    const dispatch = useDispatch()

    const addAnecdote = async (e) => {
        e.preventDefault()
        const anecdote = e.target.anecdote.value
        try{
            // await addNewAnecdote(anecdote)
            dispatch(addAnec(anecdote))
        }
        catch(e){
            console.log(e)
        }
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
