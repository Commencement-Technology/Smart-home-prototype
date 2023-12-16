import React, { useState } from "react";
import axios from "axios";


function login(){

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const baseurl="http://localhost:3000"

    const loginuser=async (e)=>{

        e.preventDefault();

        try {
            const response = await axios.post(`${baseurl}/login` , {
              email:email,
              password:password,
            }, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            alert(response.data.message)    
            console.log(response.data.user);
          } catch (error) {
            console.error(error);
            alert(error.response.data.message);
          }
          

    }



    return(

            <form onSubmit={loginuser}>
            <div className="bg-black">
        <div className="flex justify-center container mx-auto my-auto w-[90vw] h-screen items-center flex-col">
            <div className="text-slate-100 items-center">
                <div className="text-center pb-1 mb-4">Welcome back!</div>
            </div>

            <div className="w-full md:w-3/4  lg:w-1/2 flex flex-col items-center bg-gray-300 rounded-md pt-6">
                
                
                <div className="w-3/4 mb-2">
                    <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}  required className="w-full py-2 px-4 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300" placeholder="Email address"/>
                </div>
                
                <div className="w-3/4 mb-2">
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required name="password" id="password" className="w-full py-2 px-4 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500  border-solid border-2 border-slate-300" placeholder="Password"/>
                </div>
              
                <div className="w-3/4 mb-6">
                    <button type="submit" className="py-2 bg-black w-full rounded text-blue-50 font-bold hover:bg-blue-700">LOGIN</button>
                </div>
            </div>
            <div className="flex justify-center container mx-auto mt-2 text-slate-100 text-sm">
                <div className="flex flex-col sm:flex-row  justify-between md:w-1/2 items-center">
                    <div className="flex text-[15px]" >Forgot password?</div>
                    <div className="flex text-[15px]" >Dont have an account? Get Started.</div>
                </div>
            </div>
        </div>
        
        
    </div>
    </form>
        
    )
}

export default login;