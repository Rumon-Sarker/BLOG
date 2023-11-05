import Link from 'next/link';
const Header = () => {
    return (
        <>
            <div className="navbar bg-gray-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label htmlFor="nav" tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm gap-4 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className=' bg-gray-200 hover:text-orange-500 hover:font-bold' href={'/'}>HOME</Link></li>
                            <li><Link className=' bg-gray-200 hover:text-orange-500 hover:font-bold' href={'/about'}>ABOUT</Link></li>
                            <li><Link className=' bg-gray-200 hover:text-orange-500 hover:font-bold' href={'/service'}>SERVICE</Link></li>
                            <li><Link className=' bg-gray-200 hover:text-orange-500 hover:font-bold' href={'/blog'}>BLOG</Link></li>
                            <li><Link className=' bg-gray-200 hover:text-orange-500 hover:font-bold' href={'/contact'}>CONTACT</Link></li>
                            <li><Link className=' bg-gray-200 hover:text-orange-500 hover:font-bold' href={'/'}>LOGIN</Link></li>
                            <li><Link className=' bg-gray-200 hover:text-orange-500 hover:font-bold' href={'/'}>HOME</Link></li>
                            <li><Link className=' bg-gray-200 hover:text-orange-500 hover:font-bold' href={'/dashboard'}>DASHBOARD</Link></li>

                            <li><Link className='btn hover:text-green-600 bg-gray-200  text-black hover:font-bold' href={'/'}>LOGIN</Link></li>
                            <li><Link className='btn hover:text-green-600 bg-gray-200 text-black hover:font-bold' href={'/'}>SIGN-UP</Link></li>

                        </ul>
                    </div>
                    <Link href={'/'} className="btn btn-ghost bg-slate-400 font-bold uppercase text-xl">Blog-<span className='text-green-700 -ml-2'>Site</span></Link>
                </div>
                <div className="navbar-center hidden gap-52 lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li><Link className=' bg-gray-200 hover:text-orange-500 hover:font-bold' href={'/'}>HOME</Link></li>
                        <li><Link className=' bg-gray-200 hover:text-orange-500 hover:font-bold' href={'/about'}>ABOUT</Link></li>
                        <li><Link className=' bg-gray-200 hover:text-orange-500 hover:font-bold' href={'/service'}>SERVICE</Link></li>
                        <li><Link className=' bg-gray-200 hover:text-orange-500 hover:font-bold' href={'/blog'}>BLOG</Link></li>
                        <li><Link className=' bg-gray-200 hover:text-orange-500 hover:font-bold' href={'/contact'}>CONTACT</Link></li>
                        <li><Link className=' bg-gray-200 hover:text-orange-500 hover:font-bold' href={'/dashboard'}>DASHBOARD</Link></li>

                    </ul>
                    <ul className="justify-between flex gap-3 ">
                        <li><Link className='btn hover:text-green-600 bg-gray-200  text-black hover:font-bold' href={'/login'}>LOGIN</Link></li>
                        <li><Link className='btn hover:text-green-600 bg-gray-200 text-black hover:font-bold' href={'/registration'}>SIGN-UP</Link></li>
                    </ul>
                </div>

            </div>
        </>
    );
};

export default Header;