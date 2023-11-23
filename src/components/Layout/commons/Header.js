import React from "react";

const Header = ({ typeUrl }) => {
  return (
    <header>
      {typeUrl === "auth" ? (
        <div className="flex flex-row justify-between px-4 my-2 w-full">
          <div className="w-[50px] h-[50px]">
          <img
            className="w-[50px] h-[50px]"
            src={require("../../../assets/hacker-logo-icon.png")}
            alt="Logo"
          />
          </div>
         <div className="my-2">
         <a
            className="px-10 py-3 bg-black-100 hover:bg-[#8960A6] rounded-md text-base text-white font-normal"
            href="/"
          >
            Sign Up
          </a>
         </div>
        </div>
      ) : (
        <nav>
          <p> Admin Header</p>
        </nav>
      )}
    </header>
  );
};

export default Header;
// <header className="flex items-center justify-between bg-white p-4 shadow-md">
//   <div className="flex justify-between items-center gap-10">
//     <div className="flex items-center">
//       <img src="/path-to-your-logo.png" alt="Logo" className="h-8 mr-2" />
//       <span className="text-xl font-bold">ROOT</span>
//     </div>
//     <div className="flex-grow">
//       <input
//         type="search"
//         placeholder="Type to search"
//         className="w-full px-4 py-2 border rounded-full shadow-sm"
//       />
//     </div>
//   </div>
//   <div className="flex items-center">
//     {/* Add your icons and profile picture here */}
//     <button className="p-2">
//       <NotificationsNoneIcon />
//     </button>
//     <button className="p-2 ml-4">
//       <ShoppingCartIcon />
//     </button>
//     <button className="p-2">
//       <img
//         src="/path-to-profile-pic.jpg"
//         alt="Profile"
//         className="w-10 h-10 rounded-full ml-4"
//       />
//     </button>
//   </div>
// </header>
