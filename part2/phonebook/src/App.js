import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import AddContact from './AddContact'
import DisplayContact from './DisplayContact'
import axios from 'axios'
import Backend from './Backend'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',id:1,number: 123 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')
  // const [filteredName, setFilteredName] = useState(persons)

useEffect(() => {
  axios.get('http://localhost:3001/persons')
  .then(res => setPersons(res.data))
},[]    )


const handleOnAdd = (e) => {
  e.preventDefault();
  const index = persons.findIndex(p => p.name === newName)
  if( index === -1)
  {
    const newContact = {name:newName,id:persons.length+1,number:newNumber};
    const updatedPersons = [...persons,newContact]
    setPersons(updatedPersons)
    Backend.addContact(newContact);
    // axios.post('http://localhost:3001/persons',newContact)
    // .then(res => console.log(res))

  }
  else{
    if(window.confirm(`${newName} is already present do you want to update the number`)){
      const updatedContact = {...persons[index],number:newNumber}
      Backend.updateContact(index,updatedContact)
      // const newPersons = [...persons.filter(ele => ele.id !== index+1),updatedContact]
      const newPersons = persons.map(ele => {
        if(ele.id === index+1)
          return updatedContact
        else
          return ele
      })
      setPersons(newPersons)
    }
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
        <DisplayContact persons={persons} searchValue={searchValue} setPersons={setPersons} />
    </div>
  )
}

export default App