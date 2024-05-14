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
import NotFoud from './pages/NotFoud.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/contact' element={<Contact/>}  />

      <Route path='*' element={<NotFoud/>}  />

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
