import { useEffect, useState } from "react"
import Home from "./pages/Home"

function App() {
  let [products, setProducts] = useState([]);

useEffect(()=>{
  let prods = JSON.parse(window.localStorage.getItem("Products"));
   setProducts( prods);
  
}, [])


  return (
    <>
     <Home products = {products} />

     {/* <button onClick={handleClick}>click</button> */}
    </>
  )
}

export default App
