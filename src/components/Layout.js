import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center ">{children}</div>
  );
};

export default Layout;
