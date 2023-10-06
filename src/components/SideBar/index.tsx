import React from "react";
import { useRouter } from "next/router";
import home from "@/icons/home.svg";
import profile from "@/icons/profile.svg";
import achivement from "@/icons/achivment.svg";
import teacher from "@/icons/teacher.svg";
import sub from "@/icons/sub.svg";
import tasks from "@/icons/tasks.svg";
import Button from "../Button";
import Image from "next/image";
const SideBar = ({
  isOpen,
  closeSideBar,
  sidebarRef,
}: {
  isOpen: boolean;
  closeSideBar: () => void;
  sidebarRef: React.RefObject<HTMLDivElement>;
}) => {
  const router = useRouter();

  const sidebarItems = [
    { icon: home, label: "Home", route: "/home" },
    { icon: profile, label: "Profile", route: "/home/profile" },
    { icon: achivement, label: "Achievements", route: "/home/achievements" },
    { icon: teacher, label: "Teachers", route: "/home/teachers" },
    { icon: sub, label: "Subscription", route: "/home/subscription" },
    { icon: tasks, label: "Tasks", route: "/home/tasks" },
  ];

  return (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 flex flex-col   left-0 w-[30vw] bg-secondaryColor border-r transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform ease-in-out duration-300`}
    >
      <div className="pl-16 pt-24">
        {sidebarItems.map((item, index) => (
          <>
            <li className="flex justify-between items-center">
              <div className="flex gap-8 items-center text-white py-6">
                <div>
                  <Image width={30} height={30} alt="icon" src={item.icon} />
                </div>
                <div onClick={()=>router.push(item.route)} key={index}>
                  <a className={`text-xl hover:cursor-pointer`}>{item.label}</a>
                </div>
              </div>
              <div
                className={`${
                  router.pathname === item.route && "bg-white w-2 h-10"
                }`}
              />
            </li>
          </>
        ))}
      </div>
      
      <Button className="px-16 self-center mt-16" onClick={closeSideBar}>
        Logout
      </Button>
    </div>
  );
};

export default SideBar;
