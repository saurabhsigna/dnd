"use client"
import React,{useState} from 'react';

export default function App() {
 
 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")
 
 const submitLogin = (e)=>{
     e.preventDefault()
     
 }
 
  return (
  
    <div>
   
      <section className="py-24 lg:py-28 bg-black overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading mb-4 text-6xl text-white tracking-tighter">Welcome Back!</h2>
            <p className="mb-16 text-xl text-white tracking-tight">Use and re-use tons of responsive sections too a main create the perfect layout. Sections are ready.</p>
            <form className="flex flex-wrap -m-3" onSubmit={submitLogin} action="#">
              <div className="w-full md:w-1/2 p-3">
                <label className="block">
                  <input className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200"
                   onChange={(e)=>setPassword(e.target.value)}
                   id="signInInput1-1" type="email" placeholder="Email Address" />
                </label>
              </div>
              <div className="w-full md:w-1/2 p-3">
                <label className="block">
                  <input className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200" id="signInInput1-2"
                  onChange={(e)=>setPassword(e.target.value)}
                   type="password" placeholder="Password" />
                </label>
              </div>
              <div className="w-full p-3">
                <div className="flex flex-wrap justify-between -m-2">
                  <div className="w-auto p-2">
                    <div className="relative flex items-center p-px bg-transparent overflow-hidden rounded-lg">
                      <input className="form-input opacity-0 absolute z-10 h-5 w-5" id="signInCheckbox1-1" type="checkbox" name="confirm" value="yes" />
                      <div className="mr-2.5 text-transparent border border-gray-500 w-5 h-5 flex justify-center items-center rounded">
                        <svg className="w-2.5 h-2.5" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.604248 3.77081L2.68758 5.85415L7.89591 0.645813" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <label className="relative z-10 text-white tracking-tight" htmlFor="signInCheckbox1-1">Remember me</label>
                    </div>
                  </div>
                  <div className="w-auto p-2"><a className="text-white hover:text-gray-200 tracking-tight" href="#">Forgot Password?</a></div>
                </div>
              </div>
              <button type="submit" className="w-full p-3  inline-block mb-7 px-5 py-4 w-full text-white text-center font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200">Sign In</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
