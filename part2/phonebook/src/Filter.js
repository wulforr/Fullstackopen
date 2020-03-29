import React from 'react'

export default function Filter(props) {
    return (
        <div>
          filter shown with <input value={props.searchValue} onChange={props.handleSearchChange} />
        </div>
    )
}
