import { FaStethoscope } from "react-icons/fa6";
import { FaBaby } from "react-icons/fa";
import { FaTooth } from "react-icons/fa";
import { GiErlenmeyer } from "react-icons/gi";
import img from"../assets/prson1.jpg"
import prson2 from"../assets/prson2.jpg"
import prson3 from"../assets/prson3.jpg"
import prson4 from"../assets/prson4.jpg"
import {
  FaHeartbeat,
  FaLaptopMedical,
  FaRegClock,
  FaUserMd,
} from "react-icons/fa";

export const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
];

export const featureBarItems = [
  {
    id: 1,
    title: "24/7 Medical Support",
    subtitle: "Always here for you",
    icon: <FaRegClock />,
  },
  {
    id: 2,
    title: "Expert Specialists",
    subtitle: "Top-rated professionals",
    icon: <FaUserMd />,
  },
  {
    id: 3,
    title: "Online Consultation",
    subtitle: "Virtual care anywhere",
    icon: <FaLaptopMedical />,
  },
  {
    id: 4,
    title: "Modern Diagnostics",
    subtitle: "Accurate advanced labs",
    icon: <FaHeartbeat />,
  },
];
export const servicesData = [
  {
    id: 1,
    title: "General Consultation",
    description:
      "Comprehensive medical assessments, routine check-ups, and preventive care strategies for every stage of life.",
    icon: <FaStethoscope />,
    badge: "Routine Care",
  },
  {
    id: 2,
    title: "Pediatric Care",
    description:
      "Specialized, gentle medical attention for newborns, infants, children, and adolescents with compassionate experts.",
    icon: <FaBaby />,
    badge: "Family Health",
  },
  {
    id: 3,
    title: "Dental Care",
    description:
      "Advanced oral health treatments, teeth whitening, hygiene maintenance, and pain-free restorative procedures.",
    icon: <FaTooth />,
    badge: "Oral Health",
  },
  {
    id: 4,
    title: "Cardiology Services",
    description:
      "In-depth cardiovascular diagnosis, ECG monitoring, heart disease prevention, and dedicated specialized care.",
    icon: <FaHeartbeat />,
    badge: "Specialized",
  },
  {
    id: 5,
    title: "Laboratory & Diagnostics",
    description:
      "Fast, highly accurate diagnostic lab tests, pathology screening, and digital imaging results you can trust.",
    icon: <FaTooth />,
    badge: "Modern Lab",
  },
  {
    id: 6,
    title: "Physical Therapy & Rehab",
    description:
      "Tailored rehabilitation and physical therapy programs helping you regain mobility, strength, and comfort.",
    icon: <GiErlenmeyer />,
    badge: "Recovery",
  },
];
export const faqData = [
  {
    id: 1,
    question: "How do I book an appointment at Clinova?",
    answer:
      "You can easily schedule an appointment directly through our online booking button at the top of the page, by calling our 24/7 hotline at +1 (800) 234-5678, or by visiting our reception desk.",
  },
  {
    id: 2,
    question: "What health insurance providers do you accept?",
    answer:
      "We partner with major national and regional health insurance providers including BlueCross, Aetna, Cigna, UnitedHealthcare, Medicare, and many more. Contact our billing department for specific coverage questions.",
  },
  {
    id: 3,
    question: "Are telehealth and online consultations available?",
    answer:
      "Yes, our telemedicine platform allows you to consult with board-certified physicians from the comfort of your home via secure video calls on both desktop and mobile devices.",
  },
  {
    id: 4,
    question: "What safety and hygiene measures are followed in your clinics?",
    answer:
      "Patient safety is our primary concern. We adhere to rigorous sterilization standards, hospital-grade air filtration, contactless check-in, and sanitized examination rooms between patient visits.",
  },
  {
    id: 5,
    question: "How can I access my medical records and lab test results?",
    answer:
      "You can securely access your digital records, doctor's notes, prescriptions, and diagnostic lab reports anytime via our secure patient portal with encrypted login credentials.",
  },
];
export const LastData = [
  {
    id:1,
    p:"“The doctors at Clinova took the timeto truly listen to my concerns. Thepersonalized care and attention wereunlike any hospital I've been tobefore.”",
    title:"Alex Robinson",
    h3:"Verified Patient",
    img:img,

  },
  {
    id:2,
    p:"“Booking an appointment tookseconds, and the clinic staff wereprompt and polite. Outstanding clinicenvironment and world-class.doctors.”",
    title:"Sarah Chen",
    h3:"Verified Patient",
    img:prson2,

  },
  {
    id:3,
    p:"“Dr. Evans and the nursing team wereexceptional. They made a stressfulprocedure feel calm and completely manageable. Thank you!”",
    title:"Marcus Miller",
    h3:"Verified Patient",
    img:prson3,

  },
  {
    id:4,
    p:"“The follow-up care and remotecheck-ins gave me so much peace ofmind during recovery. Truly top-tierhealthcare services.”",
    title:"Elena Rossi",
    h3:"Verified Patient",
    img:prson4,

  },
]
