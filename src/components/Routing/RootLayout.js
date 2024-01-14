import React from "react";
import NavigationBar from "./NavBar/NavBar";
import Footer from "../NavBar/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <NavigationBar />
      {/* placeholder component */}
      <div style={{ minHeight: "85vh" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;