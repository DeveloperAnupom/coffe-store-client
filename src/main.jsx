import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Addcoffe from './Component/Addcoffe.jsx';
import UpdateCoffe from './Component/UpdateCoffe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader : ()=> fetch('http://localhost:5000/coffee')
  },
  {
    path:"add-coffe",
    element: <Addcoffe></Addcoffe>,
  },
  {
    path : "update-coffe/:id",
    element: <UpdateCoffe></UpdateCoffe>,
    loader : ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
