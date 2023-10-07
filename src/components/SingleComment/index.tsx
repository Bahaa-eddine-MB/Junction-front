import Image from "next/image";
import teacher from "@/images/teacher.png";
import empty from "@/icons/emptyStart.svg";
import filled from "@/icons/filledStart.svg";

const SingleComment = () => {
  return (
    <>
      <div className="flex gap-16 py-8">
        <Image className="self-start" src={teacher} alt="teacher" />
        <div className="flex flex-col gap-4">
          <div className="text-secondaryColor font-semibold text-2xl">Ahmed iyad hamoudi</div>
          <span className="flex gap-2">
            <Image src={filled} alt="start" />
            <Image src={filled} alt="start" />
            <Image src={filled} alt="start" />
            <Image src={empty} alt="start" />
            <Image src={empty} alt="start" />
          </span>
          <p className="text-secondaryColor  text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            fugit repudiandae. Hic, reprehenderit. Dolor fuga explicabo quam
            amet quibusdam sequi quas, debitis ipsa tenetur magnam deleniti est
            soluta similique nostrum.
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleComment;
