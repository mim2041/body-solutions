import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/ui/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-yellow-100 flex flex-col min-h-screen w-full">
      <div className="h-32 lg:h-52">
        <Navbar />
      </div>
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
    </div>
  );
};

export default Layout;
