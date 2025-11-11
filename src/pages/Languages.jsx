import React from 'react';
import Footer from './Footer.jsx';

const languages = [
  { 
    name: 'JavaScript', 
    description: 'A versatile, high-level programming language primarily used for web development.',
    experience: 'Used extensively in both academic projects and professional web development.' 
  },
  { 
    name: 'Python', 
    description: 'A high-level, interpreted language known for its readability and broad applicability.',
    experience: 'Used in Lumora App' 
  },
  { 
    name: 'React JS', 
    description: 'A JavaScript library for building user interfaces, particularly single-page applications.',
    experience: 'Used in Lumora App and several personal web projects.' 
  },
  { 
    name: 'HTML & CSS', 
    description: 'The foundational languages for creating and styling web pages.',
    experience: 'Used in all academic projects ' 
  },
  { 
    name: 'Node.js', 
    description: 'A JavaScript runtime built on Chrome\'s V8 engine, enabling server-side scripting.',
    experience: 'Implemented backend APIs for Lumora App and personal projects.' 
  },
  { 
    name: 'SQL', 
    description: 'A domain-specific language used for managing and manipulating relational databases.',
    experience: 'Used for database design and queries in academic and professional projects.' 
  },
  { 
    name: 'Git', 
    description: 'A distributed version control system for tracking changes in source code during software development.',
    experience: 'Used for version control in all projects and collaborative development.' 
  },
  { 
    name: 'WordPress', 
    description: 'A popular content management system (CMS) used for creating websites and blogs.',
    experience: 'Used in creating corporate and personal websites during website development projects at webmax as freelancer.' 
  },
    { 
    name: 'Github', 
    description: 'A web-based platform for version control and collaborative software development using Git.',
    experience: 'Used for managing code repositories for all projects.' 
  },
      { 
    name: 'kotlin', 
    description: 'A modern programming language that runs on the Java Virtual Machine (JVM) and is fully interoperable with Java.',
    experience: 'Learned in academic projects .' 
  },
      { 
    name: 'Canva', 
    description: 'A graphic design platform used to create social media graphics, presentations, posters, documents and other visual content.',
    experience: 'Used for designing UI/UX elements in design projects and personal designs.' 
  },
      { 
    name: 'Figma', 
    description: 'A web-based UI/UX design tool used for creating interactive prototypes and collaborative design projects.',
    experience: 'Used for designing user interfaces and prototypes in design projects.' 
  },
];

const Languages = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-10 text-center">Programming Languages & Technologies</h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {languages.map((lang) => (
                        <div
                            key={lang.name}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-105"
                        >
                            <h2 className="text-2xl font-semibold mb-2 text-blue-600">{lang.name}</h2>
                            <p className="text-gray-600 text-sm mb-2">{lang.description}</p>
                            <p className="text-gray-700 text-sm font-medium">Experience: {lang.experience}</p>
                        </div>
                    ))}
                </div>
            </div>
         
        </div>

    );
    <Footer />
}

export default Languages;
