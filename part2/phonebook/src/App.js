import React, { useState } from 'react'

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
  // let patt = new RegExp(e.target.value,'i')
  // setFilteredName(persons.filter(ele => patt.test(ele.name)))
  // setFilteredName(persons.filter(ele => ele.name === e.target.value))
}

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input value={searchValue} onChange={handleSearchChange} />
      <form>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          number: <input type = 'number' value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={handleOnAdd} >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    {/* {filteredName.map(ele => <p key={ele.id}>{ele.name} {ele.number}</p> )} */}
    {persons.filter(ele => new RegExp('^'+searchValue,'i').test(ele.name)).map(ele => <p key={ele.id}>{ele.name} {ele.number}</p> )}

    </div>
  )
}

export default App