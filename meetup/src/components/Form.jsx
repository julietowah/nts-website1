import React from 'react'
import { useState } from 'react';
import { render } from '@react-email/render';
const Form = () => {
  
  
  return (

    <div class="flex items-center justify-center p-12 bg-gray-100" id='form'>
      
      
      <div class="mx-auto w-full max-w-[550px]">
      <h2 className='font-bold  md:text-7xlcdrop-shaddow-2xl py-10 text-3xl text-[#07074D]'>Register for the event</h2>
        <form action="https://formbold.com/s/FORM_ID" method="POST" onSubmit="">
          <div class="mb-5">
            <label
              for="firstname"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              First Name
            </label>
            <input
             
              type="text"
              name="firstName"
              id="firstname"
              placeholder="First Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="lastname"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Last Name
            </label>
            <input
              
              type="text"
              name="lastName"
              id="lastname"
              placeholder="Last Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="phone"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone
            </label>
            <input
              
              type="number"
              name="phoneNumber"
              id="number"
              placeholder="Enter your phone number"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          
          <div>
            <button
              type="submit" class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
            
          </div>
        </form>
      </div>
    </div>
  )
            }

export default Form