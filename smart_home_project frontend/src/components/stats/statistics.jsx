import TEMPCHART from "../tempchart/Tempchart"
import Dpowercons from "../dpowercons/dpowercons"
import {useDevices} from "../../DevicesContext"
import {useEffect} from "react"
import axios from 'axios';
import { useState } from "react";

function statistics() {
    const {devices,setDevices}=useDevices();
    const baseurl="http://localhost:3000"
    const[loading,setLoading]=useState('true')
    useEffect(()=> {
        const getDevices = async () => {
            const response= await axios.get(`${baseurl}/devices` )
            setDevices(response.data.devices)
            setLoading(false)
           
        }
          getDevices();
      },[])

      if(loading){
        return <div className="loading">Loading...</div>
      }

    return (
        <div className="statistics">
            <h1 className="font-semibold">Statistics</h1>
            <TEMPCHART/>
            {devices.map((device)=>(
                <Dpowercons key={device._id} title={"Power consumption - " + device.name}/>
            )
            )}
        </div>
    )
}

export default statistics