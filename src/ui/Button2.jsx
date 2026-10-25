export default function Button2({ text, icon, className }) {
  return (
    <button
      className={`px-5 py-2.5 rounded-lg flex items-center gap-2 cursor-pointer ${className}`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}
