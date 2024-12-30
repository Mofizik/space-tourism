'use client'
import React, { useState } from 'react'
import data from './data'
const Content = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="page-content-container">
        <div className="w-full max-w-6xl box-border p-6 ">
                <div className="desktop:mt-auto w-full mb-10">
                    <h3 className="text-preset-5 white  desktop:mb-0 uppercase">
                        <span className="opacity-50 font-medium mr-4">03</span>
                        space launch 101
                    </h3>
                </div>
            <div className="w-full max-w-7xl gap-8 flex flex-col-reverse desktop:flex-row">
                <div className="w-full  box-border flex flex-col justify-center">
                        <div className="flex flex-col desktop:flex-row gap-16 relative desktop:h-full">
                            <div>
                                <div className="technology-list">
                                    {data.map((item, index) => (
                                        <li key={index} className={active === index ? "technology-list-item active" : "technology-list-item"} onClick={() => setActive(index)}> <div className="text-preset-4">{index + 1}</div></li>
                                    ))}
                                </div>
                            </div>
                            <div className="max-w-lg desktop:max-w-xl mx-auto desktop:mx-0">
                                <div className="text-center desktop:text-left text-preset-4 opacity-50 uppercase">the terminology...</div>
                                <div className="text-center desktop:text-left text-preset-3 uppercase">{data[active].name}</div>
                                <p className="text-center desktop:text-left text-preset-9">{data[active].description}</p>
                            </div>
                                        </div>
                        </div>
                        <div className="technology-image-container">
                        <img src={data[active].images.portrait} alt={data[active].name} className='w-full technology-image'></img>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default Content