import Button from "@/components/Button";
import Layout from "../../Layout";
import Image from "next/image";
import SecondButton from "@/components/SecondButton";
import teacher from "@/images/teacher.png";
import attach from "@/icons/attach.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TaskRow from "@/components/TaskRow";

const ToDo = () => {
  return (
    <>
      <Layout>
        <section className="px-32 py-16">
          <h1 className="text-secondaryColor text-3xl font-bold ">
            Task to do
          </h1>
          <div className="flex justify-between gap-24">
            <div className="flex gap-8 pt-8">
              <Image
                className="self-start w-16 h-16"
                src={teacher}
                alt="teacher"
              />
              <div>
                <h2 className="font-semibold text-xl text-secondaryColor">
                  Description
                </h2>
                <p className="text-textColor txt-lg pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  doloribus tenetur ullam tempora laudantium amet impedit
                  aliquid aperiam corrupti nesciunt, cumque dolore voluptates
                  animi nemo. Deserunt fuga reprehenderit doloremque magnam?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  doloribus tenetur ullam tempora laudantium amet impedit
                  aliquid aperiam corrupti nesciunt, cumque dolore voluptates
                  animi nemo. Deserunt fuga reprehenderit doloremque magnam?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  doloribus tenetur ullam tempora laudantium amet impedit
                  aliquid aperiam corrupti nesciunt, cumque dolore voluptates
                  animi nemo. Deserunt fuga reprehenderit doloremque magnam?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  doloribus tenetur ullam tempora laudantium amet impedit
                  aliquid aperiam corrupti nesciunt, cumque dolore voluptates
                  animi nemo. Deserunt fuga reprehenderit doloremque magnam?
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <span className="text-mainRed flex gap-2 pb-12">
                <p> Deadline:</p>
                <p className="text-textColor">22/02/2023</p>
              </span>
              <Button className="w-56 flex items-center  gap-4">
                <Image className="ml-8" src={attach} alt="pic" />
                <p>Add file</p>
              </Button>
              <SecondButton>
                {" "}
                <FormControlLabel
                  className="text-textColor hover:text-white"
                  control={<Checkbox />}
                  label="Mark as done"
                  sx={{
                    color: "#105B70",
                    "&.Mui-checked": {
                      color: "#105B70",
                    },
                  }}
                />
              </SecondButton>
              <span className="text-mainRed underline self-end text-opacity-70 hover:cursor-pointer">
                report a problem
              </span>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-gray-300 mt-16"/>
          <div className="px-16 pt-8">
           <p className="text-secondaryColor pb-4 text-xl">Other</p>
           <TaskRow/>
           <TaskRow/>
        </div>
        </section>
      </Layout>
    </>
  );
};

export default ToDo;
