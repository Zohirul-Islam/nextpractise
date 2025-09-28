import React from 'react'

const Item = ({name,des}) => {
  return (
    <div>
        <h3>{name}</h3>
        <p>{des}</p>
    </div>
  )
}

export default Item