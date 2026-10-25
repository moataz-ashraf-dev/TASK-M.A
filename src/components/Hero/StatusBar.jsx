import { featureBarItems } from "../../data/landingData";

export default function StatusBar() {
  return (
    <div className="bg-[#0069A8]">
      <div className="container grid grid-cols-2 lg:grid-cols-4 py-6 gap-4">
        {featureBarItems.map((card) => (
          <div className="flex items-center gap-3">
            <div className="icon w-9 h-9 bg-[#FFFFFF]/20 text-[#B8E6FE] rounded-full flex items-center justify-center shrink-0">
              {card.icon}
            </div>
            <div className="">
              <h4 className="text-white text-sm font-bold">{card.title}</h4>
              <span className="text-[12px] text-[#B8E6FE]">
                {card.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
