import React, { useState, useEffect } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/dashboard";
import { Dropdown, DropdownLink } from "../Shared/Dropdown";
import StorageIcon from "@mui/icons-material/Storage";
import SendIcon from "@mui/icons-material/Send";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import MailLockIcon from "@mui/icons-material/MailLock";

// const Dashboard = () => <Dashboard />
const SMTP = () => <div>SMTP Page Content</div>;
const CPANEL = () => <div>CPANEL Page Content</div>;
const RDP = () => <div>RDP Page Content</div>;
const SSH = () => <div>SSH Page Content</div>;
const WEBMAIL = () => <div>WEBMAIL Page Content</div>;
const SHELLS = () => <div>SHELLS Page Content</div>;
const MAILERS = () => <div>MAILERS Page Content</div>;
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
          <nav className="grid grid-cols-1">
            <Link
              to="/dashboard"
              className={`flex justify-start gap-2  rounded-md w-3/4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-base ml-1 items-center p-4 hover:bg-gray-500 hover:text-white ${
                selectedMenu === "dashboard" ? "bg-gray-500 text-white" : ""
              }`}
              onClick={() => handleMenuClick("dashboard")}
            >
              <DashboardIcon />
              <p>Dashboard</p>
            </Link>
            <Dropdown
              title="Hosting"
              icon={<StorageIcon />}
              selected={selectedMenu === "hosting"}
              onClick={() => handleMenuClick("hosting")}
            >
              <DropdownLink to="/shells" label="SHELLS" />
              <DropdownLink to="/cpanel" label="CPANELS" />
              <DropdownLink to="/rdp" label="RDP" />
              <DropdownLink to="/ssh" label="SSH/WHM" />
            </Dropdown>
            <Dropdown
              title="Send"
              icon={<SendIcon />}
              selected={selectedMenu === "send"}
              onClick={() => handleMenuClick("send")}
            >
              <DropdownLink to="/smtp" label="SMTP" />
              <DropdownLink to="/mailers" label="MAILERS" />
            </Dropdown>
            <Dropdown
              title="Leads"
              icon={<PermContactCalendarIcon />}
              selected={selectedMenu === "leads"}
              onClick={() => handleMenuClick("leads")}
            >
              <DropdownLink to="/smtp" label="SMTP" />
              <DropdownLink to="/mailers" label="MAILERS" />
            </Dropdown>
            <Dropdown
              title="Webmails"
              icon={<PermContactCalendarIcon />}
              selected={selectedMenu === "webmails"}
              onClick={() => handleMenuClick("webmails")}
            >
              <DropdownLink to="/webmail" label="WEBMAILS" />
              <DropdownLink to="/mailers" label="MAILERS" />
            </Dropdown>
            <Dropdown
              title="365"
              icon={<MailLockIcon />}
              selected={selectedMenu === "365"}
              onClick={() => handleMenuClick("365")}
            >
              <DropdownLink to="/365" label="365" />
              <DropdownLink to="/365" label="365" />
            </Dropdown>
            <Dropdown
              title="Bank"
              icon={<MailLockIcon />}
              selected={selectedMenu === "bank"}
              onClick={() => handleMenuClick("bank")}
            >
              <DropdownLink to="/bank" label="bank" />
              <DropdownLink to="/bank" label="bank" />
            </Dropdown>
            {/* Add similar Links for other menu items */}
          </nav>
        </div>
        <div className="flex-1 p-4 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/smtp" element={<SMTP />} />
            <Route path="/mailers" element={<MAILERS />} />
            <Route path="/cpanel" element={<CPANEL />} />
            <Route path="/ssh" element={<SSH />} />
            <Route path="/rdp" element={<RDP />} />
            <Route path="/webmail" element={<WEBMAIL />} />
            <Route path="/shells" element={<SHELLS />} />
            <Route path="/etc" element={<ETC />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Sidebar;
