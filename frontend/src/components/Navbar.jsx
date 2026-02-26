// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import Login from "./Login";
// import Logout from "./Logout";
// import { useAuth } from "../context/AuthProvider";
// import NavbarSkeleton from "../skeleton/Navbarskeleton";

// // ----------- Custom Hooks -----------
// const useStickyNavbar = () => {
//   const [sticky, setSticky] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => setSticky(window.scrollY > 0);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return sticky;
// };

// const useTheme = (defaultTheme = "light") => {
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || defaultTheme,
//   );
//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);
//   const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
//   return [theme, toggleTheme];
// };

// // ----------- NavLink Class Logic -----------
// const getNavLinkClass = (theme) => (isActive) => {
//   const base = "px-3 py-2 rounded-md transition duration-300";
//   if (isActive) return `${base} text-pink-500 cursor-not-allowed`;
//   return theme === "dark"
//     ? `${base} text-gray-300 hover:text-pink-400`
//     : `${base} text-gray-700 hover:text-pink-400`;
// };

// // ----------- Menu Component -----------
// const Menu = ({ items, theme, className }) => {
//   const linkClass = getNavLinkClass(theme);
//   return (
//     <ul className={`menu ${className}`}>
//       {items.map((item) => (
//         <li key={item.name} className="mr-6">
//           <NavLink
//             to={item.path}
//             className={({ isActive }) => linkClass(isActive)}
//             end
//           >
//             {item.name}
//           </NavLink>
//         </li>
//       ))}
//     </ul>
//   );
// };

// // ----------- Navbar Component -----------
// function Navbar() {
//   const [authUser] = useAuth();
//   const sticky = useStickyNavbar();
//   const [theme, toggleTheme] = useTheme();
//   const [loading, setLoading] = useState(true);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Book", path: "/courses" },
//     { name: "Categories", path: "/categories" },
//     { name: "Contact", path: "/contact" },
//     { name: "Cart", path: "/cart" },
//   ];

//   // Simulate loading for skeleton
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 500);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) return <NavbarSkeleton />;

//   return (
//     <div
//       className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
//         sticky
//           ? "shadow-md bg-base-300 duration-300 transition-all ease-in-out"
//           : ""
//       }`}
//     >
//       <div className="navbar shadow-sm">
//         {/* Navbar Start */}
//         <div className="navbar-start">
//           {/* Mobile dropdown */}
//           <div className="dropdown lg:hidden">
//             <div tabIndex={0} role="button" className="btn btn-ghost">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <Menu
//               items={navItems}
//               theme={theme}
//               className="menu-sm dropdown-content bg-base-200 rounded-box mt-3 w-52 p-2 shadow"
//             />
//           </div>
//           {/* Brand */}
//           <a className="font-bold text-2xl cursor-pointer">bookStore</a>
//         </div>

//         {/* Navbar Center - Desktop */}
//         <div className="navbar-center hidden lg:flex">
//           <Menu
//             items={navItems}
//             theme={theme}
//             className="menu-horizontal px-1"
//           />
//         </div>

//         {/* Navbar End */}
//         <div className="navbar-end flex items-center space-x-3">
//           {/* Search */}
//           <div className="hidden md:block">
//             <label className="px-3 py-2 rounded-md flex items-center gap-2 cursor-pointer">
//               <svg
//                 className="h-[1em] opacity-50"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 fill="none"
//               >
//                 <circle cx="11" cy="11" r="8" strokeWidth="2.5"></circle>
//                 <path d="m21 21-4.3-4.3" strokeWidth="2.5"></path>
//               </svg>
//               <input
//                 type="search"
//                 required
//                 placeholder="Search"
//                 className="outline-none cursor-pointer"
//               />
//             </label>
//           </div>

//           {/* Theme toggle */}
//           <button
//             onClick={toggleTheme}
//             className="swap swap-rotate outline-none cursor-pointer mr-4"
//           >
//             {theme === "light" ? (
//               //Sun icon
//               <svg
//                 className=" h-7 w-7  fill-current"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 // onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//               >
//                 <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
//               </svg>
//             ) : (
//               //Moon icon
//               <svg
//                 className=" h-7 w-7 fill-current text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//               >
//                 <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
//               </svg>
//             )}
//           </button>

//           {/* Auth buttons */}
//           {authUser ? (
//             <Logout />
//           ) : (
//             <div>
//               <button
//                 className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300"
//                 onClick={() =>
//                   document.getElementById("my_modal_3").showModal()
//                 }
//               >
//                 Login
//               </button>
//               <Login />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";
import NavbarSkeleton from "../skeleton/Navbarskeleton";

// ----------- Custom Hooks -----------
const useStickyNavbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return sticky;
};

const useTheme = (defaultTheme = "light") => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || defaultTheme,
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return [theme, toggleTheme];
};

// ----------- NavLink Class Logic -----------
const getNavLinkClass = (theme) => (isActive) => {
  const base =
    "px-3 py-2 rounded-md transition-all duration-300 hover:scale-105";
  if (isActive) return `${base} text-pink-500 cursor-not-allowed`;
  return theme === "dark"
    ? `${base} text-gray-300 hover:text-pink-400`
    : `${base} text-gray-700 hover:text-pink-400`;
};

// ----------- Menu Component -----------
const Menu = ({ items, theme, className }) => {
  const linkClass = getNavLinkClass(theme);
  return (
    <ul className={`menu ${className}`}>
      {items.map((item) => (
        <li key={item.name} className="mr-6">
          <NavLink
            to={item.path}
            className={({ isActive }) => linkClass(isActive)}
            end
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

// ----------- Navbar Component -----------
function Navbar() {
  const [authUser] = useAuth();
  const sticky = useStickyNavbar();
  const [theme, toggleTheme] = useTheme();
  const [loading, setLoading] = useState(true);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Book", path: "/courses" },
    { name: "Categories", path: "/categories" },
    { name: "Contact", path: "/contact" },
    { name: "Cart", path: "/cart" },
  ];

  // Simulate loading for skeleton
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <NavbarSkeleton />;

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        sticky
          ? "shadow-md bg-base-300 duration-300 transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="navbar shadow-sm animate-fadeDown">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile dropdown */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <Menu
              items={navItems}
              theme={theme}
              className="menu-sm dropdown-content bg-base-200 rounded-box mt-3 w-52 p-2 shadow"
            />
          </div>
          {/* Brand */}
          <a className="font-bold text-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:text-pink-500">
            bookStore
          </a>
        </div>

        {/* Navbar Center - Desktop */}
        <div className="navbar-center hidden lg:flex">
          <Menu
            items={navItems}
            theme={theme}
            className="menu-horizontal px-1"
          />
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center space-x-3">
          {/* Search */}
          <div className="hidden md:block">
            <label className="px-3 py-2 rounded-md flex items-center gap-2 cursor-pointer transition-all duration-300 hover:bg-base-200">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <circle cx="11" cy="11" r="8" strokeWidth="2.5"></circle>
                <path d="m21 21-4.3-4.3" strokeWidth="2.5"></path>
              </svg>
              <input
                type="search"
                required
                placeholder="Search"
                className="outline-none cursor-pointer bg-transparent"
              />
            </label>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="swap swap-rotate outline-none cursor-pointer mr-4 transition-transform duration-500 hover:rotate-180"
          >
            {theme === "light" ? (
              <svg
                className="h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            ) : (
              <svg
                className="h-7 w-7 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />{" "}
              </svg>
            )}
          </button>

          {/* Auth buttons */}
          {authUser ? (
            <Logout />
          ) : (
            <div>
              <button
                className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 transition-all hover:scale-105"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
