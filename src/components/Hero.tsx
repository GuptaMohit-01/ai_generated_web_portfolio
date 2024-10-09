import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 animate-gradient text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 hover-scale">
          Mohit Gupta
        </h1>
        <p className="text-xl md:text-2xl mb-8 hover-scale">
          Full Stack Developer
        </p>
        <div className="flex justify-center space-x-4">
          {[
            { Icon: Github, href: 'https://github.com' },
            { Icon: Linkedin, href: 'https://linkedin.com' },
            { Icon: Mail, href: 'mailto:john@example.com' },
          ].map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors duration-300 hover-rotate"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
