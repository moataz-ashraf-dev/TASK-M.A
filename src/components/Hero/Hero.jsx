import { IoShieldCheckmarkOutline } from "react-icons/io5";
import img from "../../assets/Doctor.png.png";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";
import { FaArrowRight, FaStar } from "react-icons/fa";
import StatusBar from "./StatusBar";

export default function Hero() {
  return (
    <section className="pt-30">
      <div className="container flex flex-col lg:flex-row items-center justify-between">
        {/* left col */}
        <div data-aos="fade-up">
          <Badge
            text={"Trusted Medical Clinic"}
            icon={<IoShieldCheckmarkOutline />}
            className={" backdrop-blur-3xl border border-gray-400 text-white"}
          />
          <div className="mt-6 text-white max-w-172.5">
            <h1 className="text-[45px] md:text-[60px] font-extrabold tracking-[-1.5px] leading-17.25 mb-6">
              Exceptional Care for Every Patient
            </h1>
            <p className="text-base md:text-[18px] font-normal mb-6">
              We provide comprehensive, high-quality healthcare services
              tailored to meet the unique needs of each patient. Your health and
              wellbeing are always our top priority.
            </p>
          </div>
          <div className="hero-btns flex flex-col md:flex-row items-center gap-4">
            <Button
              text={"Book Appointment"}
              icon={<FaArrowRight />}
              className={"bg-[#0069A8] text-white"}
            />
            <Button
              text={"Explore Services"}
              icon={<FaArrowRight />}
              className={"bg-white text-[#0069A8]"}
            />
          </div>
          <div className="stars mt-6 flex items-center gap-4">
            <div className="flex items-center gap-2 text-amber-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className="text-sm text-white font-bold">
              4.9/5 (Trusted by 2,000+ Patients)
            </span>
          </div>
        </div>
        {/* right col */}
        <div data-aos="fade-up">
          <img src={img} alt="" />
        </div>
      </div>
      <StatusBar />
    </section>
  );
}
