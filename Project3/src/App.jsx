import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Card} from './components/Card'

function App() {
  let obj={
    name:"Nityash",
    age:25,
    city:"Bangalore",
    Job:"Software Engineer",
    Company:"AppPerfect"
  }
  let myArr=[400,500,600]
  return (
    <>
      <h1 
      className='bg-green-400 text-black rounded-xl p-4 mb-5'
      >Tailwind Test</h1>
      <Card detailsObj={obj} myArray={myArr} username="Nityash"/>
      <Card/>


    </>
  )
}

export default App
