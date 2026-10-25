import { FaBars, FaRegCalendarCheck } from "react-icons/fa";
import logo from "../assets/Link.png";
import { navLinks } from "../data/landingData";
import { useState } from "react";

import Button2 from "../ui/Button2";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className={
        "max-w-6xl backdrop-blur-2xl px-5 py-3.75 mx-4 lg:mx-auto fixed left-0 z-100 right-0 top-6 bg-linear-to-r from-[#FFFFFF] to-[#38BDF8]/45 rounded-2xl"
      }
    >
      <nav className="flex items-center justify-between">
        <a href="">
          <img src={logo} alt="" />
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <Button2
          text={"Book Appointment"}
          icon={<FaRegCalendarCheck />}
          className={"bg-sky-500 text-white hidden md:flex"}
        />
        <button className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
      </nav>
      {isOpen && (
            <ul className="md:hidden flex flex-col gap-4 mt-4 p-4 bg-white rounded-xl">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
    </header>
  );
}
