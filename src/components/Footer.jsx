import React from "react";
import turnedInLogo from "/turnedin-putih.svg";

export default function Footer() {
  return (
    <nav className="bg-custom-blue py-1">
      <div className="container px-16 mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={turnedInLogo} alt="Turned In Logo" className="h-16 w-16" />
          <p className="text-white font-bold text-xl">Turned In</p>
        </div>
      </div>
    </nav>
  );
}
