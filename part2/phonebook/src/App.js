import React, { useState } from 'react'
import Filter from './Filter'
import AddContact from './AddContact'
import DisplayContact from './DisplayContact'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',id:1,number: 123 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')
  // const [filteredName, setFilteredName] = useState(persons)



const handleOnAdd = (e) => {
  e.preventDefault();
  if(persons.findIndex(p => p.name === newName) === -1)
  {
    const updatedPersons = [...persons,{name:newName,id:persons.length+1,number:newNumber}]
    setPersons(updatedPersons)

  }
  else{
    alert(`${newName} name is already taken`)
}}

const handleChange = (e) => {
  setNewName(e.target.value)
}

const handleNumberChange = (e) => {
  setNumber(e.target.value)
}

const handleSearchChange = (e) => {
  setSearchValue(e.target.value)
}

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter searchValue={searchValue} handleSearchChange={handleSearchChange} />
        <AddContact newName={newName} newNumber={newNumber} handleOnAdd={handleOnAdd} handleChange={handleChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
    {/* {filteredName.map(ele => <p key={ele.id}>{ele.name} {ele.number}</p> )} */}
        <DisplayContact persons={persons} searchValue={searchValue} />
    </div>
  )
}

export default App