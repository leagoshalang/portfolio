import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <div className="flex-grow max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

        <section className="mb-12">
          <p className="text-lg leading-relaxed">
            Hello! I'm <span className="font-semibold">Shalang Leago</span>, a passionate Software Developer specializing in web and mobile development. 
            I focus on building innovative, user-centered applications using modern frameworks such as <span className="font-semibold">React, Node.js, and Express</span>. 
            I thrive on solving real-world problems through <span className="font-semibold">clean code, collaboration, and continuous learning</span>.
          </p>
        </section>


        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Industry Experience</h2>
          <p className="text-lg leading-relaxed mb-4">
            I gained valuable <span className="font-semibold">industry exposure</span> as a <span className="font-semibold">backend developer(python flask)</span> on the <span className="italic">Lumora App</span> with <span className="font-semibold">FluitIntellect Company</span>. 
            My contributions included implementing backend functionalities, creating the <span className="font-semibold">system architecture</span>, and ensuring efficient communication between components. 
            I also had the opportunity to <span className="font-semibold">present the app at the Feed Event</span>, showcasing its innovative approach and technical features to industry professionals.
          </p>
          <p className="text-lg leading-relaxed">
            Additionally, I have been freelancing as a <span className="font-semibold">WordPress developer at WebMax</span>, creating professional websites for clients. 
            This experience helped me develop a strong understanding of <span className="font-semibold">CMS customization, theme development, and responsive web design</span>, 
            while also beginning my journey into <span className="font-semibold">web design and UI/UX principles</span>.
          </p>
        </section>


        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Academic Projects</h2>
          <p className="text-lg leading-relaxed mb-4">
            During my studies, I worked on several projects that strengthened my understanding of software development fundamentals and database management. 
            These included building applications using <span className="font-semibold">Java, HTML, CSS, and SQL</span>, which gave me hands-on experience in both frontend and backend development.
          </p>
          <p className="text-lg leading-relaxed">
            I also contributed to my <span className="font-semibold">final-year project</span> by developing a website called <span className="italic">KnowMyRoots</span>. 
            This involved collaborative web development, database integration, and applying best practices in both frontend and backend design.
          </p>
        </section>

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
