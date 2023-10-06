import Image from "next/image";
import pic from "@/images/teacher.png";
import Arrow from "@/icons/arrow.svg";
import { useRouter } from "next/router";
const TaskRow = () => {
    const router = useRouter()
  return (
    <>
      <div className="flex gap-16 justify-between items-center">
        <div className="flex gap-16 pt-8">
          <Image className="self-start  w-32 h-32" height={80} width={80} src={pic} alt=" teacher" />
          <div className="flex flex-col">
            <h2 className="text-secondaryColor font-semibold text-xl">Task to do</h2>
            <p className="text-textColor pl-4 text-lg pt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              quaerat ipsum eveniet. Alias expedita fuga ullam aliquid aut quam
              obcaecati minima harum quas! Autem sequi similique quod facilis
              accusantium expedita.
            </p>
            <span className="flex gap-2 pl-4 pt-4">
              <p className="text-mainRed">Deadline :</p>
              <p className="text-textColor">22/02/2023</p>
            </span>
          </div>
        </div>

        <div onClick={()=>router.push("/home/tasks/to-do")} className="bg-primaryColor rounded-md self-center w-24 h-12 flex justify-center items-center hover:cursor-pointer">
          <Image src={Arrow} alt="arrow" />
        </div>
      </div>
    </>
  );
};

export default TaskRow;
