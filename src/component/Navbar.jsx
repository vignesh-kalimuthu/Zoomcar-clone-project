import React, { useState, useEffect, useRef } from "react";
import LoginSignupmodal from "./LoginSignupmodal";

export default function Navbar() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const navbarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <nav
      className="border-gray-200 bg-black dark:bg-gray-800 dark:border-gray-700"
      ref={navbarRef}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="p-2 mr-2 text-white rounded-lg "
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <a href="#" className="flex items-center">
            <img
              src="https://www.zoomcar.com/build/98e56e8b0b91e8806885a22ac2bf69a7.png"
              alt="Logo"
            />
          </a>
        </div>
        <div className="flex items-center space-x-4">
        <button className="bg-white text-black px-4 py-2 rounded-full flex items-center">
  <img
    src="https://www.zoomcar.com/build/e222e7ff96ffdd76290118718d52d71f.svg"
    alt="Icon"
    className="mr-2"
  />
  <span>Become a Host</span>
</button>

          
          <a href="#" className="text-white px-4 py-2 rounded" onClick={openModal}>
        Login/Signup
      </a>
      <LoginSignupmodal isOpen={modalIsOpen} onClose={closeModal} />
        </div>
        {isNavbarOpen && (
         <div className="fixed top-0 left-0 z-10 bg-gray-200 dark:bg-gray-800 dark:border-gray-700 w-96 h-screen overflow-hidden">
         <ul className="flex flex-col space-y-4 font-medium">
           <li>
             <a
               href="#"
               className="block flex items-center py-3 px-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
             >
               <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.397 16.515c6.05 1.21 6.788 4.53 1.55 5.959-4.254 1.16-9.64 1.16-13.894 0-5.238-1.429-4.5-4.75 1.55-5.96a.75.75 0 1 1 .294 1.471c-1.297.26-2.303.585-2.982.947-.537.285-.8.554-.84.73-.021.1.054.253.341.479.412.323 1.107.633 2.031.885 3.996 1.09 9.11 1.09 13.106 0 .924-.252 1.619-.562 2.03-.885.288-.226.363-.378.341-.478-.04-.177-.302-.446-.839-.731-.68-.362-1.685-.687-2.982-.947a.75.75 0 0 1 .294-1.47zM12 .75c4.044 0 7.125 3.21 7.125 7.125 0 2.764-5.873 12.375-7.125 12.375-1.252 0-7.125-9.61-7.125-12.375C4.875 3.96 7.956.75 12 .75zm0 1.5c-3.201 0-5.625 2.525-5.625 5.625 0 1.032.947 3.176 2.465 5.759l.153.26.319.527a54.206 54.206 0 0 0 2.143 3.247l.242.333.22.292.083.107.19-.248.231-.313.124-.171a54.206 54.206 0 0 0 2.143-3.247l.319-.527c1.607-2.7 2.618-4.953 2.618-6.019 0-3.1-2.424-5.625-5.625-5.625zm0 1.875a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5zm0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5z" fill="#383838" fill-rule="evenodd"></path></svg>
               Change City
             </a>
           </li>
           <li>
             <a
               href="#"
               className="block flex items-center py-3 px-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
             >
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.158 15.684C18.937 15.684 22 18.512 22 22H8.316l5.549-5.905c.189-.2.429-.334.688-.386.2-.017.401-.025.605-.025zm-12.252.9.061-.064a2.7 2.7 0 0 1 1.93-.822l7.63-.014-5.25 5.387a3.036 3.036 0 0 1-4.371 0 3.232 3.232 0 0 1 0-4.487zM21.122 2.88a3.01 3.01 0 0 1 0 4.25l-7.096 7.111c-.25.25-.586.39-.938.39H5.158l11.724-11.75a2.993 2.993 0 0 1 4.24 0zm-8.596 3.33-1.36 1.238a3.333 3.333 0 0 1-2.244.868l-4.817-.002A2.567 2.567 0 0 1 6.63 6.211h5.896zM15.684 2l-1.427 1.266c-.61.54-1.397.84-2.212.84L2 4.103A2.58 2.58 0 0 1 4.536 2h11.148z" fill="#10A310" fill-rule="evenodd"></path></svg>
               Become a Host
             </a>
           </li>
           <li>
             <a
               href="#"
               className="block flex items-center py-3 px-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
             >
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 16.5a2.25 2.25 0 0 1-2.25 2.25h-7.5v.75c0 .385.29.702.663.745L9 20.25h9.75a.75.75 0 0 0 .745-.663l.005-.087v-12a.75.75 0 0 0-.663-.745l-.087-.005H18v9.75zM15.75 3.75H6a.75.75 0 0 0-.745.663L5.25 4.5v12c0 .385.29.702.663.745L6 17.25h9.75a.75.75 0 0 0 .745-.663l.005-.087v-12a.75.75 0 0 0-.663-.745l-.087-.005zm-1.5 9.75a.75.75 0 0 1 .087 1.495L14.25 15H7.5a.75.75 0 0 1-.087-1.495L7.5 13.5h6.75zm0-3.75a.75.75 0 0 1 .087 1.495l-.087.005H7.5a.75.75 0 0 1-.087-1.495L7.5 9.75h6.75zm0-3.75a.75.75 0 0 1 .087 1.495l-.087.005H7.5a.75.75 0 0 1-.087-1.495L7.5 6h6.75zM6 18.75a2.25 2.25 0 0 1-2.25-2.25v-12A2.25 2.25 0 0 1 6 2.25h9.75A2.25 2.25 0 0 1 18 4.5v.75h.75A2.25 2.25 0 0 1 21 7.5v12a2.25 2.25 0 0 1-2.25 2.25H9a2.25 2.25 0 0 1-2.25-2.25v-.75H6z" fill="#383838" fill-rule="evenodd"></path></svg>
               Zoomcar Fleet Vehicles Policies
             </a>
           </li>
           <li>
             <a
               href="#"
               className="block flex items-center py-3 px-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
             >
               <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 16.5a2.25 2.25 0 0 1-2.25 2.25h-7.5v.75c0 .385.29.702.663.745L9 20.25h9.75a.75.75 0 0 0 .745-.663l.005-.087v-12a.75.75 0 0 0-.663-.745l-.087-.005H18v9.75zM15.75 3.75H6a.75.75 0 0 0-.745.663L5.25 4.5v12c0 .385.29.702.663.745L6 17.25h9.75a.75.75 0 0 0 .745-.663l.005-.087v-12a.75.75 0 0 0-.663-.745l-.087-.005zm-1.5 9.75a.75.75 0 0 1 .087 1.495L14.25 15H7.5a.75.75 0 0 1-.087-1.495L7.5 13.5h6.75zm0-3.75a.75.75 0 0 1 .087 1.495l-.087.005H7.5a.75.75 0 0 1-.087-1.495L7.5 9.75h6.75zm0-3.75a.75.75 0 0 1 .087 1.495l-.087.005H7.5a.75.75 0 0 1-.087-1.495L7.5 6h6.75zM6 18.75a2.25 2.25 0 0 1-2.25-2.25v-12A2.25 2.25 0 0 1 6 2.25h9.75A2.25 2.25 0 0 1 18 4.5v.75h.75A2.25 2.25 0 0 1 21 7.5v12a2.25 2.25 0 0 1-2.25 2.25H9a2.25 2.25 0 0 1-2.25-2.25v-.75H6z" fill="#383838" fill-rule="evenodd"></path></svg>
               Zoomcar Host Vehicles Policies
             </a>
           </li>
           <li>
             <a
               href="#"
               className="block flex items-center py-3 px-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
             >
               <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="m8.743 9.409 1.347-1.184a2.366 2.366 0 0 0 .057-3.493L6.575 1.378a2.306 2.306 0 0 0-3.577.519C1.385 4.633.629 6.818.766 8.505c.251 3.114 2.06 6.275 5.384 9.494 3.44 3.331 6.748 5.095 9.936 5.246 1.561.074 3.548-.623 6.004-2.06a2.363 2.363 0 0 0 .496-3.676l-3.457-3.567a2.305 2.305 0 0 0-3.173-.14l-.13.122-1.41 1.425a4.56 4.56 0 0 0-.383 5.956c-2.15-.65-4.422-2.122-6.812-4.436-2.33-2.258-3.827-4.434-4.508-6.523l-.081-.26a5.348 5.348 0 0 0 6.111-.677zm6.69 11.147a2.98 2.98 0 0 1 .079-4.1l1.415-1.43a.769.769 0 0 1 1.096.011l3.457 3.568a.788.788 0 0 1-.165 1.225c-1.95 1.14-3.521 1.747-4.688 1.841l-.164.01-1.03-1.125zM4.328 2.698a.769.769 0 0 1 1.192-.173l3.573 3.354a.789.789 0 0 1-.019 1.164L7.727 8.228a3.812 3.812 0 0 1-4.64.31L2.3 8.012c.032-1.274.699-3.058 2.028-5.314z" fill="#383838" fill-rule="evenodd"></path></svg>
               Help & Support
             </a>
           </li>
         </ul>
       </div>
       
       
        )}        
      </div>
    </nav>
  );
}
