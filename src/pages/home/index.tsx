import ProfileProgress from "@/components/ProfileProgress";
import Layout from "./Layout";
import Image from "next/image";
import sad from "@/images/sad.png";
import { CircularProgress } from "@nextui-org/react";
import calender from "@/images/Group 21.png";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import News from "@/components/News";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import cadr from "@/icons/cadr.svg";

const HomePage = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Layout>
        <section>
          <div className=" p-16">
            <ProfileProgress />
          </div>
          <div className="scroll-container flex gap-8 justify-center overflow-x-hidden">
            <div className="bg-thirdColor rounded-md w-[28rem]">
              <div className="bg-secondaryColor flex justify-around py-4 rounded-t-md w-full items-center">
                <p className="text-white">{"<<"}</p>
                <p className="text-blue-300 text-2xl">last watch</p>
                <p className="text-white">{">>"}</p>
              </div>
              <div className=" flex gap-8 py-12 px-16 items-center">
                <Image height={100} width={100} src={sad} alt="sad" />
                <p className="text-textColor text-xl">
                  You didnt!
                  <br />
                  just go do
                </p>
              </div>
            </div>
            <div className="rounded-md bg-thirdColor w-[28rem]">
              <p className="text-textColor px-8 pt-8 text-2xl">Your progress</p>
              <div className="flex justify-between px-8 py-4">
                <div className="space-y-4">
                  <div className="flex flex-col items-center gap-2">
                    <CircularProgress
                      className="text-orange-400"
                      aria-label="Loading..."
                      size="lg"
                      value={40}
                      color="warning"
                      showValueLabel={true}
                    />
                    <p className="text-orange-400">Exercise</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <CircularProgress
                      className="text-red-600"
                      aria-label="Loading..."
                      size="lg"
                      value={20}
                      color="danger"
                      showValueLabel={true}
                    />
                    <p className="text-red-600">learn</p>
                  </div>
                </div>
                <Image height={40} width={180} src={calender} alt="calender" />
              </div>
            </div>
            <div className="rounded-md bg-thirdColor w-[28rem]">
              <p className="text-textColor px-8 pt-8 text-2xl">To do list</p>
              <div className="flex flex-col px-8 gap-4 pt-4">
                <div className="flex justify-between px-8">
                  <FormControlLabel
                    className="text-textColor"
                    control={<Checkbox />}
                    label="Solve math"
                    sx={{
                      color: "#105B70",
                      "&.Mui-checked": {
                        color: "#105B70",
                      },
                    }}
                  />

                  <p className="text-primaryColor text-opacity-80">7:00 pm</p>
                </div>
                <div className="flex justify-between px-8">
                  <FormControlLabel
                    className="text-textColor"
                    control={<Checkbox />}
                    label="Solve math"
                    sx={{
                      color: "#105B70",
                      "&.Mui-checked": {
                        color: "#105B70",
                      },
                    }}
                  />

                  <p className="text-primaryColor text-opacity-80">7:00 pm</p>
                </div>{" "}
                <div className="flex justify-between px-8">
                  <FormControlLabel
                    className="text-textColor"
                    control={<Checkbox />}
                    label="Solve math"
                    sx={{
                      color: "#105B70",
                      "&.Mui-checked": {
                        color: "#105B70",
                      },
                    }}
                  />

                  <p className="text-primaryColor text-opacity-80">7:00 pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 flex justify-between px-24">
            <p className="text-secondaryColor font-bold text-3xl">News</p>
            <span className="text-primaryColor underline hover:cursor-pointer">
              see all
            </span>
          </div>

          <Swiper
            style={{
              padding: 40,
            }}
            spaceBetween={250}
            slidesPerView={2}
            grabCursor={true}
            className="Portfolio-slider"
          >
            <SwiperSlide>
              <News />
            </SwiperSlide>
            <SwiperSlide>
              <News />
            </SwiperSlide>
            <SwiperSlide>
              <News />
            </SwiperSlide>
          </Swiper>
          <div className="pt-12 flex justify-between px-24">
            <p className="text-secondaryColor font-bold text-3xl">
              Teacher notes
            </p>
            <Image alt="keybox" src={cadr} />
          </div>
          <div className="pt-8 grid grid-cols-3 gap-8 px-32">
            <div className=" space-y-4 p-12 bg-gray-200 rounded-sm col-span-2">
              <h2 className="text-2xl font-semibold text-pink-300">
                Teacher article
              </h2>
              <p className="text-textColor text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita similique eligendi voluptatibus ipsa in! Enim sed ipsa
                corporis beatae, facere facilis dolore ad consectetur suscipit!
                Unde qui nostrum quae velit.
              </p>
            </div>
            <div className=" space-y-4 p-12 bg-gray-200 rounded-sm">
              <h2 className="text-2xl font-semibold text-orange-300">
                Teacher article
              </h2>
              <p className="text-textColor text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita similique eligendi voluptatibus ipsa in!
              </p>
            </div>

            <div className=" space-y-4 p-12 bg-yellow-100 rounded-sm">
              <h2 className="text-2xl font-semibold text-secondaryColor">
                Teacher article
              </h2>
              <p className="text-textColor text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita similique eligendi voluptatibus ipsa in!
              </p>
            </div>
            <div className=" space-y-4 p-12 bg-pink-100 rounded-sm col-span-2">
              <h2 className="text-2xl font-semibold text-primaryColor">
                Teacher article
              </h2>
              <p className="text-textColor text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita similique eligendi voluptatibus ipsa in! Enim sed ipsa
                corporis beatae, facere facilis dolore ad consectetur suscipit!
                Unde qui nostrum quae velit.
              </p>
            </div>
          </div>
          <span className="text-primaryColor underline flex justify-center py-8 text-2xl hover:cursor-pointer">
            see all
          </span>
        </section>
      </Layout>
    </>
  );
};

export default HomePage;
