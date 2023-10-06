import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import React, { ReactNode, useState, useEffect, useRef } from "react";

interface LayoutProps {
  children: ReactNode; // Use ReactNode to allow any valid JSX content as children
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const openSideBar = () => setSideBarOpen(true);
  const closeSideBar = () => setSideBarOpen(false);

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // Add an event listener to handle clicks outside of the sidebar
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeSideBar();
      }
    };

    if (isSideBarOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSideBarOpen]);

  return (
    <div className="container mx-auto min-h-screen font-poppins  bg-gradient-to-r from-white via-thirdColor to-purple-50">
      <NavBar openSideBar={openSideBar} />
      <SideBar
        isOpen={isSideBarOpen}
        closeSideBar={closeSideBar}
        sidebarRef={sidebarRef}
      />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
