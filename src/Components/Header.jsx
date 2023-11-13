import React from "react";
import { useState, useEffect } from "react";

export default function Header() {
  // FUNCTION FOR CHANGE HEADER BACKGROUND
  const [screenSize, setScreenSize] = useState("");

  function getCurrentDimension() {
    return window.innerWidth;
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  });

  console.log(screenSize);

  return (
    <div className="w-full bg-breaker-bay-400">
      <img
        src={`${
          screenSize > 500
            ? "images/bg-header-desktop.svg"
            : "images/bg-header-mobile.svg"
        }`}
        alt="background image desktop"
      />
    </div>
  );
}
