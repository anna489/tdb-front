"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BannerHeader } from "../Headers/BannerHeader";
import { Button } from "@/components/ui/button";

const images = [
  "https://s3-alpha-sig.figma.com/img/30bd/92a5/bcc3e48715df1ed1cd32ccd74bd69cad?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8Fw9WXA7Eo1ytJkfcUiSunncvZBhCaeCYAPNE6bhImTIwJ~Hm1gv6v-WeDAbe~RbEyOcciNVgDA~UbuvFccaZSEL3u1plo56t5DnTpl3Ri40z9nkrSow2fx9CQAUp-Dpw-dGE-Kw9M7SVLRaSXqh31whWAu3sbXxOnWwy~-fCuOswa0ISx0Iz3-pW0BpECloaMUI0tSJ4L~KkqIw6ItFbaF4OxHb57JyGtpZG6CdbgnVSVG7Jd2~9EZ9UWjPMscZw9zTZeuE-L7n~W7RePU97hJEtjC9iPrHs2D6By~IcHnS2BkETiwOszkZ5PdVaLw4dK0rgG-FDPbb8O05b3D8g__",
  // Add more image URLs here
];

export const InstallBanner = () => {
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
    <div className="md:h-[400px] h-[200px] w-full relative overflow-hidden ">
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
        <Button>Aпп татах</Button>
      </div>
    </div>
  );
};
