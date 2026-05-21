import React, { useState } from 'react';
import type { Project } from '../types';

const projectsData: Project[] = [
  {
    id: 'chatrix',
    title: 'Chatrix',
    shortDescription: 'Full-stack, real-time, event-driven messaging platform.',
    tags: ['Go', 'PostgreSQL', 'Redis', 'WebSockets', 'Docker'],
    links: [
      { label: 'Source Code', url: 'https://github.com/myselfBZ/chatrix' }
    ],
    fullDescription: (
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <p>Built with absolute love from the bottom of my heart. Chatrix is a real-time messaging system built as a multi-client platform with a shared backend.</p>
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-6">System Overview</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li>Backend service handling authentication, messaging, and real-time communication</li>
          <li>Web client for browser-based usage</li>
          <li>Mobile client for native usage</li>
        </ul>
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-6">Architecture</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li>Event-driven messaging</li>
          <li>Real-time communication via WebSockets</li>
          <li>Separate clients sharing a common protocol</li>
        </ul>
      </div>
    )
  },
  {
    id: 'ecommerce',
    title: 'Microservices E-Commerce',
    shortDescription: 'Highly available e-commerce platform built on a gRPC microservices architecture.',
    tags: ['Go', 'gRPC', 'Microservices'],
    links: [
      { label: 'Source Code', url: 'https://github.com/myselfBZ/ecommerce-microservices' }
    ],
    fullDescription: (
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <p>A scalable microservices-based e-commerce platform. Engineered with gRPC for lightning-fast internal service communication, ensuring high availability and low latency.</p>
        <p>Each microservice independently manages its own dedicated database and resources, guaranteeing robust fault isolation, horizontal scalability, and clean domain boundaries.</p>
      </div>
    )
  },
  {
    id: 'redis-clone',
    title: 'Redis Clone',
    shortDescription: 'In-memory Redis-compatible key-value store with RESP support.',
    tags: ['Go', 'Concurrency', 'RESP'],
    links: [
      { label: 'Source Code', url: 'https://github.com/myselfBZ/go-redis-clone' }
    ],
    fullDescription: (
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <p>A lightweight, in-memory Redis-clone key-value storage written in Go. Supports atomic operations, TTLs, and concurrency-safe access.</p>
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-6">Features</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Core Commands:</strong> SET, GET, DEL, EXPIRE, TTL, PTTL, PERSIST, INCR, DECR, INCRBY, PING</li>
          <li><strong>TTL Handling:</strong> EX/PX support, lazy expiration, and a background janitor for cleanup</li>
          <li><strong>Concurrency Safe:</strong> All operations protected by mutexes; atomic reads/writes</li>
          <li><strong>RESP Ready:</strong> Designed to integrate with RESP handlers for network communication</li>
        </ul>
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-6">Design Highlights</h4>
        <p>Strict separation of concerns between the storage layer (managing data/TTLs) and the protocol layer (parsing/validation). NX/XX semantics and TTLs are updated atomically.</p>
      </div>
    )
  },
  {
    id: 'monkeylang',
    title: 'Monkeylang Interpreters',
    shortDescription: 'Two language interpreters built from scratch—one in Go, one in Rust.',
    tags: ['Go', 'Rust', 'Compilers/Interpreters'],
    links: [
      { label: 'Go Edition', url: 'https://github.com/myselfBZ/go-monkeylang' },
      { label: 'Rust Edition', url: 'https://github.com/myselfBZ/rs-monkey' }
    ],
    fullDescription: (
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <p>Based on the book <em>"Building an Interpreter in the Go Programming Language"</em>. I built the complete interpreter twice: first in Golang, and then again in Rust to compare performance and language ergonomics.</p>
        <ul className="list-disc ml-5 space-y-1 mt-4">
          <li>Implemented a custom Lexer to tokenize source code</li>
          <li>Built a Parser to generate an Abstract Syntax Tree (AST)</li>
          <li>Engineered an Evaluator for code execution</li>
          <li>Includes a fully functional CLI REPL (Read-Eval-Print Loop)</li>
          <li>Achieved full unit test coverage across both implementations</li>
        </ul>
      </div>
    )
  }
];

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  if (activeProject) {
    return (
      <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto min-h-screen">
        <button 
          onClick={() => setActiveProject(null)}
          className="mb-8 flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          ← Back to Projects
        </button>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {activeProject.title}
        </h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {activeProject.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-semibold rounded-full text-gray-700 dark:text-gray-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="prose dark:prose-invert max-w-none mb-10">
          {activeProject.fullDescription}
        </div>
        
        {/* Render Source Code Links */}
        {activeProject.links && (
          <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            {activeProject.links.map(link => (
              <a 
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-lg hover:opacity-90 transition-opacity shadow-sm flex items-center gap-2"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800">
      <h3 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">Personal Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 mt-8">
        {projectsData.map((project) => (
          <div key={project.id} className="relative group">
            
            {/* The Gopher & Speech Bubble */}
            <div className="absolute right-6 top-0 z-0 flex flex-col items-center transition-all duration-300 ease-out translate-y-6 opacity-0 group-hover:-translate-y-16 group-hover:opacity-100 pointer-events-none">
              <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 relative mb-1">
                Click me!
                {/* Speech bubble tail */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-gray-800 border-b border-r border-gray-200 dark:border-gray-700 transform rotate-45"></div>
              </div>
              <img 
                src="https://raw.githubusercontent.com/MariaLetta/free-gophers-pack/master/characters/png/7.png" 
                alt="Go Gopher" 
                // hue-rotate-[15deg] pushes the default cyan towards a richer, deeper blue
                className="w-12 h-12 object-contain hue-rotate-[15deg] drop-shadow-sm"
              />
            </div>

            {/* The Card */}
            <div 
              onClick={() => setActiveProject(project)}
              className="relative z-10 cursor-pointer p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all flex flex-col h-full bg-white dark:bg-gray-950"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 flex-grow mb-6">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-semibold rounded text-gray-600 dark:text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;