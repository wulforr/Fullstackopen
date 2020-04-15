import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {filterUpdate} from '../reducers/filterReducer'


const Filter = () => {
    const dispatch = useDispatch()
    const formValue = useSelector(state => state.formValue)
  const handleChange = (event) => {
    dispatch(filterUpdate(event.target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} value={formValue} />
    </div>
  )
}

export default Filter