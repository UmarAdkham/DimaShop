import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddShop from "./components/AddShop.jsx";
import LogUp from "./components/LogUp.jsx";
// import AddAdmin from "./components/AddAdmin.jsx";
import Layout from "./components/Layout.jsx";

function Cibo() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="Login" element={<Login />} />
          {/* <Route path="AddAdmin" element={<AddAdmin />} /> */}
          <Route path="AddShop" element={<AddShop />} />
          <Route path="LogUp" element={<LogUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Cibo />);
