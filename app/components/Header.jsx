import React from 'react'

const Header = ({currentPage}) => {
  return (
    <div className="header">
        <div className="logo-container">
            <img src="./assets/shared/logo.svg" alt="logo" className='logo'/>
            <hr className="line"></hr>
        </div>
        <nav className='nav'>
            <ul className="nav-list">
                <li className={currentPage === "home" ? "active" : ""}> <a href="/"> <span>00</span> Home</a></li>
                <li className={currentPage === "destination" ? "active" : ""}> <a href="/destination"> <span>01</span> Destination</a></li>
                <li className={currentPage === "crew" ? "active" : ""}> <a href="/crew"> <span>02</span> Crew</a></li>
                <li className={currentPage === "technology" ? "active" : ""}> <a href="/technology"> <span>03</span> Technology</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header