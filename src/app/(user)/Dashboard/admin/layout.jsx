import AdminSidebar from "@/Components/AdminSection/AdminSidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default layout;
