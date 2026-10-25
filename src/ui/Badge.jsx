export default function Badge({ text, icon, className }) {
  return (
    <div
      className={`${className} rounded-full py-1.5 px-4 w-fit flex items-center gap-2`}
    >
      {icon}
      <span className="text-sm font-medium leading-5">{text}</span>
    </div>
  );
}
