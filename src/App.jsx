import image from './villa/villa.jpeg'
import './App.css'
import { useState,useCallback } from 'react'

function App() {
  const [count,setcount] = useState(0)
  function add(){
    return setcount(count+1)
  }
function minus(){
  if(count>0){
    return setcount(count-1)
  }
 
}
  return (
    <>  
    <div className='bg-orange-200 '>
    <h2 className='text-6xl bg-red-400'>current value {count}</h2>
    <br></br>  <br></br>
    <button onClick={add} className='text-4xl font-bold text-orange-500 '>add</button>
    <br></br>
    <button onClick={minus} className='text-4xl font-bold text-yellow-500'>minus</button>
    </div>

      
    </>
  )
}

export default App
