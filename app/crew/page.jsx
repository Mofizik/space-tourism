import React from 'react'
import Header from "../components/Header";
import Content from "./Content";
const page = () => {
  return (
    <div className="body">
      <div className="bg crew-screen relative">
        <Header currentPage="crew" />
        <Content />
      </div>
    </div>
  )
}

export default page