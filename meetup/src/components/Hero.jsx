import React from 'react'
import background from "../assets/background.jpeg"
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css'
import 'animate.css/animate.min.css';

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className="top-0 left-0 w-full h-screen object-cover animate__animated animate__zoomIn" src={background}/>
        <div className='bg-black/80 absolute top-0 left-0 w-full h-screen'/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p className='animate__animated animate__zoomIn font-normal'>Welcome to</p>
                <h1 className='font-bold text-5xl md:text-7xlc drop-shaddow-2xl font-serif animate__animated animate__zoomIn'>Awka tech meetup community</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-2xl font-serif animate__animated animate__zoomIn'>Join us for an electrifying blend of tech talks,
                     networking, and cutting-edge insights.
                      Connect with industry pioneers, dive 
                      into immersive workshops, and spark the next wave of innovation. Let's shape the future together! 
                    </p>
                     <Link to="/form"><button className='bg-white text-black animate__animated animate__zoomIn'>Register Now</button></Link> 
                    {/* <a href="#form" class="hover:underline"><button className='bg-white text-black'>Register Now</button></a> */}
          

            </div>
        </div>
    </div>
  )
};

export default Hero