'use client'
import React, { useState, useEffect } from 'react'

const Content = () => {
    const [data, setData] = useState(null);
    const [active, setActive] = useState(0);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setData(data.destinations))
            .catch(err => console.log(err));
    }, []);
    
    // Check whether data is loaded and has elements
    if (!data || data.length === 0) {
        return <div>Loading...</div>; // Show loading or empty state
    }

    return (
        <div className="page-content-container">
            <div className="page-content-center flex flex-col">
                <div className={"slogan mt-auto w-full"}>
                    <h3 className={'text-preset-5 white'}>
                        <span className={"opacity-50 font-medium mr-4"}>01</span>
                        PICK YOUR DESTINATION
                    </h3>
                </div>
                <div className={"h-full box-border flex justify-between gap-8 "}>
                    <div className={"w-1/2 h-full flex align-center justify-center"}>
                        <img src={data[active].images.png} alt={data[active].name} className={"object-contain aspect-square"} style={{width: '480px'}}/>
                    </div>  
                    <div className={"w-1/2 h-full flex flex-col justify-center"}>
                        <div style={{height: '480px'}}>
                            <div className="dest-list">
                                {data.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`text-preset-8 ${index === active ? 'active' : ''}`}
                                        onClick={() => setActive(index)}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                            </div>
                            <div className="dest-info">
                                <h2 className='text-preset-2 uppercase mb-0'>{data[active].name}</h2>
                                <p className='text-preset-9 mb-8'>{data[active].description}</p>
                                <div className='flex justify-between'>
                                    <div>
                                        <h3 className='text-preset-5'>AVG. DISTANCE</h3>
                                        <h2 className='text-preset-6'>{data[active].distance}</h2>
                                    </div>
                                    <div>
                                        <div className='text-preset-5'>EST. TRAVEL TIME</div>
                                        <div className='text-preset-6'>{data[active].travel}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;