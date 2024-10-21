import React from "react";
import { MdRemoveRedEye } from "react-icons/md";

// Sample data for the cards
const cardData = [
  {
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/f91e/b36c/98291be1397ee2154101bd043f1bc390?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oh00QJheWmQDb-PjM99Abc5X9GwtZG8bGAzwmFEM3W4ccuV1z1nLLOIgVeb3b7gFpU-VWdOm2zht9uQmSNl7ew297eHQfGVpAtfidcZvSt1f08BDtmzDbVwmXECASFx5pq~cwrNtYhrdrQhQ39HI-GRjXQGYohCTo2YVw4Qgr3h8WxMLRIxelMrOl7EBpLqas9A4e~NLz~~fn4aR5TP9GZoMuv7mPF5ae-ql6G6ZmtTPmNPCv56kQwNP-DO7dPnGSUdQoXnBc4wr8W2C2ho~jb8iQzLRfRpPiVb60Z0HNg~JnvtGGdLlZrvIkaTq83V9ie0tHLeg666AXU40gBbgWg__",
    title: "Apple Inc Q2 Earnings:",
    description:
      "On May 2, 2024, Apple Inc (NASDAQ:AAPL) disclosed its financial outcomes for the fiscal second quarter ending March 30, 2024, through an 8-K filing...",
    date: "Aug 19, 2024",
    category: "Economic",
    views: 19,
  },

  // You can add more card objects here
];

export const New = () => {
  return (
    <div className="bg-[#F5F5F7] md:p-16 p-8  ">
      <div className="flex justify-between items-center py-10">
        <h1 className="md:text-[48px] text-[20px] text-[#1B2D6B] font-semibold w-[50%]">
          Шинэ мэдээлэл
        </h1>
        <div className="md:w-[100%] w-[50%] text-end text-[#476788] text-[15px]">
          <div className="hidden md:block ">
            <p>Most read</p>
          </div>
          <div className="border w-full mt-2"></div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 w-full justify-center">
        {cardData.map((card, index) => (
          <div>
            <div key={index} className="">
              <img
                src={card.imgSrc}
                alt=""
                className="rounded-xl h-[200px] w-[400px]"
              />
              <h1 className="text-[24px] font-semibold my-2 mx-2 my-4">
                {card.title}
              </h1>
              <p className="text-[14px] font-normal my-2 mx-2 md:block hidden">
                {card.description}
              </p>
            </div>
          </div>
        ))}
        {cardData.map((card, index) => (
          <div>
            <div key={index} className="hidden md:block ">
              <img
                src={card.imgSrc}
                alt=""
                className="rounded-xl h-[120px] w-[300px]"
              />
              <h1 className="text-[16px] font-semibold my-2 mx-2 my-4">
                {card.title}
              </h1>
              <img
                src={card.imgSrc}
                alt=""
                className="rounded-xl h-[120px] w-[300px]"
              />
              <h1 className="text-[16px] font-semibold my-2 mx-2 my-4">
                {card.title}
              </h1>
            </div>
          </div>
        ))}
        {cardData.map((card, index) => (
          <div>
            <div key={index} className="md:block hidden">
              <img
                src={card.imgSrc}
                alt=""
                className="rounded-xl h-[200px] w-[400px]"
              />
              <h1 className="text-[24px] font-semibold my-2 mx-2 my-4">
                {card.title}
              </h1>
              <p className="text-[14px] font-normal my-2 mx-2">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-0 right-0 h-full w-[80px] bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </div>
  );
};
