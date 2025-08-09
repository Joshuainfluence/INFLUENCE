import { Menu, Sidebar, X } from "lucide-react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [sidebarOPen, setSidebarOPen] = useState(false);
  
  return (
    <div className="w-full flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-slate-50">
        <Outlet />
      </div>
      {
        sidebarOPen ?
        <X className="absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden" onClick={()=>setSidebarOPen(false)}/>
        :
        <Menu className="absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden" onClick={()=>setSidebarOPen(true)}/>
      }
    </div>
  );
};

export default Layout;
