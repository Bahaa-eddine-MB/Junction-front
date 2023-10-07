import Layout from "../Layout";
import Image from "next/image";
import cake from "@/images/cake.svg";
import bluewave from "@/images/wave2.png";
import orangewave from "@/images/waves.svg";

const Achievements = () => {
  return (
    <>
      <Layout>
        <section className="flex items-center justify-center pt-8">
          <div className="relative bg-white rounded-lg px-32 py-16 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-green-300 pt-8 pb-16">
              LEVEL UP!!
            </h1>
            <Image src={cake} alt="cake!!" />
            <span className="flex text-5xl font-bold pt-8">
              <p className="text-secondaryColor">C</p>
              <p className="text-pink-300">o</p>
              <p className="text-textColor">n</p>
              <p className="text-orange-300">g</p>
              <p className="text-primaryColor">r</p>
              <p className="text-secondaryColor">a</p>
              <p className="text-gray-500">t</p>
              <p className="text-primaryColor">s</p>
            </span>
            <Image
              src={bluewave}
              alt="wave"
              className="absolute top-16 left-0 rotate-180"
            />
            <Image
              src={orangewave}
              alt="wave"
              className="absolute bottom-4 right-0 rotate-180"
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Achievements;
