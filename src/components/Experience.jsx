import React from 'react';

const unifiedData = [
];

export default function Experience() {
  return (
    <div className="max-w-3xl">
      <div className="relative border-l border-white/10 ml-3">
        {unifiedData.map((item, index) => (
          <div key={index} className="mb-16 ml-8 relative group">
            
            {/* The Dot: Changes color based on type (Education vs Project) */}
            <div className={`absolute w-3 h-3 rounded-full -left-[38px] top-1.5 transition-all duration-500
              ${item.type === 'Education' ? 'bg-white shadow-[0_0_10px_white]' : 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]'}
              group-hover:scale-125`} 
            />
            
            <div className="flex items-center gap-3 mb-1">
               <span className="text-[11px] uppercase tracking-widest text-gray-500 font-light">
                {item.date}
              </span>
              <span className="px-2 py-0.5 rounded-full border border-white/10 text-[10px] text-gray-400 uppercase tracking-tighter">
                {item.type}
              </span>
            </div>
            
            <h3 className="text-xl text-white font-medium">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm italic mb-4">
              {item.location}
            </p>
            <p className="text-gray-500 font-light leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}