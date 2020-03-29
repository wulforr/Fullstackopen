import React from 'react'

export default function AddContact(props) {
    return (
        <div>
            <form>
        <div>
          name: <input value={props.newName} onChange={props.handleChange} />
        </div>
        <div>
          number: <input type = 'number' value={props.newNumber} onChange={props.handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={props.handleOnAdd} >add</button>
        </div>
      </form>
        </div>
    )
}
