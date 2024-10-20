import React from "react";

export const PersonInformation = () => {
  return (
    <div className="px-10 flex justify-around items-center my-20 bg-[#F5F5F7] md:bg-white">
      <div className="flex justify-between md:gap-20 gap-6 items-center md:border p-6 rounded-2xl ">
        <img
          src="https://s3-alpha-sig.figma.com/img/7e3c/d096/a577ee7961b270a8a71111d4e356deff?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fceghs1KLB~TQ4RaD9PX4zPPdlU0xSGAKxIWA1Qexs20KR03X9kBgXrz6JefJgy6ipg5tvKU6egdUqbbhNPOZ8yu1bJBzA5pt1BfmvpZgcCx0LvtxLq9nJA21f1q-yQGckRqoiP7tOEN2PCbGk2p9DHFaEqLABtUF8hALVtTDuBH7F7SrGtTdilOJquB-S4~Ta-LSmRJDImwLVj~M4cYPTJkst9v0GTNqOCIOgO9lCUeqQ5S2nvIMzCsb1x7gEAbeG6RUZ0qxJxS~QVWO4xa56nfGKwJ19g7CRnZ5A7vQTSfYHf6AZzQIUH~OPhKFVGP0QlP6knXZ~wxE29XbfSp0g__"
          alt=""
          className="md:h-[350px] md:w-[430px] md:rounded-xl rounded-full h-[140px] w-[140px]"
        />

        <div className="md:px-10 md:py-10 ">
          {/* Hidden paragraph on small screens, shown on medium screens and above */}
          <p className="hidden md:block text-[14px] text-[#476788]">
            Монгол Улсын хөрөнгийн зах зээл 33 жилийн хөгжлийн түүхтэй бөгөөд
            энэхүү хөгжлийн тэн хагасыг бид эрхэм харилцагч, хөрөнгө
            оруулагчдынхаа хамтаар бичилцсэн. 2008 онд үүсгэн байгуулагдсан
            цагаасаа хойш бид “анхдагч, шинийг санаачлагч, үндэсний баялаг
            бүтээгчдийг дэмжигч, харилцагчдын найдвартай зөвлөх байх” эрхэм
            зорилгын хүрээнд харилцагчдын хүсэл зорилгыг эрхэмлэсэн, дэвшилтэт
            технологид суурилсан цогц бүтээгдэхүүн үйлчилгээ, санхүүгийн
            шийдлийг мэргэжлийн дээд түвшинд харилцагчдадаа хүргэн ажилласаар
            байна.
            <span>
              Хөрөнгийн зах зээл боломжоор дүүрэн. Та энэхүү боломж дүүрэн зах
              зээлийн аялалд гарахад сайн хөтөч хамгийн чухал. Бид таны газрын
              зураг болж энэхүү аялалд амжилттай гарахад үргэлж хамт байх болно.
            </span>
          </p>

          <h1 className="text-[#0B3558] font-bold md:py-6 md:text-[32px] text-[20px]">
            Г.Энхбат{" "}
          </h1>
          <p className="text-[10px] md:text-[14px]">
            “Ти Ди Би Секьюритис ҮЦК” ХХК-ийн Гүйцэтгэх захирлын тэргүүн орлогч
          </p>
        </div>
      </div>
    </div>
  );
};
