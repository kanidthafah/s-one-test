import { useState } from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import NewsCard from "../components/NewsCard";

const news = [
  {
    title:
      "ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม",
    img: "/images/SOne_index_pic3.jpg",
    link: "#",
  },
  {
    title:
      "ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม",
    img: "/images/SOne_index_pic3.jpg",
    link: "#",
  },
  {
    title:
      "ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม",
    img: "/images/SOne_index_pic3.jpg",
    link: "#",
  },
];

export default function Home() {
  const [hoverBullet, setHoverBullet] = useState({});
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedRoad, setSelectedRoad] = useState("");
  const [email, setEmail] = useState("กรุณาใส่อีเมล");

  const handleSelectProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
  };

  const handleSelectDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleSelectRoadChange = (event) => {
    setSelectedRoad(event.target.value);
  };

  return (
    <div className="w-full flex flex-col px-1">
      <div className="h-auto flex flex-col lg:flex-row py-2 gap-1.5 ">
        <Banner />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 px-2">
        <Categories />
      </div>
      <div className="h-auto xl:h-[360px] py-2 flex flex-col lg:flex-row gap-2">
        <div className="w-full lg:w-3/12 flex flex-col gap-0.5 border border-primary">
          <div className="w-full py-1 px-2 bg-primary text-white">
            <h3 className="text-2xl md:text-3xl text-start">
              ค้นหาศูนย์บริการใกล้บ้านคุณ
            </h3>
          </div>
          <div className="bg-zinc-900 h-full px-2 py-3 xl:px-6 xl:py-4 flex flex-col gap-2">
            <div className="w-full flex flex-col gap-1 xl:gap-3">
              <div className="grid grid-cols-6 items-center gap-2">
                <label
                  htmlFor="province"
                  className="col-span-2 text-white text-xl lg:text-2xl xl:text-3xl text-end"
                >
                  จังหวัด
                </label>
                <select
                  value={selectedProvince}
                  onChange={handleSelectProvinceChange}
                  id="province"
                  name="province"
                  className="col-span-4 w-full p-1 h-10 text-lg xl:text-xl text-black border border-primary bg-white"
                >
                  <option value="" disabled>
                    --เลือกจังหวัด--
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div className="grid grid-cols-6 items-center gap-2">
                <label
                  htmlFor="district"
                  className="col-span-2 text-white text-xl lg:text-2xl xl:text-3xl text-end"
                >
                  เขต/อำเภอ
                </label>
                <select
                  value={selectedDistrict}
                  onChange={handleSelectDistrictChange}
                  id="district"
                  name="district"
                  className="col-span-4 w-full p-1 h-10 text-lg xl:text-xl text-black border border-primary bg-white"
                >
                  <option value="" disabled>
                    --เลือกอำเภอ--
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div className="grid grid-cols-6 items-center gap-2">
                <label
                  htmlFor="road"
                  className="col-span-2 text-white text-xl lg:text-2xl xl:text-3xl text-end"
                >
                  ถนน
                </label>
                <select
                  value={selectedRoad}
                  onChange={handleSelectRoadChange}
                  id="road"
                  name="road"
                  className="col-span-4 w-full p-1 h-10 text-lg xl:text-xl text-black border border-primary bg-white"
                >
                  <option value="" disabled>
                    --เลือกถนน--
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
            <p className="text-sm lg:text-base xl:text-lg text-primary text-center">
              หมายเหตุ : กรุณาเลือกอย่างใดอย่างหนึ่ง
            </p>
            <div className="grid grid-cols-6 mb-2">
              <div className="col-span-2"></div>
              <button className="col-span-4 flex justify-center items-center cursor-pointer">
                <img
                  src="/images/SOne_index_search.png"
                  alt="SEARCH-IMG"
                  className="h-8 xl:h-10"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12 flex flex-col border border-b-4 border-primary">
          <div className="flex justify-between py-1 px-3 border-b border-primary">
            <h4 className="text-2xl md:text-3xl">News & Events</h4>
            <div className="flex gap-1 items-center">
              <button className="cursor-pointer">
                <img
                  src="/images/SOne_index_bullet1.png"
                  alt="bullet-img"
                  className="w-3 h-3"
                />
              </button>
              <button
                onMouseEnter={() =>
                  setHoverBullet((prev) => ({ ...prev, 0: true }))
                }
                onMouseLeave={() =>
                  setHoverBullet((prev) => ({ ...prev, 0: false }))
                }
                className="cursor-pointer"
              >
                <img
                  src={
                    hoverBullet[0]
                      ? "/images/SOne_index_bullet1.png"
                      : "/images/SOne_index_bullet2.png"
                  }
                  alt="bullet-img"
                  className="w-3 h-3"
                />
              </button>
              <button
                onMouseEnter={() =>
                  setHoverBullet((prev) => ({ ...prev, 1: true }))
                }
                onMouseLeave={() =>
                  setHoverBullet((prev) => ({ ...prev, 1: false }))
                }
                className="cursor-pointer"
              >
                <img
                  src={
                    hoverBullet[1]
                      ? "/images/SOne_index_bullet1.png"
                      : "/images/SOne_index_bullet2.png"
                  }
                  alt="bullet-img"
                  className="w-3 h-3"
                />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 py-4 h-full">
            {news.map((item, index) => (
              <div
                key={index}
                className="px-4 border-e-0 sm:border-e-2 border-orange-300 last:border-0"
              >
                <NewsCard
                  img={item.img}
                  title={item.title}
                  link={item.link}
                  isFirst={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-3/12 flex flex-col">
          <div className="relative h-full">
            <div className="w-full flex">
              <img
                src="/images/SOne_index_tips1.png"
                alt="TIPS-CHARACTER"
                className="h-48"
              />
              <img
                src="/images/SOne_index_tips2.png"
                alt="TIPS-CHARACTER"
                className="h-48 w-full"
              />
              <img
                src="/images/SOne_index_tips3.png"
                alt="TIPS-CHARACTER"
                className="h-48"
              />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-6 sm:-translate-x-24 lg:-translate-x-8 -translate-y-1/2 flex flex-col">
              <h3 className="text-center text-xl sm:text-3xl text-primary font-medium mb-1">
                Safety Tips
              </h3>
              <img
                src="/images/SOne_index_pic66.png"
                alt="QUOTE-IMG"
                className="w-2 sm:w-4 self-start"
              />
              <p className="text-white text-center text-pretty my-1 text-base sm:text-xl px-3">
                ควรเติมน้ำมันตอนเช้าขณะที่อุณหภูมิบนพื้นดินยังเย็นอยู่
              </p>
              <img
                src="/images/SOne_index_pic99.png"
                alt="QUOTE-IMG"
                className="w-2 sm:w-4 self-end"
              />
            </div>
          </div>
          <div className="flex items-center gap-1 py-3 border-b-2 border-dashed border-primary">
            <p className="w-1/6 xl:w-2/6 text-base md:text-xl lg:text-2xl text-start">
              สมัครรับข่าวสาร
            </p>
            <div className="w-5/6 xl:w-4/6 flex">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="border border-primary p-1 w-full h-10 text-base lg:text-lg xl:text-xl"
              />
              <img
                src="/images/SOne_index_btgo.jpg"
                alt="SEARCH-ICON"
                className="w-10 h-10 border-e border-b border-t border-primary"
              />
            </div>
          </div>
          <div className="flex justify-center items-center p-4 h-full">
            <img
              src="/images/SOne_index_call.png"
              alt="TEL-IMAGE"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
