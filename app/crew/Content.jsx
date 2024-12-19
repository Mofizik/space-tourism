'use client'
import React, { useState } from 'react'
import data from './data'
const Content = () => {
  const [active, setActive] = useState(0);
  console.log(data)
  return (
    <div className="page-content-container">
        <div className="page-content-center flex flex-col p-10 pb-0">
            <div className={"mt-auto w-full"}>
                <h3 className={'text-preset-5 white mb-6 desktop:mb-0 uppercase'}>
                    <span className={"opacity-50 font-medium mr-4"}>02</span>
                    meet your crew
                </h3>
            </div>
            <div className={"h-full box-border flex flex-col desktop:flex-row justify-between gap-8"}>  
               <div className="w-full desktop:w-1/2 flex flex-col justify-center max-w-lg mx-auto desktop:mx-0">
                    <div className="mb-8 desktop:mb-0">
                        <div className="text-center desktop:text-left text-preset-4 uppercase crew-role">{data[active].role}</div>
                        <div className="text-center desktop:text-left text-preset-3 uppercase">
                            {data[active].name}
                        </div>
                        <p className="text-center desktop:text-left text-preset-9">{data[active].bio}</p>
                    </div>
                    <div className="mx-auto desktop:mx-0 crew-list desktop:absolute bottom-12">
                        {data.map((item, index) => (
                            <li key={index} className={active === index ? "crew-list-item active" : "crew-list-item"} onClick={() => setActive(index)}></li>
                        ))}
                    </div>
               </div> 
               
               <div className="w-full desktop:w-1/2 flex flex-col justify-center relative">
                    <img src={data[active].images.webp} alt={data[active].name} className='crew-image'></img>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Content