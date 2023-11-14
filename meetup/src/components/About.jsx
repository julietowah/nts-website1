import React from 'react'
import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpeg"
import img3 from "../assets/img3.jpeg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"

const About = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4' id='about'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src={img1}
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={img2}
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={img3}
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src={img4}
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={img5}
          alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Awka tech community</h3>
        <p className='text-2xl py-6'>
        Our tech community is a vibrant ecosystem where enthusiasts, professionals,
         and visionaries converge to shape the future. With a passion for technology that knows no bounds, we foster 
        an environment that thrives on collaboration, learning, and exploration.
        </p>
        <p className='pb-6'>
        From coding novices to seasoned experts, our diverse community celebrates 
        inclusivity and knowledge 
        sharing. Engage in thought-provoking discussions, attend dynamic workshops, 
        and join hackathons that fuel creativity.

Our platform isn't just about bits and bytes; it's a launchpad for groundbreaking 
ideas, disruptive solutions, and trailblazing projects. Embrace the ever-evolving 
tech landscape with us and be a part of something extraordinary.

Join us in shaping tomorrow's world, one line of code at a time. 
The future of technology awaits your unique perspective and contributions.
        </p>
        
      </div>
    </div>
  )
}

export default About