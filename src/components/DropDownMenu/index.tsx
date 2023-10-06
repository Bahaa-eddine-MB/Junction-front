import { useState } from "react";
import { HTMLAttributes } from "react";

type InputType = {
  label: string;
  className: string;
  list?: string[];
  callBack: (selectedOption: string) => void;
} & HTMLAttributes<HTMLDivElement>;

const DrobDownMenu = ({ label, className, list, callBack }: InputType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    toggleDropdown();
    callBack(option); // Callback function to handle the selected option
  };

  return (
    <div className={`group ${className}`}>
      <label className={`text-primaryColor`}>{label}</label>
      <div className="relative pt-2">
        <div
          className="flex justify-between items-center   cursor-pointer"
          onClick={toggleDropdown}
        >
          <span>{selectedOption || "Select an option"}</span>
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
        {isOpen && (
          <ul className="absolute z-10 mt-4 py-2 bg-white w-full border border-primaryColor shadow-lg">
            {list?.map((option) => (
              <li
                key={option}
                className="cursor-pointer px-4 py-2 hover:bg-primaryColor hover:text-white"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
        <div className="pt-2">
          <div
            className={`w-full border-[1px] ${isOpen ? "border-primaryColor" : "border-thirdColor"}  `}
          />
        </div>
      </div>
    </div>
  );
};

export default DrobDownMenu;
