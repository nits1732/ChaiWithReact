import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userid}=useParams()
  return (
    <div>
      <h1 className='bg-orange-700 text-white p-4 m-2 text-center uppercase'> user : {userid}</h1>
    </div>
  )
}

export default User
