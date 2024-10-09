import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import OutfitRecommendation from './pages/OutfitRecommendation'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/recommendation" element={<OutfitRecommendation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App