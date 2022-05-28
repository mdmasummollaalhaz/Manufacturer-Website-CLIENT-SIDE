import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-slate-100">
                {/* <!-- Page content here --> */}
                <div className=' p-8 flex flex-row justify-between'>
                    <div>
                        <p>Hi, {user.displayName}</p>
                        <h2 className=' text-2xl'>Admin DashBoard</h2>
                    </div>


                    <div>
                        <label htmlFor="my-drawer-2" tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>Menu
                        </label>
                    </div>
                </div>

                <Outlet />


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 text-white" style={{ "background": "#59524c" }}>
                    {
                        !admin.admin && <>
                            <li className=''><Link to='/dashboard/my-orders'>My orders</Link></li>
                            <li><Link to='/dashboard/add-review'>Add a review</Link></li>
                        </>

                    }

                    <li className=' active:bg-stone-400'><Link to='/dashboard'>My Profile</Link></li>
                    {
                        admin.admin && <>
                            <li><Link to='/dashboard/all-users'>All Users</Link></li>
                            <li><Link to='/dashboard/add-parts'>Add Parts</Link></li>
                            <li><Link to='/dashboard/manage-parts'>Manage Parts</Link></li>
                            <li><Link to='/dashboard/manage-orders'>Manage All Orders</Link></li>
                        </>
                    }


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;