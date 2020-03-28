import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',id:1 }
  ]) 
  const [ newName, setNewName ] = useState('')

const handleOnAdd = (e) => {
  e.preventDefault();
  if(persons.findIndex(p => p.name === newName) === -1)
  {
    const updatedPersons = [...persons,{name:newName,id:persons.length+1}]
    setPersons(updatedPersons)
  }
  else{
    alert('name is taken')
}}

const handleChange = (e) => {
  setNewName(e.target.value)
}

const x = persons.find( p => p.name  === 'Arto Hellas')
console.log(persons.findIndex(x => x.name  === 'a'),x.id)
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit" onClick={handleOnAdd} >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(ele => <p key={ele.id}>{ele.name}</p> )}
    </div>
  )
}

export default App