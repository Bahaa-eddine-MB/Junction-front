import Image from "next/image";
import shape1 from "@/images/shaperight.png";
import shape2 from "@/images/shapeleft.png";
import logo from "@/images/logo.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "@/components/Input";
import Button from "@/components/Button";
import eclips from "@/images/Ellipse.svg";
import wave from "@/images/waves.svg";
import { useState } from "react";
import silver from "@/images/silver.png";
import gold from "@/images/gold.png";
import diamond from "@/images/diamond.png";
import yes from "@/icons/yes.svg";
import no from "@/icons/no.svg";

const schema = yup.object().shape({
  firstname: yup.string().min(3).required("first name is required"),
  lastname: yup.string().min(3).required("Last name is required"),
  password: yup.string().min(8).max(20).required("A password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "passwords don't match")
    .required("please confirm your password"),
  email: yup
    .string()
    .email("The email is not valid")
    .required("Your email is required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must have 10 digits")
    .required("Your phone number is required"),
  Age: yup.string().required("Your age is required"),
});

type LoginForm = yup.InferType<typeof schema>;

const StartRegister = ({ goNext }: { goNext: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    // Handle form submission here
    console.log(data);
    goNext();
  };
  const [selectedPlan, setSelectedPlan] = useState("0");
  const [selectedProgramme, setSelectedProgrmme] = useState("0");

  return (
    <section className="relative overflow-hidden container mx-auto min-h-screen font-poppins  bg-gradient-to-r from-white via-thirdColor to-purple-50">
      <div className="absolute top-10 -right-24">
        <Image height={300} width={300} src={shape1} alt="KEYBOX" />
      </div>
      <div className="absolute top-10 -left-36">
        <Image height={300} width={300} src={shape2} alt="KEYBOX" />
      </div>
      <div className="absolute bottom-8 left-0">
        <Image height={100} width={100} src={wave} alt="KEYBOX" />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image height={300} width={300} src={eclips} alt="KEYBOX" />
      </div>
      <main className="isolate z-10 pb-16">
        <div className="pt-8 ml-24">
          <Image height={100} width={100} src={logo} alt="KEYBOX" />
        </div>
        <p className="text-4xl font-bold flex pt-16 px-24 text-secondaryColor pb-16">
          Choose Your programme
        </p>

        <div className="grid grid-cols-2 gap-8 px-32">
          <div
            onClick={() => setSelectedProgrmme("1")}
            className={`flex flex-col gap-4 border-[1.5px] rounded-sm border-secondaryColor border-opacity-70 p-6 hover:cursor-pointer ${
              selectedProgramme == "1"
                ? "bg-secondaryColor bg-opacity-70 text-white"
                : "text-secondaryColor text-opacity-70"
            }`}
          >
            <div className="flex justify-between">
              <p className="text-4xl font-bold  ">IOT</p>

              <div
                className={`border-2  rounded-full w-10 h-10 flex items-center justify-center ${
                  selectedProgramme != "1"
                    ? "border-secondaryColor border-opacity-70"
                    : "border-white"
                }`}
              >
                <div
                  className={`${
                    selectedProgramme != "1" && "hidden"
                  } w-8 h-8  rounded-full p-2 bg-white`}
                />
              </div>
            </div>

            <p className="pl-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi est
              temporibus eius suscipit labore ducimus deserunt quasi, facilis,
              voluptatibus blanditiis nobis. Cumque eius modi porro nesciunt
              atque pariatur at optio!
            </p>
          </div>
          <div
            onClick={() => setSelectedProgrmme("2")}
            className={`flex flex-col gap-4 border-[1.5px] rounded-sm border-secondaryColor border-opacity-70 p-6 hover:cursor-pointer ${
              selectedProgramme == "2"
                ? "bg-secondaryColor bg-opacity-70 text-white"
                : "text-secondaryColor text-opacity-70"
            }`}
          >
            <div className="flex justify-between">
              <p className="text-4xl font-bold  ">AI</p>

              <div
                className={`border-2  rounded-full w-10 h-10 flex items-center justify-center ${
                  selectedProgramme != "2"
                    ? "border-secondaryColor border-opacity-70"
                    : "border-white"
                }`}
              >
                <div
                  className={`${
                    selectedProgramme != "2" && "hidden"
                  } w-8 h-8  rounded-full p-2 bg-white`}
                />
              </div>
            </div>

            <p className="pl-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi est
              temporibus eius suscipit labore ducimus deserunt quasi, facilis,
              voluptatibus blanditiis nobis. Cumque eius modi porro nesciunt
              atque pariatur at optio!
            </p>
          </div>
          <div
            onClick={() => setSelectedProgrmme("3")}
            className={`flex flex-col gap-4 border-[1.5px] rounded-sm border-secondaryColor border-opacity-70 p-6 hover:cursor-pointer ${
              selectedProgramme == "3"
                ? "bg-secondaryColor bg-opacity-70 text-white"
                : "text-secondaryColor text-opacity-70"
            }`}
          >
            <div className="flex justify-between">
              <p className="text-4xl font-bold  ">Arduino</p>

              <div
                className={`border-2  rounded-full w-10 h-10 flex items-center justify-center ${
                  selectedProgramme != "3"
                    ? "border-secondaryColor border-opacity-70"
                    : "border-white"
                }`}
              >
                <div
                  className={`${
                    selectedProgramme != "3" && "hidden"
                  } w-8 h-8  rounded-full p-2 bg-white`}
                />
              </div>
            </div>

            <p className="pl-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi est
              temporibus eius suscipit labore ducimus deserunt quasi, facilis,
              voluptatibus blanditiis nobis. Cumque eius modi porro nesciunt
              atque pariatur at optio!
            </p>
          </div>
          <div
            onClick={() => setSelectedProgrmme("4")}
            className={`flex flex-col gap-4 border-[1.5px] rounded-sm border-secondaryColor border-opacity-70 p-6 hover:cursor-pointer ${
              selectedProgramme == "4"
                ? "bg-secondaryColor bg-opacity-70 text-white"
                : "text-secondaryColor text-opacity-70"
            }`}
          >
            <div className="flex justify-between">
              <p className="text-4xl font-bold  ">Robotics</p>

              <div
                className={`border-2  rounded-full w-10 h-10 flex items-center justify-center ${
                  selectedProgramme != "4"
                    ? "border-secondaryColor border-opacity-70"
                    : "border-white"
                }`}
              >
                <div
                  className={`${
                    selectedProgramme != "4" && "hidden"
                  } w-8 h-8  rounded-full p-2 bg-white`}
                />
              </div>
            </div>

            <p className="pl-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi est
              temporibus eius suscipit labore ducimus deserunt quasi, facilis,
              voluptatibus blanditiis nobis. Cumque eius modi porro nesciunt
              atque pariatur at optio!
            </p>
          </div>
        </div>

        <p className="text-4xl font-bold flex pt-16 px-24 text-secondaryColor pb-16">
          Choose Your plan
        </p>

        <div className="flex gap-8 px-16 justify-center">
          <div
            onClick={() => setSelectedPlan("1")}
            className={`bg-white rounded-md hover:bg-primaryColor hover:bg-opacity-25 transition-all duration-300 px-8 pt-4 pb-12 ${
              selectedPlan == "1" && "border-2 border-primaryColor"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center pr-16">
                <Image alt="silver" src={silver} />
                <p className="text-black font-bold text-3xl">Silver</p>
              </div>
              {selectedPlan == "1" && (
                <div className="border-2 border-primaryColor rounded-full w-10 h-10 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primaryColor rounded-full p-2" />
                </div>
              )}
            </div>
            <div className=" space-y-8 pt-8">
              <div className="flex gap-4 items-center ">
                <Image alt="yes" src={yes} />
                <p className="text-secondaryColor text-opacity-40 text-base">
                  Offer
                </p>
              </div>
              <div className="flex gap-4 items-center ">
                <Image alt="yes" src={yes} />
                <p className="text-secondaryColor text-opacity-40 text-base">
                  Offer
                </p>
              </div>
              <div className="flex gap-4 items-center ">
                <Image alt="no" width={33} src={no} />
                <p className="text-secondaryColor text-opacity-40 text-base">
                  Offer
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => setSelectedPlan("2")}
            className={`bg-white rounded-md hover:bg-primaryColor hover:bg-opacity-25 transition-all duration-300 px-8 pt-4 pb-12 ${
              selectedPlan == "2" && "border-2 border-primaryColor"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center pr-16">
                <Image alt="silver" src={gold} />
                <p className="text-black font-bold text-3xl">Gold</p>
              </div>
              {selectedPlan == "2" && (
                <div className="border-2 border-primaryColor rounded-full w-10 h-10 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primaryColor rounded-full p-2" />
                </div>
              )}
            </div>
            <div className=" space-y-8 pt-8">
              <div className="flex gap-4 items-center ">
                <Image alt="yes" src={yes} />
                <p className="text-secondaryColor text-opacity-40 text-base">
                  Offer
                </p>
              </div>
              <div className="flex gap-4 items-center ">
                <Image alt="yes" src={yes} />
                <p className="text-secondaryColor text-opacity-40 text-base">
                  Offer
                </p>
              </div>
              <div className="flex gap-4 items-center ">
                <Image alt="no" width={33} src={no} />
                <p className="text-secondaryColor text-opacity-40 text-base">
                  Offer
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => setSelectedPlan("3")}
            className={`bg-white rounded-md hover:bg-primaryColor hover:bg-opacity-25 transition-all duration-300 px-8 pt-4 pb-12 ${
              selectedPlan == "3" && "border-2 border-primaryColor"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center pr-16">
                <Image alt="silver" src={diamond} />
                <p className="text-black font-bold text-3xl">Diamond</p>
              </div>
              {selectedPlan == "3" && (
                <div className="border-2 border-primaryColor rounded-full w-10 h-10 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primaryColor rounded-full p-2" />
                </div>
              )}
            </div>
            <div className=" space-y-8 pt-8">
              <div className="flex gap-4 items-center ">
                <Image alt="yes" src={yes} />
                <p className="text-secondaryColor text-opacity-40 text-base">
                  Offer
                </p>
              </div>
              <div className="flex gap-4 items-center ">
                <Image alt="yes" src={yes} />
                <p className="text-secondaryColor text-opacity-40 text-base">
                  Offer
                </p>
              </div>
              <div className="flex gap-4 items-center ">
                <Image alt="no" width={33} src={no} />
                <p className="text-secondaryColor text-opacity-40 text-base">
                  Offer
                </p>
              </div>
            </div>
          </div>
        </div>
        {(selectedPlan !== "0" && selectedProgramme!=="0") && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 mx-20 mt-16  px-16 gap-8 py-14 bg-white rounded-md p-16"
          >
            <div className="col-span-2 text-3xl font-bold flex  text-secondaryColor ">
              Registration
            </div>
            <Input
              password={false}
              label="First name"
              error={errors.firstname?.message}
              inputProps={{
                placeholder: "Enter your first name",
                ...register("firstname"),
              }}
            />
            <Input
              password={true}
              label="Password"
              error={errors.password?.message}
              inputProps={{
                placeholder: "Enter your password",
                ...register("password"),
              }}
            />
            <Input
              password={false}
              label="Last name"
              error={errors.lastname?.message}
              inputProps={{
                placeholder: "Enter your last name",
                ...register("lastname"),
              }}
            />
            <Input
              password={true}
              label="Confirm password"
              error={errors.confirmPassword?.message}
              inputProps={{
                placeholder: "Confirm your password",
                ...register("confirmPassword"),
              }}
            />
            <Input
              password={false}
              label="Email"
              error={errors.email?.message}
              inputProps={{
                placeholder: "Enter your email",
                ...register("email"),
              }}
            />
            <Input
              password={false}
              label="Phone number"
              error={errors.phone?.message}
              inputProps={{
                type: "number",
                placeholder: "Enter your phone number",
                ...register("phone"),
              }}
            />
            <Input
              password={false}
              label="Age"
              error={errors.Age?.message}
              inputProps={{
                type: "number",
                placeholder: "Enter your age here",
                ...register("Age"),
              }}
            />

            <div className="col-span-2 text-right">
              <Button className="px-16">Next</Button>
            </div>
          </form>
        )}
      </main>
    </section>
  );
};

export default StartRegister;
