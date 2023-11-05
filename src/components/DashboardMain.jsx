import Link from 'next/link';
import React from 'react';
import { BiSolidDashboard } from 'react-icons/bi';
import { FcHome, FcServices } from 'react-icons/fc';
import { FaBloggerB } from 'react-icons/fa';
const DashboardMain = (props) => {
    return (
        <div className='flex'>
            <div className='border-r-2 border-gray-700' >
                <div >
                    <img className='w-56' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_zzIDW9Tzz6xEXQ349zLuazTBo1qhVz1nA&usqp=CAU" alt="" />
                </div>
                <div className=' bg-slate-300 h-[800px]'>
                    <nav>
                        <ul>
                            <li className='py-3 gap-2 rounded-md px-2 text-black transition-all duration-200 hover:bg-slate-400'><Link href="/dashboard" className='flex gap-2' ><span className='text-2xl'><BiSolidDashboard /></span> Dashboard</Link></li>
                            <li className='py-3 gap-2 my-7 rounded-md px-2 text-black transition-all duration-200 hover:bg-slate-400'><Link href="/dashboard/services" className='flex gap-2' ><span className='text-2xl'><FcServices /></span> Services</Link></li>
                            <li className='py-3 gap-2 rounded-md px-2 text-black transition-all duration-200 hover:bg-slate-400'><Link href="/dashboard/blogs" className='flex gap-2' ><span className='text-2xl'><FaBloggerB /></span> Blog</Link></li>
                            <li className='py-3 gap-2 my-7 rounded-md px-2 text-black transition-all duration-200 hover:bg-slate-400'><Link href="/" className='flex gap-2' ><span className='text-2xl'><FcHome /></span> Home</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default DashboardMain;