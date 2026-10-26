import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({
  duration: 800,
  // once: true
  easing: "ease-in-out",
});

createRoot(document.getElementById("root")).render(<App />);
