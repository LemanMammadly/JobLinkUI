import React from 'react'
import "./Index.css"
import EmptyList from "../../components/Wishlist/EmptyList/Index"
import FullList from "../../components/Wishlist/FullList/Index"

const Index = () => {
  return (
    <div>
        {/* <EmptyList/> */}
        <FullList/>
    </div>
  )
}

export default Index