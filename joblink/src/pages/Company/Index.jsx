import React from 'react'
import "./Index.css"
import Search from "../../components/Company/Search/Index"
import Companies from "../../components/Company/Companies/Index"

const Index = () => {
  return (
    <div>
        <Search/>
        <Companies/>
    </div>
  )
}

export default Index