import React from 'react'

const layout = ({children,assignments,notifications,quiz}) => {
  return (
    <>
    {children}
    <div className='grid grid-cols-2 grid-rows-2 gap-6 p-8'>
        {assignments}
        {notifications}
        {quiz}
    </div>
    </>
  )
}

export default layout