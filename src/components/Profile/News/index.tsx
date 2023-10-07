import React from "react";
import Image from "next/image";
import news from "/public/images/news.png";
import teacher from "/public/images/teacher.png";
import filledStar from "/public/icons/filledStart.svg";
import emptyStar from "/public/icons/emptyStart.svg";
import archi from "/public/icons/archieve.png";

const News = () => {
  return (
    <div className="shadow-lg shadow-secondaryColor rounded-3xl bg-white flex  w-[50rem]">
      <Image src={news} alt="news" />
      <div className=" flex flex-col justify-center space-y-8 px-8 pt-24">
        <h2 className="text-secondaryColor font-bold text-3xl">
          learn graphes
        </h2>
        <p className="text-textColor text-lg">
          please set up your profile dfdsf dsf xdvxc xddsfdfs..
        </p>
        <div className="flex justify-between ">
          <div className="flex gap-2">
            <Image src={filledStar} alt="star" />
            <Image src={filledStar} alt="star" />
            <Image src={filledStar} alt="star" />
            <Image src={emptyStar} alt="star" />
            <Image src={emptyStar} alt="star" />
          </div>
          <p>{"(22)"}</p>
        </div>
        <div className="flex justify-between pt-4 items-center">
          <Image src={teacher} alt="teacher" />
          <p className="text-primaryColor">ramzi hakim</p>
          <Image height={10} width={30} src={archi} alt="archive" />
        </div>
      </div>
    </div>
  );
};

export default News;