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
    return {
        type: 'REMOVENOTIF'
    }
}

export default reducer