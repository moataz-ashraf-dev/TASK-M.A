import ReactLenis from "lenis/react";
import FAQ from "./components/FAQ/FAQ";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Sections/Services";
import AppointmentCTA from "./components/Sections/AppointmentCTA";
import PatientsSay from "./components/Sections/PatientsSay";
import Footer from "./components/Footer";
export default function App() {
  return (
    <ReactLenis root options={{ smoothWheel: true, duration: 1.2 }}>
      <div>
        <div className="bg-linear-to-b from-[#0369A1] via-[#0284C7] to-[7DD3FC]/40 min-h-screen">
          <Navbar />
          <Hero />
        </div>
        <Services />
        <PatientsSay />
        <main>
          <FAQ />
        </main>
        <AppointmentCTA />
        <Footer />
      </div>
    </ReactLenis>
      
  );
}
