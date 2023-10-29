import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/home/home.jsx'
import Settings from './components/Settings/settings.jsx'
import Notfound from "./components/Notfound/notfound.jsx"
import Statistics from './components/stats/statistics.jsx';
import Login from './components/login/login.jsx';
const router= createBrowserRouter ([
  {
  element:<App/>,
  children:
  [
    {
      path:"/",
      element:<Home/>,
    },
    {
      path:"/settings",
      element:<Settings/>
    },
    {
      path:"/statistics",
      element:<Statistics/>
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
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
