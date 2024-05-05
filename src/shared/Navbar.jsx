import { Link, NavLink } from "react-router-dom";
import logo from '../assets/icons/logo.svg'
import './navbar.css'
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navItems = <>
        <li ><NavLink to='/' activeClassName="active">Home</NavLink></li>
        <li className=""><NavLink to='/about' activeClassName="active">About</NavLink></li>
       
    </>
    return (
        <div className="navbar bg-base-100 sticky  top-0 z-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>






                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {navItems} 
                        {user ?
                    <div className="dropdown dropdown-end ml-20  md:ml-72 lg:ml-0 ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL || "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    {user?.displayName || "user not found"}
                                </a>
                            </li>
                            {/* <li><a>Settings</a></li> */}
                            <li><a onClick={logOut}>Logout</a></li>
                        </ul>
                    </div>
                    :
                    <div className="md:flex gap-5">
                        <li className="list-none"><NavLink to='/login' activeClassName="active">Log In</NavLink></li>
                        <li className="list-none mr-5"><NavLink to='/register' activeClassName="active">Register</NavLink></li>
                    </div>

                }

                    </ul>
                </div>

                <Link to='/' className="w-20 h-14">
                    <img src={logo} alt="" />
                </Link>
            </div>




            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                    
                    {user ?
                    <div className="dropdown dropdown-end ml-20  md:ml-72 lg:ml-20 ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL || "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    {user?.displayName || "user not found"}
                                </a>
                            </li>
                            {/* <li><a>Settings</a></li> */}
                            <li><a onClick={logOut}>Logout</a></li>
                        </ul>
                    </div>
                    :
                    <div className="flex ">
                        <li className="list-none"><NavLink to='/login' activeClassName="active">Log In</NavLink></li>
                        <li className="list-none "><NavLink to='/register' activeClassName="active">Register</NavLink></li>
                    </div>

                }

                </ul>
            </div>
            <div className="navbar-end">
                
                <a className="btn btn-warning">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;