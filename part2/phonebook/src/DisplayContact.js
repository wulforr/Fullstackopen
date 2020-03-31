import React from 'react'
import Backend from './Backend'

export default function DisplayContact(props) {

    const deleteHandler = (name,id) => {
        if(window.confirm(`Delete ${name}`)){
            Backend.deleteContact(id)
            props.setPersons(props.persons.filter(ele => ele.id !== id))
        }
    }

    return (
        <div>
    {
        props.persons.filter(ele => new RegExp('^'+props.searchValue,'i').test(ele.name))
        .map(ele => <div key={ele.id} >
            <p>{ele.name} {ele.number}</p>
            <button onClick={() => deleteHandler(ele.name,ele.id)}>delete</button>
            </div> )}
        </div>
    )
}
