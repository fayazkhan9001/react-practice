import React from 'react'
import Card from './Card'

function Main({products}) {
  return (
    <div className='row'>
       {
        products.map((product, indexNumber)=><Card key={indexNumber} product={product} />)
       }
    </div>
  )
}

export default Main