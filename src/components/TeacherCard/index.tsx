import Image from "next/image";
import teacher from "@/images/teacher.png";
import video from "@/images/video.svg";
import message from "@/images/message.svg";
import article from "@/images/article.svg";
import tv from "@/images/tv.svg";
import certificate from "@/images/certificate.svg";
import Button from "../Button";

const TeacherCard = () => {
  return (
    <>
      <div className="bg-white drop-shadow-md shadow-secondaryColor border-gray-700 rounded-sm px-16 ">
        <div className="flex gap-8 justify-center py-16">
          <Image className="w-32 h-32" src={teacher} alt="teacher" />
          <div>
            <h2 className="text-primaryColor text-xl">Ramzi hakim</h2>
            <p className="text-secondaryColor text-lg">
              your profile is almost completed your profile is almost completed
              your profile d 
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-secondaryColor text-2xl font-bold pb-2">About</p>
          <p className="text-textColor text-lg">
            your profile is almost completed your profile is almost completed
            your profile is almost completed your profile is
          </p>
        </div>
        <div className="gid grid-flow-row grid gap-8 pt-8">
          <div className="flex gap-6">
            <Image src={video} alt="video" />
            <p className="text-secondaryColor text-lg">12 videos</p>
          </div>
          <div className="flex gap-6">
            <Image src={message} alt="video" />
            <p className="text-secondaryColor text-lg">messages</p>
          </div>
          <div className="flex gap-6">
            <Image src={article} alt="articles" />
            <p className="text-secondaryColor text-lg">12 articles</p>
          </div>
          <div className="flex gap-6">
            <Image src={tv} alt="access" />
            <p className="text-secondaryColor text-lg">Limited access</p>
          </div>
          <div className="flex gap-6 col-span-2 justify-center">
            <Image src={certificate} alt="certificate" />
            <p className="text-secondaryColor text-lg">
              Certificat de fin de formation
            </p>
          </div>
        </div>
        <div className="py-8 col-span-2 flex justify-center">
            <Button className="w-[28rem]">Start learning</Button>
        </div>
      </div>
    </>
  );
};

export default TeacherCard;
