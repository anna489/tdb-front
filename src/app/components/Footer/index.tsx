import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="md:px-20 px-14 mt-20 ">
      <div className="md:flex gap-10 justify-between">
        <div className="md:grid gap-14 md:grid-cols-3 ">
          <div className="flex flex-col">
            <h1 className=" mb-3 text-[20px] text-[#0B3558] font-semibold">
              Product
            </h1>
            <p className="text-[#48637A] text-[18px]">Features</p>
            <p className="text-[#48637A] text-[18px]">Pricing</p>
            <p className="text-[#48637A] text-[18px]">Case studies</p>
            <p className="text-[#48637A] text-[18px]">Reviews</p>
            <p className="text-[#48637A] text-[18px]">Updates</p>
          </div>
          <div className="flex flex-col">
            <h1 className=" mb-3 text-[20px] text-[#0B3558] font-semibold">
              Product
            </h1>
            <p className="text-[#48637A] text-[18px]">Features</p>
            <p className="text-[#48637A] text-[18px]">Pricing</p>
            <p className="text-[#48637A] text-[18px]">Case studies</p>
            <p className="text-[#48637A] text-[18px]">Reviews</p>
            <p className="text-[#48637A] text-[18px]">Updates</p>
          </div>{" "}
          <div className="flex flex-col">
            <h1 className=" mb-3 text-[20px] text-[#0B3558] font-semibold">
              Product
            </h1>
            <p className="text-[#48637A] text-[18px]">Features</p>
            <p className="text-[#48637A] text-[18px]">Pricing</p>
            <p className="text-[#48637A] text-[18px]">Case studies</p>
            <p className="text-[#48637A] text-[18px]">Reviews</p>
            <p className="text-[#48637A] text-[18px]">Updates</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-10 justify-center md:items-start">
          <h1 className="text-[20px] text-[#0B3558]">Ready to Trade</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            mauris sed ma
          </p>
          <Input
            placeholder="Enter your email"
            className="p-6 w-full rounde-full"
          />
          <Button className="bg-[#2986FE] text-white w-[100px] rounded-full self-center md:self-start ">
            Subscribe
          </Button>
        </div>
      </div>
      <div className="border mt-10"></div>
      <div className="flex justify-between my-4">
        <p>© 2024 TDB Securities SC LLC | All Rights Reserved </p>
        <div className="flex gap-4">
          <FaFacebook />
          <FaInstagram />
          <FaYoutube />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};
