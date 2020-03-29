import React from 'react'

export default function DisplayContact(props) {
    return (
        <div>
    {props.persons.filter(ele => new RegExp('^'+props.searchValue,'i').test(ele.name)).map(ele => <p key={ele.id}>{ele.name} {ele.number}</p> )}
        </div>
    )
}
