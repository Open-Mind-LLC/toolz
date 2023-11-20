import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Sidebar = () => {
  return (
    <div className="bg-white-800 font-mono text-black w-64 h-screen shadow-lg">
      {/* Logo and search input */}
      <div className="flex items-center justify-between p-4">
        {/* Your logo here */}
      </div>

      {/* Navigation */}
      <nav>
        {/* Repeat for each navigation item */}
        <a
          href="#"
          className="flex justify-start gap-2 text-lg items-center  p-4 hover:bg-gray-500 hover:text-white"
        >
          <DashboardIcon />
          <p>Dashboard</p>
        </a>
        <a
          href="#"
          className="flex justify-start gap-2 text-lg items-center  p-4 hover:bg-gray-500 hover:text-white"
        >
          <DashboardIcon />
          <p>SMTP</p>
        </a>
        <a
          href="#"
          className="flex justify-start gap-2 text-lg items-center  p-4 hover:bg-gray-500 hover:text-white"
        >
          <DashboardIcon />
          <p>CPANEL</p>
        </a>
        <a
          href="#"
          className="flex justify-start gap-2 text-lg items-center  p-4 hover:bg-gray-500 hover:text-white"
        >
          <DashboardIcon />
          <p>WEBMAIL</p>
        </a>
        <a
          href="#"
          className="flex justify-start gap-2 text-lg items-center  p-4 hover:bg-gray-500 hover:text-white"
        >
          <DashboardIcon />
          <p>ETC</p>
        </a>
        {/* ...other nav items */}
      </nav>
    </div>
  );
};

export default Sidebar;
