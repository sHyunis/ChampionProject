"use client";
import { FaAngleUp } from "react-icons/fa";

const Sidebar = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed right-10 bottom-12">
      <FaAngleUp onClick={scrollUp} className="text-4xl cursor-pointer" />
    </div>
  );
};

export default Sidebar;
