import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
    return(
        <div>
          {parts.map((ele) => {
            return(
            <Part part = {ele.name} exercises={ele.exercises} key={ele.id} />
          )} )}

        </div>
    )
}

export default Content