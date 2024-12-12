'use client'
import React, { useState } from 'react'
import data from './data'
const Content = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full box-border flex content-center justify-end flex-grow">
        <div className="w-full max-w-7xl h-full box-border gap-8 flex">
            <div className="w-full flex flex-col justify-center">
                    <div className="flex gap-16">
                        <div>
                            <div className="technology-list">
                                {data.map((item, index) => (
                                    <li key={index} className={active === index ? "technology-list-item active" : "technology-list-item"} onClick={() => setActive(index)}> <div className="text-preset-4">{index + 1}</div></li>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="text-preset-4 opacity-50 uppercase">the terminology...</div>
                            <div className="text-preset-3 uppercase">{data[active].name}</div>
                            <p className="text-preset-9">{data[active].description}</p>
                        </div>
                                    </div>
                    </div>
                    <div className="technology-image">
                    <img src={data[active].images.portrait} alt={data[active].name} className='w-full'></img>
                    </div>
        </div>
    </div>
  )
}

export default Content