import { useState,useEffect } from "react"
import s from "./settings.module.css"
import axios from "axios"
import {useDevices} from "../../DevicesContext"
import Editdevice from "../editdevice/editdevice"
import Deletedevice from "../deletedevice/deletedevice"




function Settings(){
    const {devices,setDevices}=useDevices();
    
    const baseurl="http://localhost:3000"
    const [formdata,setformdata]= useState({
        location:"Living Room"
    })
    const handledevicedata=(e)=>{
        setformdata(
            {
                ...formdata,
                [e.currentTarget.id]:e.currentTarget.value,
            }
        )
        }

     const handledevicesubmit=async (e,formdata)=>{
        e.preventDefault()
        function isValidURL() {
            // Regular expression to match a URL pattern
            var urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)?([\w-]+\.\w{2,})(\/[\w-]+(\.[\w-]+)*)*\/?(\?\S*)?(#\S*)?$/;
          
            // Test the input against the regular expression
            return urlPattern.test(formdata.image);
          }

          if(!isValidURL()){
            alert("Enter a valid url")
            return
          }

        try{
        
        const newdevice={
        name:formdata.name,
        state:false,
        image:formdata.image,
        location:formdata.location
        }
        const response= await axios.post(`${baseurl}/adddevice`,newdevice)
        setDevices(response.data.devices)
        alert("Device added successfully")
        
        }

        catch(error){
        alert("An error occured while trying to add devices")
        throw error
        }
    }

    useEffect(()=> {
        const getDevices = async () => {
            const response= await axios.get(`${baseurl}/devices` )
            setDevices(response.data.devices)
           
        }
          getDevices();
      },[])
   
        
        
    return(
        <div className="settings">
        <h1 className="font-semibold">Settings</h1>
        <span className="mt-10 text-xs">Add device</span>
        <form className=" flex items-center mb-5  gap-x-2 gap-y-2 mt-1 " onSubmit={(e)=>handledevicesubmit(e,formdata)}>
            
            <input type="text" id="name"  placeholder="device name" onChange={handledevicedata}></input>
            <input type="text" id="image"  placeholder="image url" onChange={handledevicedata}></input>
            <select id="location" value={formdata.location} onChange={handledevicedata}>
                <option value="Living Room">Living Room</option>
                <option value="Bed Room">Bed Room</option>
            </select>
            
            
            <button disabled={Object.keys(formdata).length !== 3} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-[5px] px-[15px] rounded-full text-[20px] ">
            Add
            </button>
           
        </form>
        <Editdevice/>
        <Deletedevice/>
        
        </div>
    )
}

export default Settings