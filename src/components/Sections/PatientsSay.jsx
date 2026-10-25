import Badge from "../../ui/Badge"
import { LastData } from "../../data/landingData"
import Card from "../../ui/Card"
import { IoIosStar } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import img from"../../assets/Doc_img.jpg"
export default function PatientsSay() {
  return (
    <div>
        <div className="flex items-center justify-center ">
            <Badge
            text={"OUR SERVICES"}
            icon={""}
            className={"bg-[#DFF2FE]/80 text-[#00598A] mt-28"}
            />
       </div>
            <h1 className="text-center font-extrabold text-4xl mt-3 mb-16 tracking-[-0.9px] leading-10">What Our 
            <span className=" text-[#0069A8]"> Patients Say</span></h1>
        <div className="container grid grid-cols-1 gap-8 mb-44 xl:grid-cols-2">
          <div data-aos="zoom-in-left">
            <div className="bg-sky-700 rounded-xl overflow-hidden">
              <img src={img} alt="doc" className="w-full h-90" />
              <div className="m-6">
                <div className="flex mb-6">
                    <div className="flex justify-center text-amber-300"><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
                 </div>
                    <p className="mb-8 text-gray-300 italic text-[18px]">“The telemedicine appointment was
                        seamless, quick, and accurate. The doctor
                        answered all my questions with utmost
                        patience and provided precise advice.”
                    </p>
                 <div className="flex gap-3 items-center border-t-2 pt-4 border-cyan-600 ">
                        <img className="rounded-[100%] border-2 border-cyan-400 h-12 w-12" src={img} alt="prson"/>
                    <div className="">
                        <h3 className="font-semibold text-white">David M.</h3>
                        <p className="flex items-center gap-1 text-cyan-200 "><FaCheckCircle className="text-cyan-200"/>Verified Patient</p>
                    </div>
                 </div></div>
            </div>
          </div>
          <div className="gap-5 grid grid-cols-1 md:grid-cols-2 items-stretch">
              {LastData.map((data)=>(
                <div data-aos="zoom-in-left" key={data.id}>
                <Card 
                pragraph={data.p}
                title={data.title}
                h3={data.h3}
                img={data.img}
                />
                </div>
              ))}
          </div>
        </div>
    </div>
  )
}
