import { Link, NavLink } from "react-router-dom";
import logo from '../assets/icons/logo.svg'
import './navbar.css'


const Navbar = () => {
    const navItems = <>
        <li ><NavLink to='/' activeClassName="active">Home</NavLink></li>
        <li><NavLink to='/about' activeClassName="active">About</NavLink></li>
        <li><NavLink to='/services'activeClassName="active">Services</NavLink></li>
        <li><NavLink to='/blog'activeClassName="active">Blog</NavLink></li>
        <li><NavLink to='/contact'activeClassName="active">Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 sticky top-0 z-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {navItems}

                    </ul>
                </div>

                <Link to='/' className="w-20 h-20">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navItems}



                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-warning">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;