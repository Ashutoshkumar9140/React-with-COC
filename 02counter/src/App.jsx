import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(20)
  const addValue = ()=>{
    if(value<20){
      setValue(value+1)
    }
    
  }
  const removeValue = ()=>{
    if(value>0){
      setValue(value-1)
    }
    
  }
  

  return (
   <> 
   <h1>hello ashu</h1>
   <h2>counter value: {value}</h2>
   <button onClick={addValue}>Add Value</button>
   <br />
   <button onClick={removeValue}>Remove Value</button>
   </>
  )
}

export default App
