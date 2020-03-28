import React from 'react'

const Total = (props) => {
    let sum =0;
    // props.parts.forEach(element => {
    //     sum += element.exercises        
    // });
    return(
        <p>Number of exercises {props.parts.reduce((s,p)=> {
            console.log(s,p,s.exercises+p.exercises)
            return(s + p.exercises)},sum)}</p>
    )
}

export default Total