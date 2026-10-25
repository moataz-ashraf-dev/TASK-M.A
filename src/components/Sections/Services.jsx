import Badge from "../../ui/Badge";
import { FaLongArrowAltRight } from "react-icons/fa";
import{servicesData} from"../../data/landingData"
export default function Services() {
  return (
    <div className="bg-[#F9FAFBB2]/70 pb-28">
      <div className="container text-center flex justify-center items-center flex-col">
        <Badge
        text={"OUR SERVICES"}
        icon={""}
        className={"bg-[#DFF2FE]/80 text-[#00598A] mt-28"}
        />
        <h1 className="font-extrabold text-4xl mt-3 mb-16 tracking-[-0.9px] leading-10">Healthcare Services
        <span className="block text-[#0069A8]">Designed for You</span></h1>
      </div>
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {servicesData.map((data)=>(
          <div key={data.id} data-aos="flip-right" className='bg-[#FFFFFF] rounded-xl p-7 border border-gray-100'>
            <div className="p-4 bg-[#DFF2FE]/80 w-fit rounded-2xl text-[#0084D1] shadow-xs shadow-gray-300 ">{data.icon}</div>
            <h2 className="font-bold text-xl leading-5 mt-6 mb-3">{data.title}</h2>
            <p className="text-[14px] text-gray-500 mb-6">{data.description}</p>
            <hr className="my-4 border-gray-100" />
            <div className="flex justify-between mb-3 mt-7">
              <div>
                <Badge
                text={data.badge}
                icon={""}
                className={"bg-[#DFF2FE]/80 text-[#00598A]"}
                /></div>
              <div className="flex items-center gap-2 text-[#0084D1]">Learn More<FaLongArrowAltRight /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
