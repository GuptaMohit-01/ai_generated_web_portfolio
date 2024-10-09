import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://avatars.githubusercontent.com/u/180366761?v=4"
              alt="Mohit Gupta"
              className="rounded-full w-64 h-64 object-cover mx-auto hover-scale"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4 hover-scale">
              Hi, I'm Mohit Gupta, a passionate Full Stack Developer with 5
              years of experience in creating web applications. I specialize in
              React, Node.js, and TypeScript.
            </p>
            <p className="text-lg mb-4 hover-scale">
              My goal is to build efficient, scalable, and user-friendly
              applications that solve real-world problems. I'm always eager to
              learn new technologies and improve my skills.
            </p>
            <p className="text-lg hover-scale">
              When I'm not coding, you can find me hiking, reading tech blogs,
              or contributing to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
