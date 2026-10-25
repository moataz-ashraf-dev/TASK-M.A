import logo from "../assets/Link.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiCopyrightThin } from "react-icons/pi";
export default function Footer() {
  return (
    <footer data-aos="fade-up" className="flex lg:mt-12 lg:ms-26 lg:mb-12 m-8  flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 gap-8 border-b-2 border-gray-200 pb-12 ">
        <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center">
          <img src={logo} alt="logo" />
          <p className="mt-4 text-[14px]">
            Providing compassionate healthcare through experienced
            professionals, modern treatments and patient-first care for every
            visit.
          </p>
         <div className="flex gap-3 mt-6">
          <a href="#" className="p-3 bg-gray-200 rounded-full "><BsTwitter /></a>
          <a href="#" className="p-3 bg-gray-200 rounded-full"><FaFacebookF /></a>
          <a href="#" className="p-3 bg-gray-200 rounded-full"><FaLinkedinIn /></a>
          <a href="#" className="p-3 bg-gray-200 rounded-full"><FaInstagram /></a>
          </div>
        </div>
        <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center">
            <h2 className="text-[14px] font-bold">QUICK LINKS</h2>
             <div className="grid gap-2.5 mt-4">
                <a href="#" className="text-[14px] block">About Us</a>
                <a href="#" className="text-[14px] block">Our Services</a>
                <a href="#" className="text-[14px] block">Medical Team</a>
                <a href="#" className="text-[14px] block">Patient Reviews</a>
                <a href="#" className="text-[14px] block">Book Appointment</a>
             </div>
        </div>
        <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center">
            <h2 className="text-[14px] font-bold">SPECIALTIES</h2>
             <div className="grid gap-2.5 mt-4">
                <a href="#" className="text-[14px] block">General Medicine</a>
                <a href="#" className="text-[14px] block">Pediatric Care</a>
                <a href="#" className="text-[14px] block">Dental Services</a>
                <a href="#" className="text-[14px] block">Cardiology Unit</a>
                <a href="#" className="text-[14px] block">Laboratory Diagnostics</a>
             </div>
        </div>
        <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center">
            <h2 className="text-[14px] font-bold">WHERE TO FIND US</h2>
             <div className="grid gap-2.5 mt-4">
                <a href="#" className="text-[14px] block"><FaLocationDot className="text-cyan-600 inline mr-2.5"/> San Francisco, USA</a>
                <a href="#" className="text-[14px] block"><IoCall className="text-cyan-600 inline mr-2.5"/>+1 (800) 234-5678</a>
                <a href="#" className="text-[14px] block"><MdEmail className="text-cyan-600 inline mr-2.5"/>support@clinova.com</a>
             </div>
        </div>
      </div>
      <div className="mt-8 justify-between grid grid-cols-1 md:grid-cols-2 max-sm:gap-13">
        <div className="flex items-center text-gray-500">
            <p className="text-[12px]"><PiCopyrightThin className="inline text-[14px] mb-1"/>2026 Clinova Medical Group. All rights reserved.</p>
        </div>
        <div>
            <ul className="text-[12px] flex gap-6 text-gray-500">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
                <li>Cookie Preferences</li>
            </ul>
        </div>
      </div>
    </footer>
  );
}
