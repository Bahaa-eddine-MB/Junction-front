import Image from "next/image";
import shape1 from "@/images/shaperight.png";
import shape2 from "@/images/shapeleft.png";
import logo from "@/images/logo.png";
import EmailToast from "@/components/EmailToast";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "@/components/Input";
import Button from "@/components/Button";
import eclips from "@/images/Ellipse.svg";
import wave from "@/images/waves.svg";

const schema = yup.object().shape({
  cardName: yup.string().required("Card name is required"),
  cardNumber: yup
    .string()
    .matches(/^[0-9]{16}$/, "Card number must be 16 digits")
    .required("Card number is required"),
  dieLimit: yup
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

const ConfirmCard = ({ goBack }: { goBack: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    // Handle form submission here
    console.log(data);
  };

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
      <main className="isolate z-10">
        <div className="pt-8 ml-24">
          <Image height={100} width={100} src={logo} alt="KEYBOX" />
        </div>
        <div className="px-28 pt-28">
          <EmailToast loading={true} />
        </div>
        <span className="text-4xl font-bold flex pt-16 px-24">
          <p className="pr-3 text-secondaryColor text-opacity-80">Card</p>
          <p className="text-secondaryColor">Infor</p>
          <p className="text-primaryColor">m</p>
          <p className="text-secondaryColor text-opacity-80">atio</p>
          <p className="text-primaryColor">ns</p>
        </span>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2  px-28 gap-8 py-14"
        >
          <Input
            password={false}
            label="Full name"
            error={errors.cardName?.message}
            inputProps={{
              placeholder: "Enter your card full name",
              ...register("cardName"),
            }}
          />
          <Input
            password={false}
            label="Card Number"
            error={errors.cardNumber?.message}
            inputProps={{
              type: "number",
              placeholder: "Enter your card number",
              ...register("cardNumber"),
            }}
          />
          <Input
            password={false}
            label="Card expiration date"
            error={errors.dieLimit?.message}
            inputProps={{
              placeholder: "MM/YY",
              ...register("dieLimit"),
            }}
          />
          <Input
            password={false}
            label="Secret code"
            error={errors.secretCode?.message}
            inputProps={{
              type: "number",
              placeholder: "Enter your secret code",
              ...register("secretCode"),
            }}
          />

          <div className="col-span-2 text-right space-x-16">
            <span
              onClick={() => {
                goBack();
              }}
              className="hover:cursor-pointer text-primaryColor"
            >
              Go back
            </span>
            <Button className="px-16">Confirm</Button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default ConfirmCard;
