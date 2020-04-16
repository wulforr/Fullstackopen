import axios from 'axios'


const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

export const addNewAnecdote = async(anecdote) => {
    const newAnecdote = {
        content: anecdote,
        votes:0
    }
    const res = await axios.post(baseUrl,newAnecdote)
    return res.data
}

export const updateVote = async(anecdote) => {
    const updatedAnecdote = {...anecdote,votes:anecdote.votes+1}
    console.log(updatedAnecdote);
    
    const res = await axios.put(`${baseUrl}/${anecdote.id}`,updatedAnecdote)
    return res.data
}

export default getAll