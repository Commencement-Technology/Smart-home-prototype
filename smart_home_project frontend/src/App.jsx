import { Outlet } from 'react-router-dom'
import './App.css'
import Navicon from './components/navicon/navicon'
import Widgets from './components/widgets/widgets'
import Power from './components/power_consumption/power'
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { DevicesProvider } from './DevicesContext'
import { LocationProvider } from './LocationContext'
import { CoordsProvider } from './CoordsContext'
 
if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;



function App() {
  
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
      <div className='App'>
        <div className='sidebar'>
          <Navicon route="home"/>
          <Navicon route="settings"/>
          <Navicon route="statistics"/>
          <Navicon route="security"/>

        </div>
      <LocationProvider>
      <CoordsProvider>
        <div className='widgets'>  
          <Widgets />
          <Power/>
        </div>


      <DevicesProvider>
        <Outlet/>
      </DevicesProvider>
      </CoordsProvider>
      </LocationProvider>
        
      </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      </ClerkProvider>
  )
}


export default App
