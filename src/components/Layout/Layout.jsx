import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

export default function Layout() {
       return (
              <React.StrictMode>
                     <Navigation></Navigation>
                     <Outlet></Outlet>
                     <Footer></Footer>
              </React.StrictMode>
       )
}
