import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-12 max-w-5xl mx-auto overflow-hidden">
      
      {/* SaaS 3.0 Ambient Background Glows - Kept these because they make the white text pop! */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[150px] opacity-40 animate-pulse pointer-events-none"
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[150px] opacity-30 animate-pulse pointer-events-none" 
        style={{ animationDelay: '1.5s' }}
      ></div>

      <div className="relative z-10 flex flex-col items-start">
        
        {/* Name with Pure White Glow */}
        <h1 
          className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-4 transition-all duration-1000 ease-out ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-gray-900 dark:text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]">
            A. Bobirmirzo 
          </span>
        </h1>
        
        {/* Subtitle */}
        <h2 
          className={`text-2xl md:text-3xl text-gray-900 dark:text-gray-100 mb-6 font-bold transition-all duration-1000 delay-300 ease-out drop-shadow-sm ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Software Engineer
        </h2>
        
        {/* Bulleted Summary */}
        <ul 
          className={`text-lg text-gray-800 dark:text-gray-300 max-w-3xl leading-relaxed list-disc list-outside ml-6 space-y-3 transition-all duration-1000 delay-500 ease-out ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <li>Specializes in Go, Rust, and JavaScript/TypeScript.</li>
          <li>Proven track record of building scalable backends, real-time WebSocket servers, and multi-tenant architectures.</li>
          <li>Manages the full development lifecycle, from gathering client requirements to GCP deployment.</li>
        </ul>
        
      </div>
    </section>
  );
};

export default Hero;