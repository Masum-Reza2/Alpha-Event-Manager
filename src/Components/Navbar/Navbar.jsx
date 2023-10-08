import { NavLink, useNavigate } from "react-router-dom"
import defaultProfile from '../../assets/images/defaultProfile.jpg'
import logo from '../../assets/favicon.avif'
import useGlobal from "../../Hooks/useGlobal"
import toast, { Toaster } from "react-hot-toast"

const Navbar = () => {
    const { user, signOutUser } = useGlobal();
    const navigate = useNavigate();

    // signing out user
    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                toast.success('Log Out Successfull.');
                navigate('/login')
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }

    const NavLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/ourTeam'}>Our-Team</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
    </>
    return (
        <div>
            <Toaster />
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-10 md:translate-y-3 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl md:hidden">Alpha mgt</a>
                    <label tabIndex={0} className="btn-circle avatar hidden md:block">
                        <div className="w-16 rounded-full">
                            <img className="w-16" src={logo} />
                        </div>
                    </label>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>

                {/* make it dynamic */}
                {
                    user ?
                        <div className="navbar-end">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar relative mr-3 md:mr-0">
                                    <div className="w-16 rounded-full">
                                        <img src={user?.photoURL || defaultProfile} />
                                    </div>
                                    <div className="absolute top-[3.25rem]">
                                        {user?.displayName || 'Mr Legend'}
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-center">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><button onClick={handleLogOut}>Logout</button></li>
                                </ul>
                            </div>
                        </div>
                        :
                        <div className="navbar-end">
                            <div className="dropdown dropdown-end">
                                <NavLink to={'/login'}>
                                    <button tabIndex={0} className="btn btn-ghost btn-outline avatar">
                                        Log In
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                }


            </div>
        </div>
    )
}

export default Navbar