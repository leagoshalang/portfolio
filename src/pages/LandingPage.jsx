import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer.jsx";

const LandingPage = () => {

const navigate = useNavigate();
  const professions = ["Full-Stack Software Developer", "UI/UX Designer"];
  const [displayedText, setDisplayedText] = useState("");
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentProfession = professions[currentProfessionIndex];
    let timeout;

    if (typing) {
      if (displayedText.length < currentProfession.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentProfession.slice(0, displayedText.length + 1));
        }, 150);
      } else {
    
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, displayedText.length - 1));
        }, 100);
      } else {

        setCurrentProfessionIndex((prev) => (prev + 1) % professions.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, typing, currentProfessionIndex, professions]);


  const languages = [
    { name: "JavaScript", level: "Advanced" },
    { name: "Python", level: "Beginner" },
    { name: "React JS", level: "Intermediate" },
    { name: "HTML & CSS", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "SQL", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "WordPress", level: "Intermediate" },
  ];


  const projects = [
    {
      title: "Lumora App",
      description:
        "A mobile app that uses AR and AI to analyze and simplify complex documents.",
      link: "#", 
    },
    {
      title: "Ervosmart Website",
      description:
        "A full-stack landscaping and horticulture e-commerce platform.",
      link: "https://ervosmart.co.za/",
    },
    {
      title: "Musa Properties Investments",
      description:
        "An e-commerce website for a South African coffee brand built with React and Node.js.",
      link: "https://musapropertysolutions.co.za/",
    },
  ];

  return (
    <div className="w-full h-full overflow-y-scroll scroll-smooth snap-y snap-mandatory">

      <section className="h-screen snap-start bg-gray-50 text-gray-800 flex flex-col justify-center items-center px-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-2">Shalang Leago</h1>
          <p className="text-xl text-blue-600 font-medium mb-6 h-8">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            I’m a final-year Software Developer passionate about building innovative, user-centered applications. 
            My focus areas include web and mobile development, where I apply modern frameworks like React, Node.js, 
            and Express to create efficient, scalable solutions.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => navigate('/contacts')}
            >
              Contact Me
            </button>
           
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
              View Resume
            </button>
          </div>
        </div>
      </section>

 
      <section className="h-100 snap-start bg-white text-gray-800 flex flex-col justify-center items-center px-8">
        <div className="max-w-5xl w-full text-center">
          <h3 className="text-3xl font-semibold mb-6">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 shadow rounded-lg hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-blue-700">{lang.name}</h4>
                <p className="text-gray-500 text-sm">{lang.level}</p>
              </div>
            ))}
          </div>
          <a
            href="/languages"
            className="inline-block mt-6 text-blue-600 hover:underline"
          >
            View All Languages
          </a>
        </div>
      </section>


      <section className="h-100 snap-start bg-gray-50 text-gray-800 flex flex-col justify-center items-center px-8">
        <div className="max-w-5xl w-full text-center">
          <h3 className="text-3xl font-semibold mb-6">Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((proj, index) => (
              <a
                key={index}
                href={proj.link}
                target="_blank"
                className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition text-left block"
              >
                <h4 className="font-semibold text-blue-700 mb-2">{proj.title}</h4>
                <p className="text-gray-600 text-sm">{proj.description}</p>
              </a>
            ))}
          </div>
          <a
            href="/projects"
            className="inline-block mt-6 text-blue-600 hover:underline"
          >
            View All Projects
          </a>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
