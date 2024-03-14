import React from 'react'
import axios from 'axios'

function create() {
  const [task,setTask] = useState()
  const handleAdd = () => {
    axios.post('http://localhost:3001/add',{task: task})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  return (
    <div className='create_form'>
        <input type="text" placeholder='Enter Task' onChange={(e) => setTask(e.targetvalue)}/>
        <button type="button" onClick={handleAdd}>Add</button>    
    </div>
  )
}

export default create