"use client";

import React, { useEffect, useState } from "react";
import { HiMiniChevronUpDown } from "react-icons/hi2";

const headerItems = [
  { title: "Бидний тухай" },
  { title: "Үйлчилгээ" },
  { title: "Холбоо барих" },
  { title: "Тусламж" },
];

export const Header = () => {
  const [language, setLanguage] = useState("Mongolia");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "Mongolia" ? "English" : "Mongolia"
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) return null;

  return (
    <div className="px-24">
      <div className="flex justify-between items-center my-4 ">
        <div></div>
        <div className="flex space-x-6">
          {headerItems.map((item, index) => (
            <h1
              key={index}
              className="uppercase font-bold text-[16px] flex items-center text-[#DFDFDF] hover:text-[#007AFF] transition-colors duration-200"
            >
              {item.title}
            </h1>
          ))}

          {/* Hel solih tovch */}
          <button
            onClick={toggleLanguage}
            className="uppercase font-bold text-[16px] flex items-center text-[#007AFF] hover:text-[#007AFF] transition-colors duration-200 cursor-pointer focus:outline-none"
          >
            {language}
            <span className="ml-1 ">
              <HiMiniChevronUpDown className="font-bold text-2xl" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
