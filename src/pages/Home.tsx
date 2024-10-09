import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to StyleAssist</h1>
      <p className="text-xl mb-8">Get personalized outfit recommendations tailored to your style and needs.</p>
      <Link to="/register" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
        Get Started
      </Link>
    </div>
  )
}

export default Home