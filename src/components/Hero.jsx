import React from 'react';

export default function Hero() {
  const education = [
    {
      period: "2023 — 2026",
      role: "Diploma in Infocomm & Media Engineering",
      org: "Nanyang Polytechnic",
      details: "Specializing in Software & Applications \n Activities and societies: SEG Club (Sub-committee member) \n - Student volunteer for outreach events such as NYP Open House 2025, 2026 and DIME Parents' Night 2025 \n - Peer tutored modules: Web Design & Development (HTML, CSS, JavaScript) and Open Source Web Solutions Development (PHP, mySQL)"
    },
    {
      period: "2021 — 2023",
      role: "Higher NITEC in IT Applications Development",
      org: "ITE College East",
      details: "Activities and societies: IOT Club, ACE Program in ITE CE \n - Participated in events such as the LinkedIn Halogen Career Conversations and Career Roundtable programmes in 2021. \n - Completed modules in User Experience & Design, Web Content Management, Web Solutions Development, Interactive Applications Development, Mobile Solutions Development, Applied Scripting with Python and Essentials in Machine Learning \n - A in Mobile App Development and Programming fundamentals"
    },
    {
      period: "2017 — 2020",
      role: "GCE O-Levels",
      org: "East Spring Secondary School",
      details: "CCA: Badminton"
    }
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-8 py-32">
      {/* Intro Text */}
      <div className="max-w-3xl mb-20"> 
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6">
          Hello <br /> I am Shang Xian 👋
        </h1>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
          I am a student currently studying <span className="text-white">Infocomm and Media Engineering</span> at Nanyang Polytechnic.
          I have a strong passion for programming and creating innovative applications, mainly for school work and practical problem-solving.
          Academics aside, I enjoy playing badminton and watching shows during my free time as a way to relax and unwind.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="max-w-3xl">
        <h2 className="text-xl text-white mt-1 font-medium mb-10">Education</h2>
        
        <div className="relative border-l border-white/10 ml-1">
          {education.map((item, index) => (
            <div key={index} className="mb-12 ml-8 relative group">
              {/* Timeline Dot */}
              <div className="absolute w-2 h-2 bg-white rounded-full -left-[37px] top-2 transition-transform duration-300 group-hover:scale-150 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              
              {/* Content */}
              <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-medium">
                {item.period}
              </span>
              <h3 className="text-xl text-white mt-1 font-medium">{item.role}</h3>
              <p className="text-gray-400 text-sm mt-1">{item.org}</p>
              <p className="text-small text-white mt-1 font-medium" style={{whiteSpace: 'pre-line'}}>
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}