import React from 'react'
import Link from 'next/link'
const HomePageContent = () => {
  return (
    <div className="page-content-container">
        <div className={"page-content-center py-32 flex desktop:justify-between home-page"}>
            <div className={"slogan desktop:mt-auto"}>
                <h3 className='text-preset-5'>SO, YOU WANT TO TRAVEL TO</h3>
                <h1 className='text-preset-1'>SPACE</h1>  
                <p className='description'>Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!</p>    
            </div>
            <div className={"explore-container desktop:mt-auto"}>
                
                <Link href="/destination">
                    <div className="explore">
                            <h2 className={"text-preset-4 black"}>EXPLORE</h2>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HomePageContent