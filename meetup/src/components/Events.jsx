import React from 'react'
import events2 from "../assets/events2.gif"
import events1 from "../assets/events1.png"
import events3 from "../assets/events3.jpg"
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4' id='events'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Tech unleased</h3>
        <p className='pt-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p>
        <div>
        <a href="#form" class="hover:underline"><button className='bg-black text-white border-black hover:shadow-xl'>Register Now</button></a>
        {/* <Link to="/form"><button className='bg-black text-white border-black hover:shadow-xl'>Register Now</button></Link> */}
        </div>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='object-cover w-full h-full'
          src={events2}
          alt='/'
        />
        <img
        className='row-span-2 object-cover w-full h-full'
          src={events3}
        />
        <img
        className='object-cover w-full h-full'
          src={events1}
          alt='/'
        />
        
      </div>
    </div>
  )
}

export default Events