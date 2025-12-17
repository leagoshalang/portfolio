import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Icons
import { FaJava, FaReact, FaJs, FaComments } from "react-icons/fa";
import { SiPython } from "react-icons/si";

// Assets
import python101 from "../assets/python-101.png";
import backend from "../assets/Backend-ICEP.jpeg";
import Leago from "../assets/Leago.jpeg";

const LandingPage = () => {
  const navigate = useNavigate();

  /* =======================
     STATE
  ======================= */
  const professions = ["Full-Stack Software Developer", "UI/UX Designer"];
  const [displayedText, setDisplayedText] = useState("");
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  const [chatOpen, setChatOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  /* =======================
     TYPEWRITER EFFECT
  ======================= */
  useEffect(() => {
    const currentProfession = professions[currentProfessionIndex];
    let timeout;

    if (typing) {
      if (displayedText.length < currentProfession.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentProfession.slice(0, displayedText.length + 1));
        }, 120);
      } else {
        timeout = setTimeout(() => setTyping(false), 900);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 80);
      } else {
        setCurrentProfessionIndex((prev) => (prev + 1) % professions.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, typing, currentProfessionIndex]);

  /* =======================
     DATA
  ======================= */
  const languages = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: "Advanced" },
    { name: "Java", icon: <FaJava className="text-orange-500" />, level: "Intermediate" },
    { name: "Python", icon: <SiPython className="text-blue-500" />, level: "Beginner" },
    { name: "React JS", icon: <FaReact className="text-cyan-500" />, level: "Intermediate" },
  ];

  const projects = [
    {
      title: "Ervosmart Website",
      description: "Landscaping & horticulture e-commerce platform.",
      link: "https://ervosmart.co.za/",
    },
    {
      title: "Musa Property Solutions",
      description: "Property Investment and real estate platform.",
      link: "https://musapropertysolutions.co.za/",
    },  {
      title: "Lumora App",
      description: "Industry AR & AI-powered document analysis application.",
      link: "#",
    },
  ];

  const certifications = [
    {
      name: "Backend Developer",
      issuer: "ICEP",
      date: "November 2025",
      image: backend,
    },
    {
      name: "Python 101 for Data Science",
      issuer: "IBM SkillsBuild",
      date: "March 2025",
      image: python101,
    },
  ];

  /* =======================
     RENDER
  ======================= */
  return (
    <div className="w-full text-gray-800">

      {/* ===== HERO ===== */}
      <section className="bg-gray-50 py-28 text-center px-6">
        <h1 className="text-5xl font-extrabold mb-3 text-gray-900">
          Shalang Leago
        </h1>
        <p className="text-xl text-blue-600 font-semibold mb-6 h-8">
          {displayedText}<span className="animate-pulse">|</span>
        </p>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-8">
          Final-year Software Developer focused on building scalable, modern,
          and user-centered web & mobile applications.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/contacts")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
            View Resume
          </button>
        </div>
      </section>

      {/* ===== ABOUT ME ===== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">About Me</h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              I am a passionate Software Developer with strong interests in
              backend systems, modern frontend frameworks, and UI/UX design.
            </p>

            <p className="text-gray-700 mb-3">
              <span className="font-semibold text-gray-900">Lumora App:</span>{" "}
              Industry project with FluidIntellect where I worked as a backend
              developer using Python Flask.
            </p>

            <p className="text-gray-700 mb-3">
              <span className="font-semibold text-gray-900">WIL Project:</span>{" "}
              Backend development using Node.js & Express, transitioned into
              React JS frontend and system demo design using Figma.
            </p>

            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Freelance:</span>{" "}
              WordPress website development and Canva lookbook designs at WebMax.
            </p>
          </div>

          <img
            src={Leago}
            alt="Shalang Leago"
            className="rounded-2xl shadow-lg w-80 mx-auto"
          />
        </div>
      </section>

      {/* ===== LANGUAGES ===== */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">
          Languages & Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {languages.map((lang, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <div className="text-5xl mb-3">{lang.icon}</div>
              <h4 className="font-semibold text-gray-900">{lang.name}</h4>
              <span className="mt-2 inline-block text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {lang.level}
              </span>
            </div>
          ))}
        </div>

        <a href="/languages" className="inline-block mt-8 text-blue-600 font-medium hover:underline">
          View more →
        </a>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((proj, i) => (
            <a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl text-left transition"
            >
              <h4 className="text-blue-700 font-semibold mb-2">
                {proj.title}
              </h4>
              <p className="text-gray-700 text-sm">{proj.description}</p>
            </a>
          ))}
        </div>

        <a href="/projects" className="inline-block mt-8 text-blue-600 font-medium hover:underline">
          View more →
        </a>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">Certifications</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, i) => (
            <div
              key={i}
              onClick={() => {
                setSelectedCert(cert);
                setModalOpen(true);
              }}
              className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <h4 className="text-blue-700 font-semibold">{cert.name}</h4>
              <p className="text-gray-700 text-sm">{cert.issuer}</p>
              <p className="text-gray-500 text-xs">{cert.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CERT MODAL (SCROLLABLE) ===== */}
      {modalOpen && selectedCert && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-900"
            >
              ×
            </button>

            <h3 className="text-2xl font-bold text-blue-700 mb-2">
              {selectedCert.name}
            </h3>
            <p className="text-gray-700">{selectedCert.issuer}</p>
            <p className="text-gray-500 text-sm mb-4">{selectedCert.date}</p>

            <img
              src={selectedCert.image}
              alt={selectedCert.name}
              className="w-full rounded-lg border"
            />
          </div>
        </div>
      )}

      {/* ===== CHAT BUTTON ===== */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 p-4 rounded-full text-white shadow-lg hover:bg-blue-700 transition"
      >
        <FaComments size={24} />
      </button>

    </div>
  );
};

export default LandingPage;
