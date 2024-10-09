import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="hover-scale">&copy; {new Date().getFullYear()} Mohit Gupta. All rights reserved.</p>
        <p className="mt-2 hover-scale">Built with React and Tailwind CSS</p>
      </div>
    </footer>
  )
}

export default Footer