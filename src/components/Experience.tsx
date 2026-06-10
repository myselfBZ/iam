import React, { useState, useEffect, useRef } from 'react';

const experienceData = [
  {
    id: 'jade-founding',
    role: 'Founding Engineer',
    company: 'SAT Jade',
    period: 'Apr 2025 - Present',
    highlights: [
      'Designed and implemented a RESTful Go backend with JWT authentication, role-based access control, and a PostgreSQL data layer using a clean service/repository pattern.',
      'Built an SAT exam engine that models the official Bluebook module progression - scoring, section transitions, and difficulty adaptation between modules.',
      'Engineered a question bank system supporting multi-dimensional filtering across domains, skills, difficulty levels, and attempt history at the database query level.',
      'Implemented a friendship and social graph system with request/accept/reject flows, real-time online presence, and challenge invitation routing over WebSocket.'
    ],
    visitSite: "https://www.satjade.live",
    viewSource: "https://github.com/myselfBZ/satjade-backend-v2"
  },
  {
    id: 'jade-lead',
    role: 'Lead Engineer, Mock Exams',
    company: 'SAT Jade',
    period: 'Nov 2025 - Present',
    highlights: [
      'Extended SAT Jade into a B2B SaaS solution currently utilized by learning centers to host and manage mock exams.',
      'Architected a multi-tenant backend on GCP to provide isolated data environments, administrative dashboards, and automated grading for third-party educational clients.',
      'Engineered the transition from a solo project to a commercial product, managing the full development lifecycle from client requirements to production deployment.'
    ]
  },
  {
    id: 'uni-projects',
    role: 'Backend Engineer',
    company: 'Uni Projects Tech',
    period: 'Dec 2024 - Feb 2025',
    highlights: [
      'Developed scalable backend services for internal management systems using Go and MongoDB.',
      'Integrated and maintained GitHub CI/CD pipelines for automated testing and deployment.',
      'Maintained client communication to ensure requirements were met effectively.',
      'Deployed and managed the services on Google Cloud Platform.'
    ],
    visitSite: "https://www.unpt.uz/",
  }
];

const TypewriterText: React.FC<{ text: string; startDelay: number; isVisible: boolean }> = ({ text, startDelay, isVisible }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let interval: number;
    
    const timeout = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;
      
      interval = setInterval(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        
        if (currentIndex >= text.length) {
          setIsTyping(false);
          clearInterval(interval);
        }
      }, 12); 
      
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, startDelay, isVisible]);

  return (
    <span className="relative inline-block text-black dark:text-gray-300">
      {displayedText}
      {isTyping && (
        <span className="inline-block w-[6px] h-4 ml-1 translate-y-[2px] bg-black dark:bg-white animate-pulse"></span>
      )}
    </span>
  );
};

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 px-6 md:px-12 max-w-5xl mx-auto border-t border-black dark:border-white relative z-10"
    >
      <h3 className="text-3xl font-bold mb-12 text-black dark:text-white uppercase tracking-tight">
        Experience
      </h3>
      
      <div className="space-y-12">
        {experienceData.map((job, jobIndex) => (
          <div key={job.id} className="relative pl-8 md:pl-0 group">
            
            {/* Minimalist Solid Timeline Line */}
            <div className="hidden md:block absolute left-[8.5rem] top-2 bottom-[-3rem] w-[2px] bg-gray-200 dark:bg-gray-800 group-hover:bg-black dark:group-hover:bg-white transition-colors duration-500"></div>
            
            <div className="md:grid md:grid-cols-[10rem_1fr] md:gap-8 items-start">
              
              {/* Timeline Date & Company */}
              <div className="mb-4 md:mb-0 relative">
                {/* Monochrome dot */}
                <div className="hidden md:block absolute right-[-2.4rem] top-1.5 w-3.5 h-3.5 bg-white dark:bg-black border-2 border-black dark:border-white rounded-full z-10"></div>
                
                <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                  {job.period}
                </h4>
                <p className="text-black dark:text-white font-bold">
                  {job.company}
                </p>
              </div>

              {/* Role & Animated Highlights */}
              <div className="bg-transparent border border-gray-200 dark:border-gray-800 p-6 rounded-none hover:border-black dark:hover:border-white transition-colors duration-300">
                <h4 className="text-xl font-bold text-black dark:text-white mb-4">
                  {job.role}
                </h4>
                
                <ul className="space-y-3">
                  {job.highlights.map((highlight, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start">
                      <span className="mr-3 mt-1.5 text-black dark:text-white text-sm font-bold">▹</span>
                      <p className="leading-relaxed flex-1">
                        <TypewriterText 
                          text={highlight} 
                          startDelay={(jobIndex * 500) + (bulletIndex * 800)} 
                          isVisible={isVisible}
                        />
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Optional Links for Site & Source */}
                {(job.visitSite || job.viewSource) && (
                  <div className="mt-8 flex flex-wrap gap-4 border-t border-gray-200 dark:border-gray-800 pt-6">
                    {job.visitSite && (
                      <a 
                        href={job.visitSite} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="px-5 py-2 bg-black text-white dark:bg-white dark:text-black text-sm font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                      >
                        Visit Site ↗
                      </a>
                    )}
                    {job.viewSource && (
                      <a 
                        href={job.viewSource} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="px-5 py-2 border-2 border-black dark:border-white text-black dark:text-white text-sm font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                      >
                        Source Code ↗
                      </a>
                    )}
                  </div>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;