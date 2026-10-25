import { IoIosStar } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
export default function Card({pragraph,title,h3,img}) {
  return (
    <div className="bg-[#F9FAFBCC]  p-6 rounded-xl border-[#E5E7EBCC] border-2 h-full">
      <div className="flex justify-between mb-4">
        <div className="flex justify-center text-[#00A6F4]"><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
        <div className="text-[#00A6F4]/50 "><FaQuoteLeft /></div>
     </div>
        <p className="mb-8">{pragraph}</p>
     <div className="flex gap-3 items-center border-t-2 pt-4 border-gray-300 ">
            <img className="rounded-[100%] border-2 border-cyan-400 h-12 w-12" src={img} alt="prson"/>
        <div className="">
            <h3 className=" font-bold">{title}</h3>
            <p className="flex items-center gap-1"><FaCheckCircle className="text-cyan-600"/>{h3}</p>
        </div>
     </div>
    </div>
  )
}
