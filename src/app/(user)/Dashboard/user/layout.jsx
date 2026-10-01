import Sidebar from "@/Components/UserSection/Sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default layout;
