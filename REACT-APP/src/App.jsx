import { useEffect, useState } from "react"
import Home from "./pages/Home"

function App() {
  let [products, setProducts] = useState([]);

  let [n, setN] = useState(0);

useEffect(()=>{
  let prods = JSON.parse(window.localStorage.getItem("Products"));
   setProducts( prods);
  
}, [])

let handleClick = ()=>{
  setN(++n);
}


  return (
    <>
    <h1>{n}</h1>
     <button onClick={handleClick}>click</button>

     <Home products = {products} />
  
    </>
  )
}

export default App
