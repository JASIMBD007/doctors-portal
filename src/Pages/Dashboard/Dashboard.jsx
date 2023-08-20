import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <h2 className='text-5xl' >Dashboard</h2>
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-secondary drawer-button lg:hidden">Dashboard</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/dashboard/review'>Reviews</Link></li>

                </ul>

            </div>
        </div>
    )
}

export default Dashboard