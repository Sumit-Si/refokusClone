import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-between border-b-2 border-zinc-800  py-6">
      <div className="flex gap-20 items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="logo"
        />
        <div className="flex gap-8">
          {["Home", "Work", "Career", "", "News"].map((nav,index) =>
            nav.length == 0 ? (
              <span key={index} className="w-0.5 h-5 text-zinc-700">|</span>
            ) : (
              <a key={index} className="text-sm flex items-center gap-2">{index == 1 && <span style={{boxShadow: "0 0 0.55em #00FF19"}} className="inline-block w-1 h-1 rounded-full bg-green-500"></span>} {nav}</a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
