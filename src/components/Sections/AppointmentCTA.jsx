import Button2 from "../../ui/Button2";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

export default function AppointmentCTA() {
  return (
    <section className="w-full overflow-x-clip py-5 sm:py-10 lg:py-20">
      <div className="container mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          data-aos="zoom-out-left"
          className="flex w-full flex-col items-center overflow-hidden rounded-3xl bg-linear-to-b from-[#E0F2FE] via-[#F0F9FF] to-[#BAE6FD] px-4 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16"
        >
          <h1 className="mt-4 text-center text-3xl font-extrabold leading-tight tracking-[-0.9px] sm:mt-6 sm:text-4xl sm:leading-10">
            Exceptional Care
            <span className="block text-[#0069A8]">
              Awaits You
            </span>
          </h1>

          <p className="mt-6 mb-6 w-full max-w-2xl wrap-break-word text-center text-[#364153]">
            Whether it's a routine visit or ongoing care, we're here to help you stay healthy
            with confidence.
          </p>

          <div className="mb-6 grid w-full max-w-2xl min-w-0 grid-cols-1 gap-4 lg:grid-cols-2">
            <Button2
              text={"Book Appointment"}
              icon={<FaRegCalendarCheck />}
              className={
                "w-full justify-center bg-sky-500 text-white cursor-pointer"
              }
            />

            <Button2
              text={"+1 (800) 234-5678"}
              icon={<IoCall />}
              className={
                "w-full justify-center bg-white text-sky-500 cursor-pointer"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
