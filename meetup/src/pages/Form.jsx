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
    about: "",
    msg: "",


    
  });
  const [name, SetName] = useState("")
    const [message, setMessage] = useState("")
  const [showAlert, setShowAlert] = useState(false);
  const {firstName, lastName, email, phoneNumber, state, district, stack, about, msg} = data
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value});
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // const serviceId = "service_3xkrl1e";
    // const templateId = "template_rnj4g7e";
    // const publicKey = "qaAIGNaj_bDYz6tqb";

    try{
      const response = await fetch('https://v1.nocodeapi.com/julietowah/google_sheets/NQqLSnyPivYGqeik?tabId=sheet1',{
        method: 'POST',
        headers:{
          "content-type":"application/json",
        },
        body: JSON.stringify([[firstName, lastName, email, phoneNumber, state, district, stack, about, msg, new Date().toLocaleString()],
      ]),
      
      }
      );
    await response.json();
    setData({ ...data, firstName: "", lastName: "", email: "", phoneNumber: "", state:"", district:"", stack: "", about: "", msg: "",});
    
  } catch (err) {
      console.log(err)
    }
    const templateParams ={
      to_email:email,
      from_name: "atm Awka",
      from_email: email,
      to_name: firstName,
      message: "welcome to Tech unleased 2023 Join us as we redefine the boundaries of innovation and shape the digital frontier together. The future is waiting, and at 'Empowering Tomorrow,' we're not just witnessing it we're crafting it",
    };
    emailjs.send('service_3xkrl1e', 'template_rnj4g7e', templateParams, 'qaAIGNaj_bDYz6tqb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setShowAlert(true);
    
    

    // You may want to reset the form data after successful submission
    setData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      state: '',
      district: '',
      stack: '',
      about: '',
      msg: '',
      

    });
  };

  
  
  return (

    <div className="flex items-center justify-center p-4 bg-gray-100 h-full" id='form' >

      
      
      
    <div className="mx-auto w-full max-w-[550px]">
    <Link to="/"><button className='bg-black text-white border-black hover:shadow-xl'>Back Home</button></Link>
     <h2 className='font-bold  md:text-7xlcdrop-shaddow-2xl py-10 text-3xl text-[#07074D]'>Register for the event</h2>

     {showAlert && (
        <div className="alert alert-success m-6 shadow-lg shadow-blue-500/50 font-semibold p-2 rounded text-center bg-green-500 text-white" role="alert">
        email successfully sent check  your inbox
          
        </div>
      )}

<div className="max-w-2xl mx-auto bg-white p-5">

	<form onSubmit={handleSubmit} > 
    <div className="grid gap-6 mb-6 lg:grid-cols-2 ">
        <div>
            <label For="firstname" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">First name</label>
            <input value={firstName}
  onChange={handleChange} name="firstName" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="first name" required />
        </div>
        <div>
            <label For="lastname" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Last name</label>
            <input value={lastName}
  onChange={handleChange} name="lastName" type="text" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="last name" required />
        </div>
        <div>
            <label For="phone" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Phone number</label>
            <input value={phoneNumber}
  onChange={handleChange} name="phoneNumber" type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="08078554668" required />
        </div>
        <div>
            <label For="email" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Email</label>
            <input  value={email}
  onChange={handleChange} name="email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your email" required />
            
        </div>  
        
        
        
        <div>
            <label For="state" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Your State</label>
            <input value={state}
  onChange={handleChange} name="state" type="text" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="which state are you from" required />
        </div>
        <div>
            <label For="your Area" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">District</label>
            <input value={district}
  onChange={handleChange} name="district" type="text" id="district" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your city/area" required />
        </div>
    </div>
    <div className="mb-6">
        <label For="stack" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Your stack</label>
        <input value={stack}
  onChange={handleChange}  name="stack" type="text" id="stack" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="aspiring/main stack" required />
    </div> 
    <div className="mb-6">
        <label For="about" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">How did you hear about this Event</label>
        <input value={about}
  onChange={handleChange}  name="about" type="text" id="stackabout" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="How did you hear about this Event" required />
    </div> 
    <div className="mb-6">
        <label For="msg" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Tell us about your aspirations</label>
        <textarea value={msg}
  onChange={handleChange}  name="msg" id="message" rows="10" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your aspirations here..."></textarea>
    </div> 
    
     
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
 
	
	
</div>
</div>
</div>

    

  
  )
            }

export default Form