import React from 'react'
import "./Index.css"
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <section className='not-found'>
        <div className="all-not-found">
            <img src="https://classic.jobsearch.az/simple/images/not-found.png" alt="" />
            <h1>Something’s missing</h1>
            <p>We can’t seem to find the page you are looking for</p>
            <Link to='/'>Go to home</Link>
        </div>
    </section>
  )
}

export default Index