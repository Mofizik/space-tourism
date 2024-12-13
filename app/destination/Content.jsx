'use client'
import React, { useState, useEffect, useRef } from 'react';

const imageWidth = 544;
const Content = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [data, setData] = useState(null);
    const [active, setActive] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false); // State for animation control

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
            <div className="page-content-center flex flex-col">
                <div className="slogan mt-auto w-full">
                    <h3 className="text-preset-5 white">
                        <span className="opacity-50 font-medium mr-4">01</span>
                        PICK YOUR DESTINATION
                    </h3>
                </div>
                <div className="h-full box-border flex justify-between gap-8">
                    <div
                        ref={containerRef}
                        className="w-1/2 h-full flex flex-col justify-center"
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
                                    style={{ width: '480px', height: '480px' }}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex flex-col justify-center">
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
                                <h2 className="text-preset-2 uppercase mb-0">
                                    {data[active].name}
                                </h2>
                                <p className="text-preset-9 mb-8">
                                    {data[active].description}
                                </p>
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="text-preset-5">AVG. DISTANCE</h3>
                                        <h2 className="text-preset-6">{data[active].distance}</h2>
                                    </div>
                                    <div>
                                        <div className="text-preset-5">EST. TRAVEL TIME</div>
                                        <div className="text-preset-6">{data[active].travel}</div>
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
