import React, { useState } from "react";
import Carousel from "./Carousel";

const Banner = () => {
  const [selectedTread, setSelectedTread] = useState("");
  const [selectedSeries, setSelectedSeries] = useState("");
  const [selectedWheel, setSelectedWheel] = useState("");

  const handleSelectTreadChange = (event) => {
    setSelectedTread(event.target.value);
  };

  const handleSelectSeriesChange = (event) => {
    setSelectedSeries(event.target.value);
  };

  const handleSelectWheelChange = (event) => {
    setSelectedWheel(event.target.value);
  };
  return (
    <>
      <div className="w-full lg:w-3/12 flex flex-col gap-[1px] border border-primary">
        <div className="w-full py-1 px-2 bg-primary text-white">
          <h3 className="text-2xl md:text-3xl text-start">ค้นหายาง</h3>
        </div>
        <div className="relative">
          <img
            src="/images/SOne_index_bg_searchtype.jpg"
            alt="BG-SEARCHTYPE"
            className="w-full h-[450px]"
          />
          <div className="absolute right-0 top-0 w-4/6 z-10 flex flex-col gap-3 md:gap-1 px-8 lg:px-3 xl:px-5 py-3">
            <div className="flex flex-col text-white">
              <h5 className="text-2xl xl:text-3xl">หน้ายาง</h5>
              <p className="text-lg xl:text-xl mb-1">
                ความกว้าง &#10088;มม.&#10089;
              </p>
              <select
                value={selectedTread}
                onChange={handleSelectTreadChange}
                name="tread"
                className="text-black text-lg xl:text-xl border border-primary h-10 bg-white"
              >
                <option value="" disabled>
                  --เลือกหน้ายาง--
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="flex flex-col text-white">
              <h5 className="text-2xl xl:text-3xl">ซีรี่ย์</h5>
              <p className="text-lg xl:text-xl mb-1">
                อัตราส่วนความสูงแก้มยาง &#10088;%&#10089;
              </p>
              <select
                value={selectedSeries}
                onChange={handleSelectSeriesChange}
                name="series"
                className="text-black text-lg xl:text-xl border border-primary h-10 bg-white"
              >
                <option value="" disabled>
                  --เลือกซีรี่ย์--
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="flex flex-col text-white">
              <h5 className="text-2xl xl:text-3xl">กระทะล้อ</h5>
              <p className="text-lg xl:text-xl mb-1">
                เส้นผ่าศูนย์กลาง &#10088;นิ้ว&#10089;
              </p>
              <select
                value={selectedWheel}
                onChange={handleSelectWheelChange}
                name="wheel"
                className="text-black text-lg xl:text-xl border border-primary h-10 bg-white"
              >
                <option value="" disabled>
                  --เลือกกระทะล้อ--
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="flex justify-center items-center my-3">
              <button className="cursor-pointer">
                <img
                  src="/images/SOne_index_search.png"
                  alt="SEARCH-ICON"
                  className="h-8 xl:h-10"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full lg:w-9/12">
        <img
          src="/images/SOne_Mobile_banner.jpg"
          alt="BANNER"
          className="w-full h-full md:hidden block "
        />
        <img
          src="/images/SOne_index_banner.jpg"
          alt="BANNER"
          className="w-full h-full md:block hidden"
        />
        <div className="w-full h-full flex justify-center lg:justify-end items-end lg:items-center absolute transform translate-x-1/2 right-1/2 translate-y-0 top-0 md:translate-x-0 md:right-0  md:-translate-y-1/2 md:top-1/2 py-4 lg:py-0 px-0 lg:px-4">
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Banner;
