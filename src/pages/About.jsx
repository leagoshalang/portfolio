import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <div className="flex-grow max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

        {/* -------------------- Introduction -------------------- */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed">
            Hello! I'm <span className="font-semibold">Shalang Leago</span>, a passionate Software Developer specializing in web and mobile development. 
            I focus on building innovative, user-centered applications using modern frameworks such as <span className="font-semibold">React, Node.js, and Express</span>. 
            I thrive on solving real-world problems through <span className="font-semibold">clean code, collaboration, and continuous learning</span>.
          </p>
        </section>

        {/* -------------------- Industry Experience -------------------- */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Industry Experience</h2>
          
          <p className="text-lg leading-relaxed mb-4">
            I gained valuable industry exposure working with <span className="font-semibold">FluidIntellect Company</span> on the <span className="italic">Lumora App</span> project. 
            I contributed as a <span className="font-semibold">backend developer using Python Flask</span>, implementing APIs and ensuring smooth communication between system components.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            During my <span className="font-semibold">Work Integrated Learning (WIL)</span> project, I started as a <span className="font-semibold">backend developer with Node.js and Express</span> and transitioned into frontend development using <span className="font-semibold">React.js</span>. 
            I also helped design the <span className="font-semibold">system demo in Figma</span> to present workflows and UI components to stakeholders.
          </p>

          <p className="text-lg leading-relaxed">
            Additionally, I have been freelancing as a <span className="font-semibold">WordPress developer at WebMax</span>, creating professional websites and designing <span className="font-semibold">lookbooks and marketing materials using Canva</span>. 
            This experience strengthened my skills in <span className="font-semibold">CMS customization, theme development, responsive design, UI/UX principles, and graphic design</span>.
          </p>
        </section>

        {/* -------------------- Academic Projects -------------------- */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Academic Projects</h2>
          <p className="text-lg leading-relaxed mb-4">
            During my studies, I worked on several projects that strengthened my understanding of software development fundamentals and database management. 
            These included building applications using <span className="font-semibold">Java, HTML, CSS, and SQL</span>, providing hands-on experience in both frontend and backend development.
          </p>
          <p className="text-lg leading-relaxed">
            I also contributed to my <span className="font-semibold">final-year project</span> by developing a website called <span className="italic">KnowMyRoots</span>, which involved collaborative web development, database integration, and applying best practices in both frontend and backend design.
          </p>
        </section>

        {/* -------------------- Closing Statement -------------------- */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed">
            With a solid foundation in software engineering principles and extensive hands-on experience, 
            I am eager to contribute to impactful tech projects, continue learning, and grow as a professional developer. 
            I am particularly passionate about creating solutions that are <span className="font-semibold">efficient, scalable, and user-focused</span>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
