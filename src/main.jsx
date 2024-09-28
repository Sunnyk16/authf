import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Auth from './components/main/auth.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,

  },
  {
    path: "/auth",
    element:<Auth/>

  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <StrictMode>
    <App />
  </StrictMode>
  </RouterProvider>
  ,
)
