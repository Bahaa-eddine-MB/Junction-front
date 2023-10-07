import React from "react";
import Image from "next/image";
import contact1 from "@/images/teacher.png"; // Replace with actual contact images
import close from "@/icons/close.svg";

const ChatContainer = ({
  isOpen,
  toggleChat,
}: {
  isOpen: boolean;
  toggleChat: () => void;
}) => {
  return (
    <>
      {isOpen && (
        <div
          className={`
      } fixed right-8 bottom-8 w-80 bg-white border rounded-md shadow-lg py-4  px-8`}
        >
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-secondaryColor">Chats</h3>
            <Image
              className="hover:cursor-pointer w-5 h-5"
              onClick={toggleChat}
              src={close}
              alt="close"
            />
          </div>
          <ul className="mt-2">
            <li className="flex items-center gap-3 mb-2 cursor-pointer">
              <Image
                src={contact1}
                alt="Contact 1"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col gap-1">
                <span className="mt-2 text-secondaryColor font-semibold text-lg">
                  Mohamed iyad
                </span>
                <span className="text-textColor text-md">
                  Please do your homework !
                </span>
              </div>
            </li>
          </ul>
          <div className="w-full h-[1px] mt-4 bg-thirdColor" />

          <ul className="mt-2">
            <li className="flex items-center gap-3 mb-2 cursor-pointer">
              <Image
                src={contact1}
                alt="Contact 1"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col gap-1">
                <span className="mt-2 text-secondaryColor font-semibold text-lg">
                  Mohamed iyad
                </span>
                <span className="text-textColor text-md">
                  Please do your homework !
                </span>
              </div>
            </li>
          </ul>
          <button
            onClick={toggleChat}
            className="mt-12 w-full bg-primaryColor text-white py-2 rounded-md hover:bg-blue-500"
          >
            Open Chatbot
          </button>
        </div>
      )}
    </>
  );
};

export default ChatContainer;
