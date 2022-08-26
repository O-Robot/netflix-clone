import React, { useEffect, useState } from 'react'
import "./TopScroll.css"

const TopScroll = () => {
    const [isVisible, setIsvisible] = useState(false)

    const toggleVisibility = () => {
        if(window.pageYOffset > 300) {
            setIsvisible(true)
        } else {
            setIsvisible(false)
        }
    }

    const topScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, []);
    
  return (
    <div className='scroll-to-top'>
      {isVisible && (
        <div onClick={topScroll}>
            <i className='fas fa-arrow-circle-up fa-3x'></i>
        </div>
      )}
    </div>
  )
}

export default TopScroll
