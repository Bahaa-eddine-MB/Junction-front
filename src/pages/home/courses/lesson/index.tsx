import ProfileProgress from "@/components/Profile/ProfileProgress";
import Layout from "../../Layout";
import Image from "next/image";
import Lesson from "@/images/lesson.png";
import pdf from "@/images/pdf.svg";
import doc from "@/images/doc.svg";
import { useState } from "react";
import Comments from "@/components/Comments/indext";
import QandA from "@/components/Q&A";

const LessonPage = () => {
  const [isSelected, setSelected] = useState("1");
  return (
    <>
      <Layout>
        <section className="px-24 py-16">
          <ProfileProgress />
          <h2 className="text-3xl font-bold text-secondaryColor py-8">
            Lesson 2
          </h2>
          <div className=" flex gap-8 justify-between">
            <Image src={Lesson} alt="lesson" />
            <div className="bg-thirdColor px-24 py-4 rounded-md">
              <h2 className="text-secondaryColor font-bold text-3xl py-5">
                First week
              </h2>
              <div className="flex items-center gap-8 py-3">
                <div className="h-8 w-8 bg-secondaryColor rounded-full" />
                <p className="text-secondaryColor">Lesson 1</p>
              </div>
              <div className="flex items-center gap-8 py-3">
                <div className="h-8 w-8 border-4 border-secondaryColor bg-transparent rounded-full" />
                <p className="text-secondaryColor">Lesson 2</p>
              </div>
              <div className="flex items-center gap-8 py-3">
                <div className="h-8 w-8 border-4 border-secondaryColor bg-transparent rounded-full" />
                <p className="text-secondaryColor">Lesson 3</p>
              </div>
              <div className="flex items-center gap-8 py-3">
                <div className="h-8 w-8 border-4 border-secondaryColor bg-transparent rounded-full" />
                <p className="text-secondaryColor">Lesson 4</p>
              </div>
              <div className="flex items-center gap-8 py-3">
                <div className="h-8 w-8 border-4 border-secondaryColor bg-transparent rounded-full" />
                <p className="text-secondaryColor">Lesson 5</p>
              </div>
              <div className="flex items-center gap-8 py-3">
                <div className="h-8 w-8 border-4 border-secondaryColor bg-transparent rounded-full" />
                <p className="text-secondaryColor">Lesson 6</p>
              </div>
            </div>
          </div>
          <h2 className="text-secondaryColor text-3xl font-bold pt-12 pb-8">
            Description
          </h2>
          <p className="text-textColor px-4 pb-8">
            your profile is almost completed your profile is almost completed
            your profile is almost completed your profile is almost completed
            your profile is almost completed your profile is almost completed
            your profile is almost completed your profile is almost completed
            your profile is almost completed your profile is almost completed
            your profile is almost completed
          </p>
          <div className="flex justify-between pt-8">
            <h2 className="text-secondaryColor text-3xl font-bold">
              Files with the chapter :
            </h2>
            <div className="flex gap-8">
              <div className="bg-transparent border-2 border-mainRed rounded-sm text-mainRed px-12 py-4 flex gap-4 items-center hover:cursor-pointer">
                <Image src={pdf} alt="pdf" />
                <p>pdf file</p>
              </div>
              <div className=" bg-secondaryColor rounded-sm text-white px-12 py-4 flex gap-4 items-center hover:cursor-pointer">
                <Image src={doc} alt="pdf" />
                <p>.doc file</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-8 pt-24">
            <div
              onClick={() => setSelected("1")}
              className={` ${
                isSelected == "1"
                  ? "bg-secondaryColor rounded-sm text-white px-32 py-4  hover:cursor-pointer"
                  : " bg-transparent  rounded-sm text-primaryColor border-primaryColor border-2 px-32 py-4  hover:cursor-pointer"
              }`}
            >
              comment
            </div>
            <div
              onClick={() => setSelected("2")}
              className={` ${
                isSelected == "2"
                  ? "bg-secondaryColor rounded-sm text-white px-32 py-4  hover:cursor-pointer"
                  : " bg-transparent  rounded-sm text-primaryColor border-primaryColor border-2 px-32 py-4  hover:cursor-pointer"
              }`}
            >
              Q&A
            </div>
          </div>
          <div className="pt-8">{isSelected == "1" && <Comments />}</div>
          <div className="pt-8">{isSelected == "2" && <QandA />}</div>
        </section>
      </Layout>
    </>
  );
};

export default LessonPage;
