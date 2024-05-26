import React, { children } from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import Home from "./Home.jsx"
import About from "./About.jsx"
import Contact from './contact.jsx'
// import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router=createBrowserRouter([{
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:"",
      element:<Home/>
      
    },{
      path:"about",
      element:<About/>
    },{
      path:"contact",
      element:<Contact/>
    }
  ]
} 
])
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
