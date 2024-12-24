'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Header = ({ currentPage }) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 672);
      setOpen(window.innerWidth > 672);
    };

    // Set initial state after component mounts
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header">
      <div className="logo-container" style={{ width: open && isMobile ? 'auto' : '' }}>
        <img src="./assets/shared/logo.svg" alt="logo" className="logo" />
        <hr className="line hidden desktop:block"></hr>
      </div>
      <nav
        className="nav"
        style={{
          width: open && isMobile ? '66%' : '',
          backgroundColor: open && isMobile ? 'rgba(11, 13, 23, 0.15)' : 'transparent',
          backdropFilter: open ? 'blur(40px)' : 'none',
        }}
      >
        <button className="tablet:hidden" onClick={() => setOpen(!open)}>
          <img
            src={open ? './assets/shared/icon-close.svg' : './assets/shared/icon-hamburger.svg'}
            alt="hamburger"
            className="hamburger"
          ></img>
        </button>
        <ul
          className="nav-list hidded tablet:flex"
          style={{ display: open ? 'flex' : 'none' }}
        >
          <li className={currentPage === 'home' ? 'active' : ''}>
            <Link href="/">
              <span>00</span> Home
            </Link>
          </li>
          <li className={currentPage === 'destination' ? 'active' : ''}>
            <Link href="/destination">
              <span>01</span> Destination
            </Link>
          </li>
          <li className={currentPage === 'crew' ? 'active' : ''}>
            <Link href="/crew">
              <span>02</span> Crew
            </Link>
          </li>
          <li className={currentPage === 'technology' ? 'active' : ''}>
            <Link href="/technology">
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
