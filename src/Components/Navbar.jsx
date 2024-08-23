import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const navLink = <>
    <li><NavLink to="/product">product</NavLink></li>
    <li><NavLink to="/about">about</NavLink></li>
    <li><NavLink to="/contacts">contacts</NavLink></li>
    <li><NavLink to="/blog">blog</NavLink></li>
    <li><NavLink to="/register">register</NavLink></li>
    </>

    return (
    <div className="navbar bg-white shadow-lg fixed z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="uppercase menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            { navLink }
          </ul>
        </div>
        <Link to="/" className="uppercase btn btn-ghost text-xl font-bold">Glasses</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="uppercase text-base font-semibold menu menu-horizontal px-1">
          { navLink }
        </ul>
      </div>
      <div className="uppercase navbar-end">
        {
            user ? <>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL ? user.photoURL: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
              </div>
            </div>
            <span className="mr-3 lowercase text-lg font-semibold">{user?.email ? user.email: user.displayName}</span>
            <Link onClick={()=>logOut()} className="btn text-base font-bold">Logout</Link>
            </>:
            <>
            <Link to="/login" className="btn text-base font-bold">Login</Link>
            </>
        }
      </div>
    </div>
    );
};

export default Navbar;