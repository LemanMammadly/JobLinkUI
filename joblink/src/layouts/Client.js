import React from 'react'
import Header from "../components/Header/Index.jsx"
import  {Outlet}  from 'react-router-dom'

const Client = () => {
  return (
    <div>
        <Header/>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Client