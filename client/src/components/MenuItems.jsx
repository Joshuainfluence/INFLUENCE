import React from "react";
import { menuItemsData } from "../assets/assets";
import { NavLink } from "react-router-dom";

const MenuItems = ({ setSidebarOpen }) => {
  return (
    <div className="px-6 text-gray-600 space-y-1 font-medium">
      {
        // map out menu items from menuItemsData object in assets
        menuItemsData.map(({to, label, Icon}) => (
          // when menu link is clicked, close sidebar
          <NavLink
            to={to}
            key={to}
            end={to === "/"}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `px-3.5 py-2 flex items-center gap-3 rounded-xl ${
                isActive ? "bg-indigo-50 text-indigo-700" : "hover:bg-gray-50"
              }`
            }
          >
            <Icon className="w-5 h-5" />
            {label}
          </NavLink>
        ))
      }
    </div>
  );
};

export default MenuItems;
