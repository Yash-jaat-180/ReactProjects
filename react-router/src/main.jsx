import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import ContactUs from './Components/ContactUs.jsx'
import User from './Components/User/User.jsx'
import GitHub, { githubInfoLoader } from './Components/GitHub/GitHub.jsx'

// This is also an method of creating router
//  const router = createBrowserRouter([
//    {
//      path: '/',
//      element: <Layout/>,
//      children: [
//        {
//          path: "",
//          element: <Home/>
//        },
//        {
//          path: "about",
//          element: <About/>
//        },
//        {
//          path: "contact",
//          element: <ContactUs/>
//        }

//      ]
//    }
//  ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<ContactUs />} />
      <Route path='user/:userid' element={<User />} />
      <Route
        loader={githubInfoLoader}
        path='github' element={<GitHub />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
