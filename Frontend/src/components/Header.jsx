import React, { useContext } from "react";
import Settings from "./Settings";

function Header() {
  return (
    <header className="absolute top-5 left-5 flex items-center justify-end w-full px-10">
      <Settings />
    </header>
  );
}

export default Header;
