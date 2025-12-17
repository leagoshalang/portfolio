import React from 'react';
import { FaJava, FaJs, FaReact, FaGitAlt, FaWordpress, FaGithub , FaHtml5 , FaNodeJs} from 'react-icons/fa';
import { SiPython, SiMysql, SiKotlin, SiFigma, SiCanva } from 'react-icons/si';

const languages = [
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 'Advanced' },
  { name: 'Java', icon: <FaJava className="text-orange-500" />, level: 'Intermediate' },
  { name: 'Python', icon: <SiPython className="text-blue-500" />, level: 'Beginner' },
  { name: 'React JS', icon: <FaReact className="text-cyan-400" />, level: 'Intermediate' },
  { name: 'HTML & CSS', icon: <FaHtml5 className="text-orange-400" />, level: 'Advanced' },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, level: 'Intermediate' },
  { name: 'SQL', icon: <SiMysql className="text-blue-700" />, level: 'Intermediate' },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" />, level: 'Intermediate' },
  { name: 'WordPress', icon: <FaWordpress className="text-blue-600" />, level: 'Intermediate' },
  { name: 'Github', icon: <FaGithub className="text-gray-800" />, level: 'Intermediate' },
  { name: 'Kotlin', icon: <SiKotlin className="text-purple-500" />, level: 'Beginner' },
  { name: 'Canva', icon: <SiCanva className="text-teal-400" />, level: 'Intermediate' },
  { name: 'Figma', icon: <SiFigma className="text-pink-500" />, level: 'Intermediate' },
];

const Languages = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 flex flex-col justify-between">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Programming Languages & Technologies
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all flex flex-col items-center text-center"
            >
              {/* Logo/Icon */}
              <div className="text-5xl mb-4">{lang.icon}</div>

              {/* Name */}
              <h2 className="text-2xl font-semibold mb-2 text-blue-600">{lang.name}</h2>

              {/* Level Badge */}
              <span className="mt-2 px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Languages;
