import Link from 'next/link'
import React from 'react'

const Header = ({currentPage}) => {
  return (
    <div className="header">
        <div className="logo-container">
            <img src="./assets/shared/logo.svg" alt="logo" className='logo'/>
            <hr className="line hidden tablet:block"></hr>
        </div>
        <nav className='nav'>
            <ul className="nav-list">
                <li className={currentPage === "home" ? "active" : ""}> <Link href="/"> <span>{currentPage === "home" ? "" : "00"}</span> Home</Link></li>
                <li className={currentPage === "destination" ? "active" : ""}> <Link href="/destination"> <span>{currentPage === "destination" ? "" : "01"}</span> Destination</Link></li>
                <li className={currentPage === "crew" ? "active" : ""}> <Link href="/crew"> <span>{currentPage === "crew" ? "" : "02"}</span> Crew</Link></li>
                <li className={currentPage === "technology" ? "active" : ""}> <Link href="/technology"> <span>{currentPage === "technology" ? "" : "03"}</span> Technology</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header