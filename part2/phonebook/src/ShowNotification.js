import React from 'react'

export default function ShowNotification({message}) {
    if(message){
    return (
        <div className='Notification' >
            {message}
        </div>
    )
    }
    else
        return null
}
