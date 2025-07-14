import React from 'react'
import { Outlet } from 'react-router-dom'
import DoubleHeader from './components/Navbar/DoubleHeader'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <>
      <DoubleHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
