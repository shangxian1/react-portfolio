import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="flex justify-center gap-8 py-16">
      <a
        href="https://github.com/shangxian1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white text-4xl transition-colors"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/lee-shang-xian-3705241bb/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white text-4xl transition-colors"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}