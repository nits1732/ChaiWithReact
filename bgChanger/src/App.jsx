import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-500' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 px-3 py-3 shadow-lg bg-white rounded-3xl'>
          <button 
          onClick={()=>{
            setColor("red")
          }}
          className='outline-none px-3 py-3 text-white shadow-lg rounded-xl' style={{backgroundColor:"red"}}>Red
          </button>
          <button
          onClick={()=>{
            setColor("yellow")
          }}
          className='outline-none px-3 py-3 text-white shadow-lg rounded-xl' style={{backgroundColor:"yellow"}}>Yellow
           </button>
          <button 
          onClick={()=>{
            setColor("green")
          }}
          className='outline-none px-3 py-3 text-white shadow-lg rounded-xl' style={{backgroundColor:"green"}}>Green
          </button>
          <button 
          onClick={()=>{
            setColor("blue")
          }}
          className='outline-none px-3 py-3 text-white shadow-lg rounded-xl' style={{backgroundColor:"blue"}}>Blue
          </button>
          <button 
          onClick={()=>{
            setColor("pink")
          }}
          className='outline-none px-3 py-3 text-white shadow-lg rounded-xl' style={{backgroundColor:"pink"}}>Pink
          </button>
          <button 
          onClick={()=>{
            setColor("purple")
          }}
          className='outline-none px-3 py-3 text-white shadow-lg rounded-xl' style={{backgroundColor:"purple"}}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
