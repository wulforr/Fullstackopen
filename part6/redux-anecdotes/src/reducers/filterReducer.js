const reducer = (state = '', action) => {
    switch(action.type){
        case 'FILTERUPDATE' : return action.formValue
        default: return state 
    }
}

export const filterUpdate = (formValue) => {
    return {
        type: 'FILTERUPDATE',
        formValue
    }
}

export default reducer