import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function Home({products}) {

  return (
    <>
        <Header />
        <Main products={products} />
        <Footer />
    </>
  )
}

export default Home