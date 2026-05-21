import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800 text-center">
      <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Let's Connect</h3>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a 
          href="https://github.com/myselfBZ" 
          target="_blank" 
          rel="noreferrer"
          className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
        >
          GitHub
        </a>
        <a 
          href="https://t.me/alivobjonov" 
          target="_blank" 
          rel="noreferrer"
          className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
        >
          Telegram
        </a>
        <a 
          href="https://discord.com/users/1348496475616968704" 
          target="_blank" 
          rel="noreferrer"
          className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors"
        >
          Discord
        </a>
      </div>
    </section>
  );
};

export default Contact;