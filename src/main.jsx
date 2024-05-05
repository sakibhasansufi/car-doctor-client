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
import Error from './pages/Error';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthProvider from './providers/AuthProvider';
import CheckOut from './pages/CheckOut';
import BookService from './pages/BookService';

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
        path : '/checkout/:id',
        element : <CheckOut></CheckOut>,
        loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/book/:id',
        element : <BookService></BookService>,
        loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </React.StrictMode>,
  </div>
)
