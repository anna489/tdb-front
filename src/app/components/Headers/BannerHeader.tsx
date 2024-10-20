import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export const BannerHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerItems = [
    {
      title: "Хөрөнгө оруулалт",
      submenu: ["  Дотоод арилжаа", "  Гадаад арилжаа"],
    },
    {
      title: "Судалгаа",
      submenu: ["  Жилийн тайлан", "  Сарын тойм", "  Шинжээчийн булан"],
    },
    {
      title: "Мэдээ",
      submenu: [
        "7 хоногийн тойм",
        "МУ-ын хөрөнгийн зах зээл",
        "ОУ-ын хөрөнгийн зах зээл",
      ],
    },
    {
      title: "Боловсрол",
      submenu: [
        "  Хөрөнгийн зах зээл гэж юу вэ?",
        "  Арилжаанд оролцох",
        "  Үнэт цаас гаргах",
        "  Хөрөнгийн зах зээлийг энгийнээр",
      ],
    },
  ];

  return (
    <div className="md:px-24 flex justify-between items-center p-4 my-4 relative">
      <div className="flex items-center justify-center ">
        <img
          src="https://s3-alpha-sig.figma.com/img/3405/f63a/1da53c0ff3f5f9c518d8d1875e99da33?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WcpTmHWzK1nTebjQVG9KuH86f1TcV3oijrIzEzeFJMOcuCjC5cHbiHXIr4Fnzd4ADNqKhIUjBcX6GJeSsxDeGNSLZZ1bQyRlKINfrfDh9kkMfIpaioezbR9C5zlJX~fhI7WEdU2a0fNK-0cDp4-s88pTqluaFrzEfV0Bnty64FsharP~uMH1y0g10tFs3NgHj3jdgbaU3Ryb7agxU9k3HYtz3ZQwln~BOmnZik0uU2gvG1JB2YIbv0kEfCQi0ZmHE4cADMNtuBEOtmBtCB9O67opfvQ24jDbE5f-bBciItpE8eZ1-NtaX4SNZt72woLQo8E1-aVJnX~jYQSZLfqqig__"
          alt="tdb"
          className="h-[30px] w-[120px] object-contain md:h-[44px] md:w-[190px]"
        />
      </div>

      <div className="hidden md:flex backdrop-blur-md bg-black/25 p-2 rounded-xl justify-center items-center px-20">
        {headerItems.map((item, index) => (
          <div key={index} className="relative group">
            <Button
              variant="ghost"
              className="font-bold text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200"
            >
              {item.title}
            </Button>
            {item.submenu && (
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg mt-1">
                {item.submenu.map((subItem, subIndex) => (
                  <Button
                    key={subIndex}
                    variant="ghost"
                    className="block w-full text-left p-2 text-black hover:bg-gray-200"
                  >
                    {subItem}
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
        <FaSearch className="font-bold text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 ml-8" />
      </div>

      {/* Mobile Menu */}
      <div className="flex md:hidden items-center">
        <Button onClick={toggleMenu} variant={"ghost"} className="text-white ">
          {isMenuOpen ? (
            <IoClose size={30} />
          ) : (
            <FaBars size={30} className="text-[50px]" />
          )}
        </Button>
      </div>
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-white shadow-md rounded-lg p-4 md:hidden z-10 mx-10 ">
          {headerItems.map((item, index) => (
            <div key={index} className="relative">
              <Button
                variant="ghost"
                className="font-bold text-black text-left w-full text-[18px]"
              >
                {item.title}
              </Button>
              {item.submenu && (
                <div className="pl-4">
                  {item.submenu.map((subItem, subIndex) => (
                    <Button
                      key={subIndex}
                      variant="ghost"
                      className="block w-full text-left   text-black hover:bg-gray-200 "
                    >
                      {subItem}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 flex justify-between items-center">
            <FaSearch className="text-black" />
            <Button className="bg-[#2986FE] font-bold">Данс нээх</Button>
          </div>
        </div>
      )}

      <div className="hidden md:flex gap-4">
        <Button variant="ghost" className="font-bold text-white hover:bg-black">
          Нэвтрэх
        </Button>
        <Button className="bg-[#2986FE] font-bold">Данс нээх</Button>
      </div>
    </div>
  );
};
