import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export const RegisterCard = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <h1 className="text-[#005CA8] md:text-[48px] text-[25px] font-semibold">
        И-Мэйл хаяг бүргүүлэх ?
      </h1>
      <div className="flex justify-center gap-6 my-5">
        <Input
          placeholder="Мэйл хаягаа оруулна уу..."
          className="rounded-3xl px-10 py-6 md:w-[400px]"
        />
        <Button className="bg-[#2986FE] rounded-3xl  py-6">Sign up</Button>
      </div>
      {/* <div className="flex justify-center gap-6">
        <div className="flex">
          <Input type="checkbox" />
          <p>7 хоногийн тойм</p>
        </div>
      </div> */}
    </div>
  );
};
