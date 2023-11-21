import React, { useState, useEffect } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/dashboard";

// const Dashboard = () => <Dashboard />
const SMTP = () => <div>SMTP Page Content</div>;
const CPANEL = () => <div>CPANEL Page Content</div>;
const WEBMAIL = () => <div>WEBMAIL Page Content</div>;
const ETC = () => <div>ETC Page Content</div>;

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  useEffect(() => {
    // Set the default selected menu to "dashboard" when the component mounts
    handleMenuClick("dashboard");
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <Router>
      <div className="flex">
        <div className="bg-white-800 font-mono text-black w-64 h-screen shadow-lg">
          <div className="flex items-center justify-between p-4">
            {/* Your logo here */}
          </div>
          <nav>
            <Link
              to="/dashboard"
              className={`flex justify-start gap-2 text-lg items-center p-4 hover:bg-gray-500 hover:text-white ${
                selectedMenu === "dashboard" ? "bg-gray-500 text-white" : ""
              }`}
              onClick={() => handleMenuClick("dashboard")}
            >
              <DashboardIcon />
              <p>Dashboard</p>
            </Link>
            <Link
              to="/smtp"
              className={`flex justify-start gap-2 text-lg items-center p-4 hover:bg-gray-500 hover:text-white ${
                selectedMenu === "smtp" ? "bg-gray-500 text-white" : ""
              }`}
              onClick={() => handleMenuClick("smtp")}
            >
              <DashboardIcon />
              <p>SMTP</p>
            </Link>
            {/* Add similar Links for other menu items */}
          </nav>
        </div>
        <div className="flex-1 p-4 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/smtp" element={<SMTP />} />
            <Route path="/cpanel" element={<CPANEL />} />
            <Route path="/webmail" element={<WEBMAIL />} />
            <Route path="/etc" element={<ETC />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Sidebar;
