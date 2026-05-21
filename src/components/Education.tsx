import React from 'react';

const educationData = [
  {
    id: 'cau',
    degree: 'BS in Computer Science',
    institution: 'Central Asian University',
    period: 'Freshman',
    logo: '/cau.jpg'
  }
];

const Education: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto border-t border-black dark:border-white relative z-10">
      <h3 className="text-3xl font-bold mb-16 text-black dark:text-white uppercase tracking-tight">
        Education
      </h3>

      <div className="space-y-10">
        {educationData.map((edu) => (
          <div key={edu.id} className="group">

            {/* Mobile layout */}
            <div className="md:hidden flex flex-col gap-4">
              <div className="flex items-center gap-3">
                {edu.logo && (
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-10 h-10 object-cover border border-black dark:border-white grayscale group-hover:grayscale-0 transition-all duration-500 flex-shrink-0"
                  />
                )}
                <div>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">
                    {edu.period}
                  </p>
                  <p className="text-black dark:text-white font-bold leading-tight">
                    {edu.institution}
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 dark:border-gray-800 p-5 group-hover:border-black dark:group-hover:border-white transition-colors duration-300">
                <h4 className="text-xl font-bold text-black dark:text-white">
                  {edu.degree}
                </h4>
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:flex items-stretch gap-0">

              {/* Left meta column */}
              <div className="w-48 flex-shrink-0 flex flex-col justify-start pt-1 pr-8">
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  {edu.period}
                </p>
                <div className="flex items-start gap-3">
                  {edu.logo && (
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-9 h-9 object-cover border border-black dark:border-white grayscale group-hover:grayscale-0 transition-all duration-500 flex-shrink-0 mt-0.5"
                    />
                  )}
                  <p className="text-black dark:text-white font-bold leading-snug text-sm">
                    {edu.institution}
                  </p>
                </div>
              </div>

              {/* Timeline column */}
              <div className="flex flex-col items-center w-8 flex-shrink-0">
                <div className="w-3 h-3 rounded-full border-2 border-black dark:border-white bg-white dark:bg-black group-hover:bg-black dark:group-hover:bg-white transition-colors duration-300 mt-2 flex-shrink-0" />
                <div className="w-px flex-1 bg-gray-200 dark:bg-gray-800 group-hover:bg-black dark:group-hover:bg-white transition-colors duration-500 mt-1" />
              </div>

              {/* Degree card */}
              <div className="flex-1 ml-8 border border-gray-200 dark:border-gray-800 p-6 group-hover:border-black dark:group-hover:border-white transition-colors duration-300 self-start">
                <h4 className="text-xl font-bold text-black dark:text-white">
                  {edu.degree}
                </h4>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;