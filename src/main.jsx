import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './components/Cart';
import Profile from './components/Profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/cart",
    element: <Cart></Cart>
  },
  {
    path: "/profile",
    element: <Profile></Profile>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
