import React from 'react'
import { useState, useEffect } from 'react'
import { BsArrowUpCircleFill } from "react-icons/bs"

const BacktoTop = () => {
    const [backToTopButton, SetBackToTopButton] = useState(false);
    useEffect (() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                SetBackToTopButton(true)

            }else{
                SetBackToTopButton(false)
            }
        })

    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 100,
            behavior: "smooth"
        })
    }
  return (
    <div>
    {backToTopButton && (
        <BsArrowUpCircleFill onClick={scrollUp} style={{position: 'fixed',
         bottom:'50px',
        right:'50px',
        height:'50px',
        width: '50px',
        fontSize:"50px" 
        }}/>
    )}
    </div>
    
  )
}

export default BacktoTop
