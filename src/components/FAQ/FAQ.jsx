import { GoQuestion } from "react-icons/go";
import Badge from "../../ui/Badge";
import Acoordion from "./Acoordion";
import { faqData } from "../../data/landingData";

export default function FAQ() {
  return (
    <section className="py-10 bg-[#F3F4F6]">
      <div className="container">
        {/* Section title */}
        <div className="flex flex-col gap-2 items-center justify-center">
          <Badge
            text={"GOT QUESTIONS?"}
            icon={<GoQuestion />}
            className={"bg-[#DFF2FE]/80 text-[#00598A]"}
          />
          <h3 className="text-[36px] font-extrabold">
            Frequently Asked <span className="text-[#00598A]"> Questions</span>
          </h3>
        </div>
        <div className="flex flex-col gap-8 max-w-5xl mx-auto pt-10">
          {faqData.map((question) => (
            <Acoordion question={question} />
          ))}
        </div>
      </div>
    </section>
  );
}
