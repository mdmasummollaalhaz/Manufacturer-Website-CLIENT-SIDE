import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../assets/images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    // handle sign out
    const handleSignOut = () => {
        signOut(auth)
        navigate('/')
    }
    return (
        <header>
            <div className="container mx-auto">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/'>Parts</Link></li>
                                <li><Link to='/'>Business Summary</Link></li>
                                <li><Link to='/'>Reviews</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/my-portfolio'>My Portfolio</Link></li>
                                {
                                    user ?
                                        <li><Link to='/dashboard'>Dashboard</Link></li> :
                                        ''
                                }
                                <div>
                                    {
                                        user ?
                                            <div className=' shadow-lg pl-5 rounded-full'>
                                                <span className='mr-5'>{user?.displayName}</span>
                                                <button className=' btn btn-primary rounded-full' onClick={handleSignOut}>Log Out</button>
                                            </div>
                                            :
                                            <Link to='/login' className="btn rounded-full">Login</Link>
                                    }
                                </div>

                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost normal-case text-xl">
                            <img src={logo} alt="logo" className=' w-12 mr-3' /> Monota
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:block">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>Parts</Link></li>
                            <li><Link to='/'>Business Summary</Link></li>
                            <li><Link to='/'>Reviews</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/my-portfolio'>My Portfolio</Link></li>
                            {
                                user ?
                                    <li><Link to='/dashboard'>Dashboard</Link></li> :
                                    ''
                            }
                        </ul>
                    </div>
                    <div className="navbar-end ">
                        <div className='lg:flex  hidden'>
                            {
                                user ?
                                    <div className=' shadow-lg pl-5 rounded-full'>
                                        <span className='mr-5'>{user?.displayName}</span>
                                        <button className=' btn btn-primary rounded-full' onClick={handleSignOut}>Log Out</button>
                                    </div>
                                    :
                                    <Link to='/login' className="btn rounded-full">Login</Link>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;