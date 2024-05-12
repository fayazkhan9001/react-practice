import React from 'react'
import Card from './Card'

function Main({products}) {
  return (
    <div className='row'>
       {
        products.map((product)=><Card product={product} />)
       }
    </div>
  )
}

export default Main