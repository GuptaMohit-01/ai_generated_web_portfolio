import React from 'react'

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'GraphQL', level: 70 },
  { name: 'Docker', level: 65 },
]

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="mb-4 hover-scale">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700">{skill.name}</span>
                <span className="text-sm font-medium text-blue-700">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{ width: '0%' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.width = `${skill.level}%`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.width = '0%';
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills