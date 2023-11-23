import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md">
      <div className="flex justify-between items-center gap-10">
        <div className="flex items-center">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-8 mr-2" />
          <span className="text-xl font-bold">ROOT</span>
        </div>
        <div className="flex-grow">
          <input
            type="search"
            placeholder="Type to search"
            className="w-full px-4 py-2 border rounded-full shadow-sm"
          />
        </div>
      </div>
      <div className="flex items-center">
        {/* Add your icons and profile picture here */}
        <button className="p-2">
          <NotificationsNoneIcon />
        </button>
        <button className="p-2 ml-4">
          <ShoppingCartIcon />
        </button>
        <button className="p-2">
          <img
            src="/path-to-profile-pic.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full ml-4"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
