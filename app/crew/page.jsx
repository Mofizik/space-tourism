import React from 'react'
import Content from "./Content";
import Header from '../components/Header';
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