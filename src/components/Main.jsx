import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
   <div className='max-w-[1200px] mx-auto'>
    <div>
        <Navbar/>
    </div>
    <div>
        <Outlet/>
    </div>
   </div>
  )
}

export default Main