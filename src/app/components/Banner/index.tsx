"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BannerHeader } from "../Headers/BannerHeader";
import { Button } from "@/components/ui/button";

const images = [
  "https://s3-alpha-sig.figma.com/img/43ac/0bc7/8254cf49456ef214e90e4c266f693fdf?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X9Z-eQgnfZ3ZlU6IIt2f3IXu67nSYOBkO3v6tNnPBFSTnteJoETojmbpbaWzMEMnu68sBjCtzg251A2qEPiv~clmLfE7P9t2yCh69UX5g2lt27tAmWPCiWgLKMKKRgmnK1Iyw8PpOzRp3QdO4uZfTn4wkyNcmDwaLEtbp6b0xRzRfgd5yQlQ1SM~yG1M66~SeNNs5vT-0Hs-CuzV4MjDEgJ3Db1py-0oekSfYghjbvcobbkDQlcu5R23R1qLX8Z6GpnrzUptOHADqSxiWvAwrVaVHs624x9PFGfxTeFoeiBt70iuvcy-77IB60WIgHQkFOLmiavyDvhHI6niBo2dDQ__",
  "https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=",
  "https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg",
  // Add more image URLs here
];

export const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  return (
    <div className="md:h-[600px] h-[600px] w-full relative overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // 1 second for fade
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </AnimatePresence>
      <div className="relative z-20">
        {" "}
        {/* Set a higher z-index for the header */}
        <BannerHeader />
        <div className="flex flex-col justify-center items-center mt-[100px]">
          <h1 className="text-white text-[48px] font-bold text-center leading-none">
            Your partner in Mongolian <br /> Capital Market
          </h1>
          <p className="font-thin text-[20px] text-white my-8">
            Your way to wall street
          </p>
          <Button className="rounded-3xl bg-[#007AFF]">Find out more</Button>
        </div>
      </div>
    </div>
  );
};
