'use client'
import React, { useState } from 'react'
import data from './data'
const Content = () => {
  const [active, setActive] = useState(0);
  console.log(data)
  return (
    <div className="page-content-container">
        <div className="page-content-center flex flex-col">
            <div className={"slogan mt-auto w-full"}>
                <h3 className={'text-preset-5 white uppercase'}>
                    <span className={"opacity-50 font-medium mr-4"}>02</span>
                    meet your crew
                </h3>
            </div>
            <div className={"h-full box-border flex justify-between gap-8 "}>  
               <div className="w-1/2 flex flex-col justify-center">
                    <div className="">
                        <div className="text-preset-4 uppercase opacity-50">{data[active].role}</div>
                        <div className="text-preset-3 uppercase">
                            {data[active].name}
                        </div>
                        <p className="text-preset-9">{data[active].bio}</p>
                    </div>
                    <div className="crew-list absolute bottom-12">
                        {data.map((item, index) => (
                            <li key={index} className={active === index ? "crew-list-item active" : "crew-list-item"} onClick={() => setActive(index)}></li>
                        ))}
                    </div>
               </div> 
               
               <div className="w-1/2 flex flex-col justify-center">
                    <img src={data[active].images.webp} alt={data[active].name} className='crew-image'></img>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Content