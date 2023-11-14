import React from 'react'
import { useState,  useRef } from 'react';
import emailjs from "@emailjs/browser";
import { Link } from 'react-router-dom'



const Form = () => {
  // const form = useRef();
  const[data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    state: "",
    district: "",
    stack: "",


    
  });
  const [showAlert, setShowAlert] = useState(false);
  const {firstName, lastName, email, phoneNumber, state, district, stack} = data
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value});
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const response = await fetch('https://v1.nocodeapi.com/julietowah/google_sheets/NQqLSnyPivYGqeik?tabId=sheet1',{
        method: 'POST',
        headers:{
          "content-type":"application/json",
        },
        body: JSON.stringify([[firstName, lastName, email, phoneNumber, state, district, stack, new Date().toLocaleString()],
      ]),
      
      }
      );
    await response.json();
    setData({ ...data, firstName: "", lastName: "", email: "", phoneNumber: "", state:"", district:"", stack: ""});
  } catch (err) {
      console.log(err)
    }
    // emailjs.sendForm('service_3xkrl1e', 'template_rnj4g7e', form.current, 'qaAIGNaj_bDYz6tqb')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
    setShowAlert(true);

    // You may want to reset the form data after successful submission
    setData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    });
  };

  
  
  return (

    <div class="flex items-center justify-center p-4 bg-gray-100 h-full" id='form' >

      
      
      
    <div class="mx-auto w-full max-w-[550px]">
    <Link to="/"><button className='bg-black text-white border-black hover:shadow-xl'>Back Home</button></Link>
     <h2 className='font-bold  md:text-7xlcdrop-shaddow-2xl py-10 text-3xl text-[#07074D]'>Register for the event</h2>

     {showAlert && (
        <div className="alert alert-success m-6 shadow-lg shadow-blue-500/50 font-semibold p-2 rounded text-center bg-green-500 text-white" role="alert">
          Your form was submitted successfully! 
          
        </div>
      )}

<div class="max-w-2xl mx-auto bg-white p-5">

	<form onSubmit={handleSubmit}> 
    <div class="grid gap-6 mb-6 lg:grid-cols-2 ">
        <div>
            <label for="firstname" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">First name</label>
            <input value={firstName}
  onChange={handleChange} name="firstName" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="first name" required />
        </div>
        <div>
            <label for="lastname" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Last name</label>
            <input value={lastName}
  onChange={handleChange} name="lastName" type="text" id="lastname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="last name" required />
        </div>
        <div>
            <label for="phone" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Phone number</label>
            <input value={phoneNumber}
  onChange={handleChange} name="phoneNumber" type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="08078554668" required />
        </div>
        <div>
            <label for="email" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Email</label>
            <input  value={email}
  onChange={handleChange} name="email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your email" required />
            
        </div>  
        
        
        
        <div>
            <label for="state" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Your State</label>
            <input value={state}
  onChange={handleChange} name="state" type="text" id="state" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="which state are you from" required />
        </div>
        <div>
            <label for="your Area" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">District</label>
            <input value={district}
  onChange={handleChange} name="district" type="text" id="district" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your city/area" required />
        </div>
    </div>
    <div class="mb-6">
        <label for="stack" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Your stack</label>
        <input value={stack}
  onChange={handleChange}  name="stack" type="text" id="stack" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="aspiring/main stack" required />
    </div> 
    
     
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
 
	
	
</div>
</div>
</div>

    

  
  )
            }

export default Form