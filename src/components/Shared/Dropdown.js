import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownLink = ({ to, label, icon, selected, onClick }) => {
  return (
    <Link
      to={to}
      className={`flex items-center p-2 hover:bg-gray-500 hover:text-white ${
        selected ? "bg-gray-500 text-white" : ""
      }`}
      onClick={onClick}
    >
      {icon}
      <p className="ml-2">{label}</p>
    </Link>
  );
};

const Dropdown = ({ title, icon, selected, onClick, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown dropdown-hover">
      <label
        tabIndex={0}
        className={`btn transition ease-in-out delay-150 hover:-translate-y hover:scale-110  m-1 ${
          selected ? "bg-gray-500 text-white" : ""
        }`}
        onClick={() => {
          onClick();
          handleToggle(); // Toggle the dropdown when the main item is clicked
        }}
      >
        <div className="flex items-center gap-2">
          {icon}
          <p>{title}</p>
        </div>
      </label>
      {isOpen && (
        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ml-4">
          {children}
        </ul>
      )}
    </div>
  );
};

export { Dropdown, DropdownLink };
