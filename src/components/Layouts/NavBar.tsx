import Image from "next/image";
import logo from "@/images/logo.png";
import profile from "@/images/Group 77.png";
import notification from "@/icons/notification.svg";
import menu from "@/icons/menu.png";
import { useRouter } from "next/router";
const NavBar = ({ openSideBar }: { openSideBar: () => void }) => {
  const route = useRouter()
  return (
    <nav  style={{
        position: "sticky",
        top: 0, // Stick to the top of the viewport
        zIndex: 10, // Optional: You can adjust the z-index as needed
      }} className="flex px-24 justify-between items-center pt-4 bg-transparent backdrop-blur-md pb-2">
      <div onClick={() => openSideBar()} className="hover:cursor-pointer">
        <Image width={40} height={40} alt="menu" src={menu} />
      </div>
      <div onClick={()=>route.push("/")} className="hover:cursor-pointer">
        <Image width={80} height={80} alt="KEYBOX" src={logo} />
      </div>
      <div className="flex gap-16 items-center">
        <span className="hover:cursor-pointer">
          <Image width={30} height={30} alt="notification" src={notification} />
        </span>
        <span className="hover:cursor-pointer">
          <Image width={20} height={20} alt="profile" src={profile} />
        </span>
      </div>
    </nav>
  );
};

export default NavBar;