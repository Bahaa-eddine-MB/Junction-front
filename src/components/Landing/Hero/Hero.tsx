import React from "react";
import Image from "next/image";
import title from "/public/images/title.svg";
import woman from "/public/images/woman.svg";
import TextAnimation from "./TextAnimation";
import Button from "@/components/Button";
import SecondButton from "@/components/SecondButton";
const Hero = () => {
  return (
    <div>
      <div className="px-8  relative bg-[#E9F0F3] pb-12">
        <div className="grid grid-cols-2  items-center">
          <div className="flex flex-col gap-12 pt-20 ml-8">
            <Image src={title} alt="title" />
            <p className="">
              KEYBOX est un centre d’apprentissage technologique spécialisé en
              robotique. Pour but de la vulgarisation du domaine de la robotique
              et le rendre plus accessible pour tt les amateurs et les amoureux
              de la création et d’invention
            </p>
            <div className="flex content-start gap-4 items-center">
             <Button className="w-48">Learn more</Button>
              <SecondButton className="w-32">Join</SecondButton>
            </div>
          </div>

          <div>
            <TextAnimation />

            <Image src={woman} alt="woman" />
          </div>
        </div>

        <div className="flex justify-around md:w-[50%] text-[#07394673] text-2xl font-semibold  mx-auto items-center pt-8">
          <div>
            <p>+200</p>
            <p>student</p>
          </div>
          <div>
            <p>+200</p>
            <p>student</p>
          </div>
          <div>
            <p>+200</p>
            <p>student</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
