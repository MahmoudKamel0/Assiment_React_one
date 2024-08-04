import React from 'react'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'

// Stylesheets website project React js
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './App.css'

// Components website project React js
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contanct/Contact.jsx'


// Routing
const Routing = createBrowserRouter(
[
       {element: <Layout /> , children: [
                     {path: '' , element: <Home />},    
                     {path: 'Portfolio' , element: <Portfolio />},
                     {path: 'About' , element: <About />},
                     {path: 'Contact' , element: <Contact />},
       ]},
]
)

export default function App() {

  return (
       <React.StrictMode>
              <RouterProvider router={Routing}></RouterProvider>
       </React.StrictMode>
  )
}


