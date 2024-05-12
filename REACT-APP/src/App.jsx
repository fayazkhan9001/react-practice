import Home from "./pages/Home"

function App() {
  
  let products = [
    {
      title:'product-1',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      Image:'/images/burger.png',
      price: "Price : " + 300 
    },
    {
      title:'product-2',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      Image:'/images/burger2.png',
      price: "Price : " + 760 
    },
    {
      title:'product-3',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      Image:'/images/burger.png',
      price: "Price : " + 1300 
    },
    {
      title:'product-4',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      Image:'/images/burger2.png',
      price: "Price : " + 800 
    }
  ]

  return (
    <>
     <Home products = {products} />
    </>
  )
}

export default App
