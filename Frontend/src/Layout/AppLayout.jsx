import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { BGChange } from "../hooks/ContextApi";
import Header from "../components/Header";

function AppLayout() {
  const { uploadedFiles } = useContext(BGChange);

  return (
    <main
      className="h-screen w-full bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${uploadedFiles[0] || "/background.jpg"})`,
      }}
    >
      <Header />
      <Outlet />
    </main>
  );
}

export default AppLayout;
