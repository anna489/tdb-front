import React from "react";
import { FcBusinesswoman } from "react-icons/fc";

const cardData = [
  {
    title: "Үнэт цаасны зуучлалын үйлчилгээ",
    description:
      "Монголын хөрөнгийн биржийн арилжааны системтэй шууд холбогдсон электрон арилжааны системийг ашиглан үнэт цаасны арилжаанд хамгийн түргэн шуурхай, цаг хугацааны хоцрогдолгүйгээр оролцох, үнэт цаасны дансаа удирдах боломжтой.",
  },
  {
    title: "Үнэт цаасны зуучлалын үйлчилгээ",
    description:
      "Монголын хөрөнгийн биржийн арилжааны системтэй шууд холбогдсон электрон арилжааны системийг ашиглан үнэт цаасны арилжаанд хамгийн түргэн шуурхай, цаг хугацааны хоцрогдолгүйгээр оролцох, үнэт цаасны дансаа удирдах боломжтой.",
  },
  {
    title: "Үнэт цаасны зуучлалын үйлчилгээ",
    description:
      "Монголын хөрөнгийн биржийн арилжааны системтэй шууд холбогдсон электрон арилжааны системийг ашиглан үнэт цаасны арилжаанд хамгийн түргэн шуурхай, цаг хугацааны хоцрогдолгүйгээр оролцох, үнэт цаасны дансаа удирдах боломжтой.",
  },
];

export const ThreeCard = () => {
  return (
    <div className="flex flex-col justify-center items-center md:px-24 px-14  ">
      <div className="md:text-[50px] text-[25px] font-bold md:my-14  text-[#1B2D6B]">
        Онцлох үйлчилгээ
      </div>
      <div className=" justify-center items-center gap-10 grid md:grid-cols-3 sm:grid-cols-1 ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-center shadow-xl rounded-[50px] py-8 px-6 h-[400px]"
          >
            <FcBusinesswoman size={"70px"} />
            <h1 className="text-[24px] font-semibold my-4 text-[#0B3558]">
              {card.title}
            </h1>
            <p className="font-extralight text-[14px] text-[#476788]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
