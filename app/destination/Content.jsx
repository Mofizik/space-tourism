'use client'
import React, { useState, useEffect } from 'react'

const Content = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
      fetch('/data.json')
      .then(res => res.json())
      .then(data => setData(data.destinations))
      .catch(err => console.log(err))
  })
  return (
    <div className="page-content-container">
        <div className="page-content-center">
            <div className={"slogan mt-auto w-full"}>
                <h3 className={'text-preset-5 white'}><span className={"opacity-50 font-medium mr-4"}>01</span>PICK YOUR DESTINATION</h3>
            </div>
            <div className={"flex justify-between gap-8"}>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Content