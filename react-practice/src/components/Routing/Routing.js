import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import Error from './pages/Error'

import Navba from './Navbar'

const Routing = () => {
  return (
    <div>
      {/* <h1>Routing............</h1> */}
      <Navba />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home />}/>
            <Route path='/contact' element={ <Contact />}/>
            <Route path='/blogs' element={ <Blogs />}/>
            <Route path='*' element={ <Error />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
