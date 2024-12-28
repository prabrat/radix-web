import React from 'react'

function credItem({ image, name }) {
  return (
    <div className='credItem'>
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1> {name} </h1> 
    </div>
  )
}

export default credItem
