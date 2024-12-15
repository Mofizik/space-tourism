'use client'
import React, { useState, useEffect, useRef } from 'react';

const imageWidth = window.innerWidth > 1024 ? 528 : (window.innerWidth - 80);
const Content = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [data, setData] = useState(null);
    const [active, setActive] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false); // State for animation control
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const containerRef = useRef(null);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setData(data.destinations))
            .catch(err => console.log(err));
    }, []);

    if (!data || data.length === 0) {
        return <div>Loading...</div>;
    }

    const handleScroll = (scrollAmount) => {
        const newScrollPosition = scrollPosition + scrollAmount;
        setScrollPosition(newScrollPosition);
        containerRef.current.scrollLeft = newScrollPosition;
    };

    const handleChangeActive = (index) => {
        if (index === active || isAnimating) return; // Prevent duplicate or overlapping animations

        setIsAnimating(true);

        setTimeout(() => {
            setActive(index);
            setIsAnimating(false); // End animation after transition duration
        }, 200); // Match the CSS transition duration
    };

    return (
        <div className="page-content-container">
            <div className="page-content-center flex flex-col p-10">
                <div className="mt-auto w-full">
                    <h3 className="text-preset-5 white mb-6 desktop:mb-0">
                        <span className="opacity-50 font-medium mr-4">01</span>
                        PICK YOUR DESTINATION
                    </h3>
                </div>
                <div className="h-full box-border flex flex-col desktop:flex-row justify-between gap-8">
                    <div
                        ref={containerRef}
                        className="w-full desktop:w-1/2 h-full flex flex-col justify-center"
                        style={{
                            overflowX: 'scroll',
                            scrollBehavior: 'smooth',
                        }}
                    >
                        <div className="content-box">
                            {data.map((item, index) => (
                                <img
                                    key={index}
                                    src={item.images.webp}
                                    alt={item.name}
                                    className={`dest-image ${index === active ? 'active' : ''}`}
                                />
                            ))}
                            <div className="opacity-0">f</div>
                        </div>
                        
                    </div>
                    <div className="w-full desktop:w-1/2 h-full flex flex-col justify-center">
                        <div style={{ height: '480px' }}>
                            <div className="dest-list">
                                {data.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`text-preset-8 ${index === active ? 'active' : ''}`}
                                        onClick={() => {
                                            handleChangeActive(index);
                                            handleScroll(imageWidth * (index - active));
                                        }}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                            </div>
                            <div
                                className={`dest-info ${isAnimating ? 'fade-out' : 'fade-in'}`}
                            >
                                <h2 className="text-center desktop:text-left text-preset-2 uppercase mb-0">
                                    {data[active].name}
                                </h2>
                                <p className="text-center desktop:text-left text-preset-9 mb-8">
                                    {data[active].description}
                                </p>
                                {window.innerWidth < 900 ? <hr className='opacity-25 mb-6'></hr> : null}
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="text-center desktop:text-left text-preset-5">AVG. DISTANCE</h3>
                                        <h2 className="text-center desktop:text-left text-preset-6 uppercase desktop:normal-case">{data[active].distance}</h2>
                                    </div>
                                    <div>
                                        <div className="text-center desktop:text-left text-preset-5">EST. TRAVEL TIME</div>
                                        <div className="text-center desktop:text-left text-preset-6 uppercase desktop:normal-case">{data[active].travel}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
