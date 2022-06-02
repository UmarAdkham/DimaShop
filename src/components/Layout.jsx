import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/AddAdmin">AddAdmin</Link>
        </li>
        <li>
          <Link to="/AddShop">AddShop</Link>
        </li>
        <li>
          <Link to="/LogUp">LogUp</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Layout;
