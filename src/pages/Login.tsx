import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface LoginProps {
  setIsLoggedIn: (value: boolean) => void
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual login logic
    console.log('Login attempt with:', { email, password })
    setIsLoggedIn(true)
    navigate('/profile')
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login