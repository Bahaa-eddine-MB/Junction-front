import { useState } from "react";
import { useRouter } from "next/router";
const DropDown = ({ title, list }: { title: string; list: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between px-16 py-4 hover:bg-primaryColor items-center hover:bg-opacity-60 hover:cursor-pointer"
      >
        <p className="text-2xl text-secondaryColor">{title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}
          />
        </svg>
      </div>
      <div className={`${!isOpen && "hidden"} bg-secondaryColor py-8`}>
        {list.map((element,index) => {
          return (
            <>
              <div onClick={()=>router.push("/home/courses/lesson")} className=" px-16 flex gap-16 items-center py-4 hover:cursor-pointer">
                <div className="bg-white w-8 h-8 rounded-full" />
                <p className="text-white text-lg">{element}</p>
              </div>
              <div className={`${index == (list.length -1) && "hidden"} px-12`}>
                <div className="bg-thirdColor w-full h-[1px]" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default DropDown;