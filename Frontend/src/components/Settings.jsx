import React from "react";
import { IoMdSettings } from "react-icons/io";
import BgChange from "./BgChange";
import { Link } from "react-router";

function Settings() {
  return (
    <div>
      {/* settings dropdown */}
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-circle btn-outline"
          >
            <IoMdSettings size={30} />
          </label>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-base-200 flex flex-col justify-between text-base-content h-full w-80 p-4">
            <div className="flex flex-col items-start">
              <h3 className="font-bold py-2">Menu</h3>
              <Link className="btn btn-sm" to={"/signin"}>
                Sign In
              </Link>
              <Link className="btn btn-sm" to={"/signup"}>
                Sign Up
              </Link>
            </div>
            <div className="h-16 pb-4 gap-y-2 flex flex-col justify-between items-start">
              <h3 className="font-bold">Change Background</h3>
              <BgChange />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
