import React from "react";
import Foooter from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Foooter />
  </div>
);

export default Layout;
