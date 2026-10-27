import Badge from "../../ui/Badge";
import { LastData } from "../../data/landingData";
import Card from "../../ui/Card";
import { IoIosStar } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import img from "../../assets/Doc_Img.jpg";

export default function PatientsSay() {
  return (
    <section className="w-full max-w-full overflow-x-clip">
      <div className="flex w-full items-center justify-center px-4">
        <Badge
          text={"OUR SERVICES"}
          icon={""}
          className={"bg-[#DFF2FE]/80 text-[#00598A] mt-16 sm:mt-20 lg:mt-28"}
        />
      </div>

      <h1 className="mt-3 mb-10 px-4 text-center text-3xl font-extrabold leading-tight tracking-[-0.9px] sm:mb-12 sm:text-4xl lg:mb-16">
        What Our{" "}
        <span className="text-[#0069A8]">Patients Say</span>
      </h1>

      <div className="mx-auto mb-24 grid w-full max-w-7xl grid-cols-1 gap-6 overflow-x-clip px-4 sm:gap-8 sm:px-6 lg:mb-32 lg:px-8 xl:grid-cols-2">
        {/* Featured testimonial */}
        <div
          data-aos="zoom-in-left"
          className="min-w-0 max-w-full overflow-hidden"
        >
          <div className="w-full max-w-full overflow-hidden rounded-xl bg-sky-700">
            <img
              src={img}
              alt="doc"
              className="h-64 w-full object-cover sm:h-80 lg:h-90"
            />

            <div className="min-w-0 p-4 sm:p-6">
              <div className="mb-6 flex">
                <div className="flex justify-center text-amber-300">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
              </div>

              <p className="mb-8 wrap-break-word text-base italic text-gray-300 sm:text-lg">
                “The telemedicine appointment was seamless, quick, and
                accurate. The doctor answered all my questions with utmost
                patience and provided precise advice.”
              </p>

              <div className="flex min-w-0 items-center gap-3 border-t-2 border-cyan-600 pt-4">
                <img
                  className="h-12 w-12 shrink-0 rounded-full border-2 border-cyan-400 object-cover"
                  src={img}
                  alt="person"
                />

                <div className="min-w-0">
                  <h3 className="font-semibold text-white">David M.</h3>

                  <p className="flex flex-wrap items-center gap-1 text-sm text-cyan-200 sm:text-base">
                    <FaCheckCircle className="shrink-0 text-cyan-200" />
                    <span>Verified Patient</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other testimonials */}
        <div className="grid min-w-0 grid-cols-1 items-stretch gap-5 sm:grid-cols-2">
          {LastData.map((data) => (
            <div
              data-aos="zoom-in-left"
              key={data.id}
              className="min-w-0 max-w-full overflow-hidden"
            >
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
    </section>
  );
}
