import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import Logo from "../components/Logo";
import NavLinks from "./NavLinks";
import { useAppContext } from "../context/appContext";

const BigSideBar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSideBar;
