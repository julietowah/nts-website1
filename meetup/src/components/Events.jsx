import React from 'react'
import events2 from "../assets/events2.gif"
import events1 from "../assets/events1.png"
import events3 from "../assets/events3.jpg"
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 shadow-lg shadow-indigo-500/50' id='events'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h2 className='text-3xl font-bold  font-serif'>Tech unleashed</h2>
        <p className='pt-4 text-xl font-serif'>
        In this dynamic environment, we invite you to be part of a collective journey where creativity meets cutting-edge technology. From thought-provoking keynotes to hands-on workshops.
        </p>
        <h3 className='font-bold p-2'>Date: 24th Nov 2023 <br/> Venue: </h3>
        <div>
        {/* <a href="#form" class="hover:underline"><button className='bg-black text-white border-black hover:shadow-xl'>Register Now</button></a> */}
        <Link to="/form"><button className='bg-black text-white border-black hover:shadow-xl'>Register Now</button></Link>
        </div>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2 '>
        <img
        className='object-cover w-full h-full rounded-xl'
          src={events2}
          alt='/'
        />
        <img
        className='row-span-2 object-cover w-full h-full rounded-xl'
          src={events3}
        />
        <img
        className='object-cover w-full h-full rounded-xl'
          src={events1}
          alt='/'
        />
        
      </div>
    </div>
  )
}

export default Events