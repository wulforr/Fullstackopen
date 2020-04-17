const reducer = (state = null, action) => {
    switch(action.type){
        case 'ADDNOTIF' : return action.notification
        case 'REMOVENOTIF': return null
        default: return state
    }
}

export const addNotification = (notification) => {
    return {
        type: 'ADDNOTIF',
        notification
    }
}

export const deleteNotification = () => {
    console.log('removed', new Date())
    return {
        type: 'REMOVENOTIF'
    }
}

let timeoutId = 0

export const setNotification = (notification, time) => {
    window.clearTimeout(timeoutId)
    return async dispatch => {
        dispatch({
            type: 'ADDNOTIF',
            notification
        })
        timeoutId = setTimeout(() => {
            dispatch({
                type: 'REMOVENOTIF'
            })
        }, time)
    }
}

export default reducer