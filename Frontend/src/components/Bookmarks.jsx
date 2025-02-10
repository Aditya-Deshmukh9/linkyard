import React from "react";
import { Link } from "react-router";

function Bookmarks() {
  const addBookmark = () => {
    const url = `https://www.adityadeshmukh.online/`;
    const faviconUrl = new URL("/favicon.ico", url).href;

    const newBookmark = { url, faviconUrl };
  };
  addBookmark();

  return (
    <main className="bg-white/40 absolute bottom-4 left-1/2 -translate-x-1/2 rounded-md h-28 flex items-center justify-between gap-3 p-3">
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <section
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className="bg-white/70 h-20 w-20 rounded-md flex flex-wrap items-center justify-between p-2 transition-transform transform hover:scale-125 duration-75 cursor-pointer"
      >
        <div>
          <img
            src="https://www.adityadeshmukh.online/favicon.ico"
            alt="bookmark favicon"
            className="h-6 w-6"
          />
        </div>
      </section>
      <section
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className="bg-white/70 h-20 w-20 rounded-md flex flex-wrap items-center justify-between p-2 transition-transform transform hover:scale-125 duration-75 cursor-pointer"
      >
        <div>
          <img
            src="https://www.adityadeshmukh.online/favicon.ico"
            alt="bookmark favicon"
            className="h-6 w-6"
          />
        </div>
      </section>
    </main>
  );
}

export default Bookmarks;
