import Header from '../header/header'
import DeviceCard from '../card/card'
import Location_chip from '../location_chip/location_chip';
import { useEffect, useState } from 'react';
import Searchbar from '../search bar/searchbar';
import Cammusic from '../cammusic/cammusic';
import axios from 'axios';
import {useDevices} from '../../context/DevicesContext'



function home (){
  const {devices,setDevices}=useDevices();
  const locations=['All','Living Room','Bed Room']
  const [selectedLocation,setLocation]=useState('All')
  const[loading,setLoading]=useState('true')
  const[searchvalue,Setsearchvalue]=useState("")
  const baseurl="http://localhost:3000"

  
  const handleLocationSelect= (location) => {
    setLocation(location)
  }

  const handleSearchValue = (value) => {
    Setsearchvalue(value)
  }

  const handleDevices = (_id)=> {
    setDevices((alldevices)=>{
      const updatedDevices = alldevices.map((device)=>{
        if (device._id===_id){
            return {
              _id:device._id,
              image:device.image,
              location:device.location,
              name:device.name,
              state:!device.state
            }
        }
        return device
      }
      )
      return updatedDevices
    })

  }

  const filtered_devices= selectedLocation=="All" ? devices : devices.filter((device) => {
    return selectedLocation==device.location
  })

 
  const filtered_devices_final= filtered_devices.filter((device)=>{
    return device.name.replace(" ","").toLowerCase().includes(searchvalue)
  })

  
  useEffect(()=> {
    const getDevices = async () => {
        const response= await axios.get(`${baseurl}/devices` )
        setDevices(response.data.devices)
        setLoading(false)
    }
      getDevices();
  },[])





return(
<div className='home' >
          <Header />
          <Cammusic />
          <div className='devices-section' >
            <h1 className='font-semibold mt-3'>Devices</h1>
            <div className='menubar'>
              {
                locations.map((location,i) => {
                  return <Location_chip key={i} location={location} selectedLocation={selectedLocation} 
                   handleLocationSelect={handleLocationSelect}/>
                })
              }
              <Searchbar handleSearchValue={handleSearchValue}/>
              
            </div>
            <div className='devices-container'>
           {
            loading ? <h1>Loading . . .</h1> :
            filtered_devices_final.map((device)=>{
                return <DeviceCard key={device._id} device={device} handleDevices={handleDevices} />
            })
           }
                
            </div>
          </div>
        </div>
)

}

export default home