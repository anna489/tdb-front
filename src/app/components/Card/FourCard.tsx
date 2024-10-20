import React from "react";
import { MdRemoveRedEye } from "react-icons/md";

// Sample data for the cards
const cardData = [
  {
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/f91e/b36c/98291be1397ee2154101bd043f1bc390?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oh00QJheWmQDb-PjM99Abc5X9GwtZG8bGAzwmFEM3W4ccuV1z1nLLOIgVeb3b7gFpU-VWdOm2zht9uQmSNl7ew297eHQfGVpAtfidcZvSt1f08BDtmzDbVwmXECASFx5pq~cwrNtYhrdrQhQ39HI-GRjXQGYohCTo2YVw4Qgr3h8WxMLRIxelMrOl7EBpLqas9A4e~NLz~~fn4aR5TP9GZoMuv7mPF5ae-ql6G6ZmtTPmNPCv56kQwNP-DO7dPnGSUdQoXnBc4wr8W2C2ho~jb8iQzLRfRpPiVb60Z0HNg~JnvtGGdLlZrvIkaTq83V9ie0tHLeg666AXU40gBbgWg__",
    title:
      "How technical and price action analysis can help traders through the US election",
    description:
      "Trading a discretionary or tactical strategy through the US election cycle is not an easy proposition – it requires thorough research, an understanding of....",
    date: "Aug 19, 2024",
    category: "Economic",
    views: 19,
  },
  {
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/f91e/b36c/98291be1397ee2154101bd043f1bc390?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oh00QJheWmQDb-PjM99Abc5X9GwtZG8bGAzwmFEM3W4ccuV1z1nLLOIgVeb3b7gFpU-VWdOm2zht9uQmSNl7ew297eHQfGVpAtfidcZvSt1f08BDtmzDbVwmXECASFx5pq~cwrNtYhrdrQhQ39HI-GRjXQGYohCTo2YVw4Qgr3h8WxMLRIxelMrOl7EBpLqas9A4e~NLz~~fn4aR5TP9GZoMuv7mPF5ae-ql6G6ZmtTPmNPCv56kQwNP-DO7dPnGSUdQoXnBc4wr8W2C2ho~jb8iQzLRfRpPiVb60Z0HNg~JnvtGGdLlZrvIkaTq83V9ie0tHLeg666AXU40gBbgWg__",
    title:
      "How technical and price action analysis can help traders through the US election",
    description:
      "Trading a discretionary or tactical strategy through the US election cycle is not an easy proposition – it requires thorough research, an understanding of....",
    date: "Aug 19, 2024",
    category: "Economic",
    views: 19,
  },
  {
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/f91e/b36c/98291be1397ee2154101bd043f1bc390?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oh00QJheWmQDb-PjM99Abc5X9GwtZG8bGAzwmFEM3W4ccuV1z1nLLOIgVeb3b7gFpU-VWdOm2zht9uQmSNl7ew297eHQfGVpAtfidcZvSt1f08BDtmzDbVwmXECASFx5pq~cwrNtYhrdrQhQ39HI-GRjXQGYohCTo2YVw4Qgr3h8WxMLRIxelMrOl7EBpLqas9A4e~NLz~~fn4aR5TP9GZoMuv7mPF5ae-ql6G6ZmtTPmNPCv56kQwNP-DO7dPnGSUdQoXnBc4wr8W2C2ho~jb8iQzLRfRpPiVb60Z0HNg~JnvtGGdLlZrvIkaTq83V9ie0tHLeg666AXU40gBbgWg__",
    title:
      "How technical and price action analysis can help traders through the US election",
    description:
      "Trading a discretionary or tactical strategy through the US election cycle is not an easy proposition – it requires thorough research, an understanding of....",
    date: "Aug 19, 2024",
    category: "Economic",
    views: 19,
  },
  {
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/f91e/b36c/98291be1397ee2154101bd043f1bc390?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oh00QJheWmQDb-PjM99Abc5X9GwtZG8bGAzwmFEM3W4ccuV1z1nLLOIgVeb3b7gFpU-VWdOm2zht9uQmSNl7ew297eHQfGVpAtfidcZvSt1f08BDtmzDbVwmXECASFx5pq~cwrNtYhrdrQhQ39HI-GRjXQGYohCTo2YVw4Qgr3h8WxMLRIxelMrOl7EBpLqas9A4e~NLz~~fn4aR5TP9GZoMuv7mPF5ae-ql6G6ZmtTPmNPCv56kQwNP-DO7dPnGSUdQoXnBc4wr8W2C2ho~jb8iQzLRfRpPiVb60Z0HNg~JnvtGGdLlZrvIkaTq83V9ie0tHLeg666AXU40gBbgWg__",
    title:
      "How technical and price action analysis can help traders through the US election",
    description:
      "Trading a discretionary or tactical strategy through the US election cycle is not an easy proposition – it requires thorough research, an understanding of....",
    date: "Aug 19, 2024",
    category: "Economic",
    views: 19,
  },
  // You can add more card objects here
];

export const FourCard = () => {
  return (
    <div className="bg-[#F5F5F7] p-16 ">
      <div className="flex justify-between items-center py-10">
        <h1 className="md:text-[48px] text-[20px] text-[#1B2D6B] font-semibold w-[50%]">
          Oнцлох мэдээ
        </h1>
        <div className="md:w-[100%] w-[50%] text-end text-[#476788] text-[15px]">
          <div className="hidden md:block">
            <p>Read more</p>
          </div>
          <div className="border w-full mt-2"></div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-6 ">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white p-4 rounded-xl">
            <img src={card.imgSrc} alt="" className="rounded-xl" />
            <h1 className="text-[16px] font-semibold my-2 mx-2">
              {card.title}
            </h1>
            <p className="text-[13px] font-normal my-2 mx-2">
              {card.description}
            </p>
            <div className="border w-full"></div>
            <p className="text-[13px] font-light my-2 mx-2">{card.date}</p>
            <div className="flex justify-between items-center my-2 mx-2">
              <p className="text-[15px] text-[#2986FE] font-semibold">
                {card.category}
              </p>
              <p className="flex gap-2 justify-center items-center">
                <span>
                  <MdRemoveRedEye />
                </span>
                {card.views}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
