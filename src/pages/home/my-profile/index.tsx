import Layout from "../Layout";
import Image from "next/image";
import pic from "@/icons/add_pic.svg";
import Button from "@/components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "@/components/Input";
import DrobDownMenu from "@/components/Profile/DropDownMenu";
import { useState } from "react";

const schema = yup.object().shape({
  firstname: yup.string().required("Card name is required"),
  lastname: yup
    .string()
    .matches(/^[0-9]{16}$/, "Card number must be 16 digits")
    .required("Card number is required"),
  age: yup
    .string()
    .matches(
      /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
      "Expiration date must be in MM/YY format"
    )
    .required("Expiration date is required"),
  secretCode: yup
    .string()
    .matches(/^[0-9]{3}$/, "Secret code must be 3 digits")
    .required("Secret code is required"),
});

type LoginForm = yup.InferType<typeof schema>;

const MyProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    // Handle form submission here
    console.log(data);
  };
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first selected file

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        // Set the selected image to the base64 data URL
        setSelectedImage(e.target?.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const [study, setStudy] = useState("");

  return (
    <>
      <Layout>
        <section className="font-poppins container mx-auto px-16 py-16">
          <div className="text-4xl font-bold flex gap-2">
            <p className="text-secondaryColor">Set</p>
            <p className="text-pink-300">Up</p>
            <p className="text-secondaryColor">your</p>
            <p className="text-primaryColor">profile</p>
          </div>
          <div>
            <div className="px-8 pt-12">
              <div className="flex justify-center gap-16 items-center">
                <div className="relative w-52 h-52 rounded-full bg-thirdColor flex items-center justify-center">
                  {selectedImage ? (
                    <Image
                      width={500}
                      height={500}
                      className="w-52 h-52 rounded-full"
                      alt="profile"
                      src={selectedImage}
                    />
                  ) :   <Image
                      width={80}
                      height={80}
                      className=""
                      alt="profile"
                      src={pic}
                    />}
                  <label
                    htmlFor="imageInput"
                    className="absolute bg-secondaryColor h-14 w-14 bottom-0 right-0 rounded-full text-white text-5xl flex justify-center items-center cursor-pointer"
                  >
                    +
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                    id="imageInput"
                  />
                </div>
                <div className="text-gray-400 space-y-4 flex flex-col">
                  <p className="text-bold text-4xl">Profile picture</p>
                  <p className="text-2xl pb-4">
                    upplod a 1333px * 600 px photo
                  </p>
                  <Button className="px-12 self-end">set</Button>
                </div>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-2  px-28 gap-8 pb-14 p-24"
              >
                <Input
                  password={false}
                  label="firstname"
                  error={errors.firstname?.message}
                  inputProps={{
                    placeholder: "Enter your first name",
                    ...register("firstname"),
                  }}
                />
                <Input
                  password={false}
                  label="Card Number"
                  error={errors.lastname?.message}
                  inputProps={{
                    placeholder: "Enter your last name",
                    ...register("lastname"),
                  }}
                />
                <DrobDownMenu
                  label="Study field"
                  list={["Study field 1", "Study field 2", "Study field 3"]}
                  callBack={(value) => {
                    setStudy(value);
                  }}
                  className={"col-span-2"}
                />
                <Input
                  password={false}
                  label="Age"
                  error={errors.age?.message}
                  inputProps={{
                    placeholder: "Enter your age",
                    ...register("age"),
                  }}
                />
                <DrobDownMenu
                  label="Goal"
                  list={["Study field 1", "Study field 2", "Study field 3"]}
                  callBack={(value) => {
                    setStudy(value);
                  }}
                  className={""}
                />
                <DrobDownMenu
                  label="Hours per week"
                  list={["Study field 1", "Study field 2", "Study field 3"]}
                  callBack={(value) => {
                    setStudy(value);
                  }}
                  className={""}
                />

                <div className="col-span-2 text-right space-x-16">
                  <Button className="px-12">Confirm</Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default MyProfile;
