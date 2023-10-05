import { HTMLAttributes, InputHTMLAttributes } from "react";
import Image from "next/image";
import eye from "@/icons/eye.svg";
import eyeOff from "@/icons/eye-off.svg";
import { useState } from "react";

type InputType = {
  label?: string;
  error?: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  password: boolean;
} & HTMLAttributes<HTMLDivElement>;

const Input = ({
  className,
  label,
  error,
  inputProps,
  password,
  ...rest
}: InputType) => {
  const [isHidden, setHidden] = useState(false);

  return (
    <div {...rest} className={`group ${className}`}>
      <label className={`${error ? "text-mainRed" : "text-primaryColor"}`}>
        {label}
      </label>

      <div className="relative pt-2">
        <div className="flex justify-between">
          <input
            type={!isHidden ? "password" : "text"}
            {...inputProps}
            className={`focus:outline-none px-4 disabled:text-thirdColor placeholder-text-secondaryColor placeholder-opacity-60 grow w-full ${
              error
                ? "text-mainRed caret-mainRed"
                : "text-secondaryColor caret-secondaryColor"
            } `}
          />
          <Image
            onClick={() => {
              setHidden(!isHidden);
            }}
            className="hover:cursor-pointer mr-4"
            src={isHidden ? eyeOff : eye}
            alt="eye"
          />
        </div>

        <div className="pt-2">
          <div
            className={`w-full border-1 ${
              !error ? "border-primaryColor" : "border-mainRed"
            }`}
          />
        </div>
      </div>

      {error ? (
        <p className="capitalize text-mainRed text-sm font-medium">{error}</p>
      ) : (
        <p>&nbsp;</p>
      )}
    </div>
  );
};

export default Input;
