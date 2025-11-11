import React from "react";

function Projects() {
  const projects = {
    wordpress: [
      { title: "Ervosmart Website", description: "Full-stack WordPress site for landscaping & horticulture." },
      { title: "Sikis Koffee Kafe", description: "WordPress e-commerce site for a coffee brand." },
      { title: "Musa Property Investment", description: "Professional WordPress site for a property investment company" },
    ],
    java: [
      { title: "Library Management System", description: "Java desktop app to manage books, students, and lending." },
      { title: "Banking App", description: "A simple Java banking application with CRUD operations." },
    ],
    react: [
      { title: "Portfolio Website", description: "A React portfolio site to showcase projects and resume." },
        { title: "WIL Project", description: "Still in development" },
    ],
    node: [
          { title: "WIL Project", description: "Still in development" },
    ],
    python: [
      { title: "Lumora App Backend", description: "Backend services for document analysis mobile app using Flask." },
    ],
    canva: [
        { title: "Lookbooks", description: "Designed company lookbooks" },
        { title: "Presentation Designs", description: "Created visually appealing presentations for clients." },
    ],
    figma: [
        { title: "UI/UX Designs", description: "Crafted user interface and experience designs for web and mobile apps." },
    ],
   
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <div className="flex-grow flex flex-col justify-center max-w-6xl mx-auto p-8">
        <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
        <p className="text-lg text-center mb-12">
          Here are some of my projects, categorized by technology stack.
        </p>

        {Object.entries(projects).map(([tech, projList]) => (
          <div key={tech} className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 capitalize">{tech} Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projList.map((proj, index) => (
                <div
                  key={index}
                  className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition"
                >
                  <h4 className="font-semibold text-blue-700 mb-2">{proj.title}</h4>
                  <p className="text-gray-600 text-sm">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
