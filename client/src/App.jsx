import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import React from 'react'

const App = () => {
  return (
    <main>
      <Outlet />
      <Footer />
    </main>
  )
}

export default App;