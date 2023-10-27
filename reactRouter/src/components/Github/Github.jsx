import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
//     const [data,setData]= useState([]);
//     useEffect(() => {
//         fetch('https://api.github.com/users/nits1732')
//         .then(response=>response.json())
//         .then(data=>{
//             console.log(data)
//             setData(data)
//         })
//     }, [])
    const data = useLoaderData()
  return (
    <div className='bg-orange-700 text-center m-4 p-4 text-white text-3xl'>
      Github Followers :{data.followers} 
      <div className='flex flex-wrap justify-center mt-2 pt-2 box-border border-white border-spacing-5'><img src={data.avatar_url} alt="Github Profile Pic"  width='300px'/></div>
    </div>
  )
}

export default Github

export const  githubInfo = async ()=>{
    const response=await fetch('https://api.github.com/users/nits1732')
    return response.json()
}