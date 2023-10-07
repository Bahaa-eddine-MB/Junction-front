import Image from "next/image";
import teacher from "@/images/teacher.png";
import qanda from "@/images/qanda.svg";
const QandA = () => {
  return (
    <>
      <div className="px-24 relative">
        <div className="flex gap-16 py-8">
          <Image className="self-start" src={teacher} alt="teacher" />
          <div className="flex flex-col gap-4">
            <div className="text-secondaryColor font-semibold text-2xl">
              Ahmed iyad hamoudi
            </div>

            <p className="text-secondaryColor  text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              fugit repudiandae. Hic, reprehenderit. Dolor fuga explicabo quam
              amet quibusdam sequi quas, debitis ipsa tenetur magnam deleniti
              est soluta similique nostrum.
            </p>
          </div>
        </div>

        <div className="flex gap-16 py-8 bg-secondaryColor text-white p-4 rounded-md mt-20">
          <Image className="self-start" src={teacher} alt="teacher" />
          <div className="flex flex-col gap-4">
            <div className=" font-semibold text-2xl">Ahmed iyad hamoudi</div>

            <p className=" text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              fugit repudiandae. Hic, reprehenderit. Dolor fuga explicabo quam
              amet quibusdam sequi quas, debitis ipsa tenetur magnam deleniti
              est soluta similique nostrum.
            </p>
          </div>
        </div>
        <Image className="absolute top-16 -left-8" src={qanda} alt="vector" />
      </div>
    </>
  );
};

export default QandA;
