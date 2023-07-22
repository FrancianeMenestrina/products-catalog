import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="gradient">
      <Header />
      <div className="min-h-screen container mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
