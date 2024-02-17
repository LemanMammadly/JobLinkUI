import React from 'react'
import "./Index.css"
import { CiSearch } from 'react-icons/ci'

const Index = () => {
  return (
    <section className='industry-search py-lg-3 px-lg-5 px-md-3 py-md-1 px-2 py-2 col-lg-12'>
        <div className="left-search-industry col-lg-4">
            <h1 className='industry-text'>Sənaye</h1>
        </div>
        <div className="right-search-industry d-flex align-items-center justify-content-between col-lg-4">
            <input className='input-text' type="text" placeholder='Sənaye üzrə axtar'/>
            <CiSearch className='search-icon' />
        </div>
    </section>
  )
}

export default Index