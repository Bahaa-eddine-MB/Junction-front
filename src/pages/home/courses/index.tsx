import Layout from "../Layout";
import ProfileProgress from "@/components/ProfileProgress";
import Image from "next/image";
import pc from "@/images/pc.png";
import TeacherCard from "@/components/TeacherCard";
import Lessons from "@/components/Lessons";
const CoursesPage = () => {
  return (
    <>
      <Layout>
        <section className="relative">
          <div className=" p-16 px-24">
            <ProfileProgress />
          </div>
          <Image className="absolute top-64 w-full" src={pc} alt="pic" />
          <div className="z-20 isolate pt-28 px-16 flex justify-center gap-16">
            <div className="text-white w-[90vw] ">
              <h2 className="text-bold text-2xl pb-16">Description</h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                temporibus eius architecto aspernatur? Dolorum provident ex
                pariatur numquam iusto dicta exercitationem voluptatem officiis,
                tempore, nesciunt sunt, eum sint delectus labore! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Hic temporibus eius
                architecto aspernatur? Dolorum provident ex pariatur numquam
                iusto dicta exercitationem voluptatem officiis, tempore,
                nesciunt sunt, eum sint delectus labore! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Hic temporibus eius
                architecto aspernatur? Dolorum provident ex pariatur numquam
                iusto dicta exercitationem voluptatem officiis, tempore,
                nesciunt sunt, eum sint delectus labore!
              </p>
            </div>
            <div className="-mt-32 pb-16">
              <TeacherCard/>   
            </div>
           
          </div>
          <div className="px-24">
            <h2 className="text-3xl font-bold text-secondaryColor">Content</h2>
          </div>
          <div className="px-24 py-16">
             <Lessons/>
          </div>
         
        </section>
      </Layout>
    </>
  );
};

export default CoursesPage;
