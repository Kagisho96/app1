import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>

<div className="flex justify-between items-center bg-red h-16 px-4 lg:px-20">
  <nav className="hidden lg:block">
    <ul className="flex justify-end items-center space-x-4">
      <li>
        <NavLink
          className="text-lg text-gray-900 hover:text-gray-300 font-semibold"
          exact
          to="/"
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-lg text-gray-900 hover:text-gray-300 font-semibold"
          to="/blogs"
        >
          BLOGS
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-lg text-gray-900 hover:text-gray-100 font-semibold"
          to="/register"
        >
          REGISTER
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-lg text-gray-900 hover:text-gray-300 font-semibold"
          to="/about"
        >
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-lg text-gray-900 hover:text-gray-300 font-semibold"
          to='/addblog'
        >
          ADD-BLOK
        </NavLink>
      </li>
    </ul>
  </nav>
  <div className="flex items-center">
    <form className="flex items-center">
      <input
        className="w-full py-2 px-4 rounded-md bg-gray-100 text-gray-800 focus:bg-white focus:outline-none"
        type="text"
        placeholder="Search..."
      />
      <button
        className="py-2 px-4 bg-gray-900 text-white rounded-md ml-2 hover:bg-gray-800 focus:outline-none font-semibold"
        type="submit"
      >
        Search
      </button>
    </form>
  </div>
</div>
    </>
  );
};

// import React from 'react';

// export const NavBar = () => {
//   return (
//     <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="https://flowbite.com/" className="flex items-center">
//           <img
//             src="https://flowbite.com/docs/images/logo.svg"
//             className="h-8 mr-3"
//             alt="Flowbite Logo"
//           />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             Flowbite
//           </span>
//         </a>
//         <div className="flex md:order-2">
//           <div className="flex items-center md:order-2">
//             <button
//               type="button"
//               className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//               id="user-menu-button"
//               aria-expanded="false"
//               data-dropdown-toggle="user-dropdown"
//               data-dropdown-placement="bottom"
//             >
//               <span className="sr-only">Open user menu</span>
//               <img
//                 className="w-8 h-8 rounded-full"
//                 src=""
//                 alt="user photo"
//               />
//             </button>
//             <div
//               className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
//               id="user-dropdown"
//             >
//               <div className="px-4 py-3">
//                 <span className="block text-sm text-gray-900 dark:text-white">
//                   Bonnie Green
//                 </span>
//                 <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
//                   name@flowbite.com
//                 </span>
//               </div>
//               <ul
//                 className="py-2"
//                 aria-labelledby="user-menu-button"
//               >
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                   >
//                     Dashboard
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                   >
//                     Settings
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                   >
//                     Earnings
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                   >
//                     Sign out
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <button
//               data-collapse-toggle="navbar-user"
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="navbar-user"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>
//           <button
//             data-collapse-toggle="navbar-sticky"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-sticky"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//           <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;
