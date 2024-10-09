import React from 'react'
import { Link } from 'react-router-dom'
import { Shirt } from 'lucide-react'

interface HeaderProps {
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-xl font-bold text-indigo-600">
          <Shirt className="mr-2" />
          StyleAssist
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link></li>
            {isLoggedIn ? (
              <>
                <li><Link to="/profile" className="text-gray-600 hover:text-indigo-600">Profile</Link></li>
                <li><Link to="/recommendation" className="text-gray-600 hover:text-indigo-600">Get Outfit</Link></li>
                <li><button onClick={() => setIsLoggedIn(false)} className="text-gray-600 hover:text-indigo-600">Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to="/login" className="text-gray-600 hover:text-indigo-600">Login</Link></li>
                <li><Link to="/register" className="text-gray-600 hover:text-indigo-600">Register</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header