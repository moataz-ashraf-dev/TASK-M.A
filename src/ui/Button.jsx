export default function Button({ text, icon, className }) {
  return (
    <button
      className={`px-5 py-2.5 rounded-lg flex items-center gap-2 cursor-pointer ${className}`}
    >
      <span>{text}</span>
      {icon}
    </button>
  );
}
