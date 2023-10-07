import Image from "next/image";
import logo from "@/images/logo.png";
import profile from "@/images/Group 77.png";
import notification from "@/icons/notification.svg";
import menu from "@/icons/menu.png";
import { useRouter } from "next/router";
import { useState } from "react";
import pic from "@/images/teacher.png";

const NavBar = ({ openSideBar }: { openSideBar: () => void }) => {
  const route = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <>
      {" "}
      <nav
        style={{
          position: "sticky",
          top: 0, // Stick to the top of the viewport
          zIndex: 10, // Optional: You can adjust the z-index as needed
        }}
        className="flex px-24 justify-between items-center pt-4 bg-transparent backdrop-blur-md pb-2"
      >
        <div onClick={() => openSideBar()} className="hover:cursor-pointer">
          <Image width={40} height={40} alt="menu" src={menu} />
        </div>
        <div onClick={() => route.push("/")} className="hover:cursor-pointer">
          <Image width={80} height={80} alt="KEYBOX" src={logo} />
        </div>
        <div className="flex gap-16 items-center">
          <span onClick={() => setOpen(!open)} className="hover:cursor-pointer">
            <Image
              width={30}
              height={30}
              alt="notification"
              src={notification}
            />
          </span>
          <span className="hover:cursor-pointer">
            <Image width={20} height={20} alt="profile" src={profile} />
          </span>
        </div>
      </nav>
      {open && (
        <div className="z-20 w-[40rem] absolute right-8 bg-white drop-shadow-md shadow-secondaryColor p-8 rounded-md">
          <h2 className="text-secondaryColor text-bold text-3xl pl-8">
            Notifications
          </h2>
          <div className="py-4 px-8">
            <div className="flex gap-8 pt-8">
              <Image
                className="self-start  w-16 h-16"
                height={80}
                width={80}
                src={pic}
                alt=" teacher"
              />
              <div className="flex flex-col">
                <h2 className="text-secondaryColor font-semibold text-lg">
                  Task to do
                </h2>
                <p className="text-textColor pl-4  pt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore quaerat ipsum eveniet. Alias expedita...
                </p>
                <span className="flex gap-2 pl-4 pt-4">
                  <p className="text-mainRed">Deadline :</p>
                  <p className="text-textColor">22/02/2023</p>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-thirdColor px-8" />
          <div className="flex gap-8 pt-8">
            <Image
              className="self-start  w-16 h-16"
              height={80}
              width={80}
              src={pic}
              alt=" teacher"
            />
            <div className="flex flex-col">
              <h2 className="text-secondaryColor font-semibold text-lg">
                Task to do
              </h2>
              <p className="text-textColor pl-4  pt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                quaerat ipsum eveniet. Alias expedita...
              </p>
              <span className="flex gap-2 pl-4 pt-4">
                <p className="text-mainRed">Deadline :</p>
                <p className="text-textColor">22/02/2023</p>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
