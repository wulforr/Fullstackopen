import axios from 'axios'

const baseurl = 'http://localhost:3001/persons'

const addContact = (newContact) => {
    console.log('adding contact')
    axios.post(baseurl,newContact)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const deleteContact = (id) => {
    console.log('deleting')
    axios.delete(baseurl+'/'+id)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const updateContact = (id,updatedContact,setMessage) => {
    console.log('updating')
    axios.put(baseurl+'/'+(id+1),updatedContact)
    .then(res => console.log(res))
    .catch(err => {console.log(err)
        setMessage(`${updatedContact.name} has already been removed`)
    })
}

export default {
    addContact,
    deleteContact,
    updateContact
}