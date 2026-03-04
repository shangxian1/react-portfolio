import React from "react";
import experiences from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-16 py-24 bg-[#0a0a0a] text-white"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Experiences
        </h2>
        <div className="mt-4 h-[1px] w-24 bg-white/30"></div>
      </div>

      {/* Experience List */}
      <div className="max-w-6xl mx-auto space-y-24">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* LEFT SIDE — TEXT */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-medium">
                  {exp.role}
                </h3>
                <p className="text-white/60 mt-1">
                  {exp.org}
                </p>

                <div className="mt-3 text-sm text-white/50">
                  {exp.type && <span className="mr-4">{exp.type}</span>}
                  {exp.date && <span>{exp.date}</span>}
                </div>
              </div>

              <div className="space-y-6">
                {exp.intro && (
                  <p className="text-white/70 leading-relaxed">
                    {exp.intro}
                  </p>
                )}

                {exp.highlights && exp.highlights.length > 0 && (
                  <>
                    <p className="text-white font-medium">
                      This experience allowed me to:
                    </p>

                    <ul className="space-y-3 text-white/70">
                      {exp.highlights.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            {/* RIGHT SIDE — IMAGE */}
            {exp.image && (
              <div className="relative group">
                <img
                  src={`${import.meta.env.BASE_URL}${exp.image}`}
                  alt={exp.org}
                  className="rounded-2xl border border-white/10 
                             transition-all duration-500 
                             group-hover:scale-[1.02]"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}