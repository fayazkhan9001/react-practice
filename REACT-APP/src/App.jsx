import React from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);


export default function App() {

  return (
    <div>
       <RouterProvider router={router}/>
    </div>
  )
}
