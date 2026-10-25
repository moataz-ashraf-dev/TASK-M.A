import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

export default function Acoordion({ question }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      data-aos="fade-up"
      onClick={handleClick}
      className={`bg-white border ${isOpen ? "border-sky-500" : "border-gray-200"} py-5 px-6 rounded-lg cursor-pointer flex flex-col gap-5`}
    >
      <div className="flex justify-between items-center ">
        {/* question */}
        <div className="text-[18px] font-bold text-[#101828]">
          {question.question}
        </div>
        <div
          className={`bg-[#F0F9FF] ${isOpen ? "rotate-180" : ""} transition-all duration-300 text-[#0084D1] w-10 h-10 rounded-full flex justify-center items-center shrink-0`}
        >
          <FaArrowDown />
        </div>
        {/* Answer */}
      </div>
      <div className={`${isOpen ? "" : "hidden"}`}>{question.answer}</div>
    </div>
  );
}
