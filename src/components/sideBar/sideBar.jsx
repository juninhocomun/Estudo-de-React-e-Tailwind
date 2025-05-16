import "./sideBar.css";
import "./sideBar.css";
import { RiBookMarkedFill } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import { BiSolidHomeAlt2, BiSolidHome } from "react-icons/bi";
import { GrSchedules, GrFormSchedule } from "react-icons/gr";
import { FaListUl, FaListCheck } from "react-icons/fa6";
import { useState } from "react";

function SideBar() {
  // Estrutura de ícones alternáveis
  const icons = [
    { open: <BiSolidHomeAlt2 className="icon" />, close: <BiSolidHome className="icon" /> },
    { open: <IoBookSharp className="icon" />, close: <RiBookMarkedFill className="icon" /> },
    { open: <GrFormSchedule className="icon" />, close: <GrSchedules className="icon" /> },
    { open: <FaListUl className="icon" />, close: <FaListCheck className="icon" /> },
    { open: <FaListUl className="icon" />, close: <RiBookMarkedFill className="icon" /> },
    { open: <IoBookSharp className="icon" />, close: <RiBookMarkedFill className="icon" /> },
    { open: <IoBookSharp className="icon" />, close: <RiBookMarkedFill className="icon" /> },
    { open: <IoBookSharp className="icon" />, close: <RiBookMarkedFill className="icon" /> },
  ];

  // Cada item começa como "fechado" (false)
  const [visibility, setVisibility] = useState(Array(icons.length).fill(false));

  function toggleVisibility(index) {
    setVisibility(prev =>
      prev.map((v, i) => (i === index ? !v : v))
    );
  }

  return (
    <ul className="sideBar flex flex-col justify-start items-center gap-5 h-full w-1/24 bg-[#ececec] absolute left-0 top-0 pt-20 text-[2rem] text-[#000]">
      {icons.map((icon, index) => (
        <li key={index} onClick={() => toggleVisibility(index)}>
          {visibility[index] ? icon.open : icon.close}
        </li>
      ))}
    </ul>
  );
}

export default SideBar;
