"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Button = ({children}) => {
    const router = useRouter();
    const handleClick =()=>{
        router.push('/dashboard')
    }
  return (
    <button onClick={handleClick} className="bg-blue-500 px-3 py-2 rounded mt-5 cursor-pointer text-white">{children}</button>
  )
}

export default Button