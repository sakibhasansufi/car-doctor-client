import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import Home from './pages/Home';
import About from './pages/About'
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Services from './pages/Services'
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path : '/about',
        element : <About></About>

      },
      {
        path : '/blog',
        element : <Blog></Blog>
      },
      {
        path : '/contact',
        element : <Contact></Contact>
      },
      {
        path : '/services',
        element : <Services></Services>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </div>
)
