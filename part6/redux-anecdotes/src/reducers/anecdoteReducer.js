import getAll, { addNewAnecdote, updateVote } from '../services/anecdoteService'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  // console.log('state now: ', state)
  // console.log('action', action)
  switch (action.type) {
    case 'VOTE': {
      return state.map(ele => {
        if (ele.id === action.id) {
          return { ...ele, votes: ele.votes + 1 }
        }
        return ele
      })
    }
    case 'ADD': {
      return [...state, asObject(action.content)]
    }
    case 'ADDALL' : {
      return action.data
    }
    default:
      return state
  }
}

export const addVote = (anecdote) => {
  return async dispatch => {
    const res = await updateVote(anecdote)
    console.log(res)
    dispatch({
      type: 'VOTE',
      id: res.id
    })
  }
}

export const addAnec = (anecdote) => {
  return async (dispatch) => {
    const res = await addNewAnecdote(anecdote)
    // console.log(content);
    dispatch({
      type: 'ADD',
      content: res.content
    })
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAll()
    dispatch({
      type: 'ADDALL',
      data: anecdotes
    })
  }
}

export default reducer
