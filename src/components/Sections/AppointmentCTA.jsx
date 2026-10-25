import Button2 from "../../ui/Button2";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
export default function AppointmentCTA() {
  return (
    <div className="lg:py-20 lg:px-72 py-5 px-5">
      <div data-aos="zoom-out-left" className="bg-linear-to-b from-[#E0F2FE] via-[#F0F9FF] to-[#BAE6FD] flex flex-col items-center rounded-3xl w-full">
            <h1 className="text-center font-extrabold text-4xl tracking-[-0.9px] leading-10 mt-16">Exceptional Care
            <span className="block text-[#0069A8]">Awaits You</span></h1>
            <p className="mt-6 mb-6 text-[#364153] w-2/4 text-center">Whether it's a routine visit or ongoing care, we're here to help you stay healthy
            with confidence.</p>
      <div className="grid mb-6 gap-4 grid-cols-1 lg:grid-cols-2">
      <Button2
          text={"Book Appointment"}
          icon={<FaRegCalendarCheck />}
          className={"bg-sky-500 text-white  md:flex cursor-alias"}
        />
        <Button2
          text={"+1 (800) 234-5678"}
          icon={<IoCall />}
          className={"text-sky-500 bg-white md:flex cursor-alias"}
        /></div>
      </div>
    </div>
  )
}
