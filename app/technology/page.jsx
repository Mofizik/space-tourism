import React from 'react'
import Header from "../components/Header";
import Content from "./Content";
const page = () => {
  return (
    <div className="body">
      <div className="bg technology-screen">
        <Header currentPage="technology" />
        <Content />
      </div>
    </div>
  )
}

export default page