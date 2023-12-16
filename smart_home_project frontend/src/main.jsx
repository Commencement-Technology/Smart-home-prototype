import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/home/home.jsx'
import Settings from './components/Settings/settings.jsx'
import Notfound from "./components/Notfound/notfound.jsx"
import Statistics from './components/stats/statistics.jsx';
import Registeruser from './components/Register/Register.jsx';
import Login from './components/login/login.jsx';
import { AuthContextProvider } from './context/AuthContext';
import Security from './components/security/security.jsx';
import { useAuthContext } from './hooks/useAuthContext.jsx';

// const {user}=useAuthContext()
const router= createBrowserRouter ([
  {
    path: "/",
    element: <Registeruser />,
  },
  {
  element:<App/>,
  children:
  [
    {
      path:"/home",
      element:<Home/>,
    },
    {
      path:"/settings",
      element:<Settings/>
    },
    {
      path:"/statistics",
      element:<Statistics/>
    },
    {
      path:"/security",
      element:<Security/>
    }
  ],
  
},
{
  path:"*",
  element:<Notfound/>

},
{
  path:"/login",
  element:<Login/>
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <RouterProvider router={router}/>
    </AuthContextProvider>
  </React.StrictMode>,
)
