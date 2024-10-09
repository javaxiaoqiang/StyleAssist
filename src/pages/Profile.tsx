import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile: React.FC = () => {
  const [profile, setProfile] = useState({
    gender: '',
    age: '',
    height: '',
    weight: '',
    style: '',
    occasion: '',
    season: '',
  })
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement profile update logic
    console.log('Profile update:', profile)
    alert('Profile updated successfully!')
    navigate('/recommendation')
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="gender" className="block mb-1">Gender</label>
          <select
            id="gender"
            name="gender"
            value={profile.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="age" className="block mb-1">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={profile.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="height" className="block mb-1">Height (cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            value={profile.height}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="weight" className="block mb-1">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={profile.weight}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="style" className="block mb-1">Preferred Style</label>
          <select
            id="style"
            name="style"
            value={profile.style}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="">Select style</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="sporty">Sporty</option>
            <option value="bohemian">Bohemian</option>
          </select>
        </div>
        <div>
          <label htmlFor="occasion" className="block mb-1">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={profile.occasion}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="">Select occasion</option>
            <option value="casual">Casual</option>
            <option value="work">Work</option>
            <option value="date">Date</option>
            <option value="party">Party</option>
          </select>
        </div>
        <div>
          <label htmlFor="season" className="block mb-1">Season</label>
          <select
            id="season"
            name="season"
            value={profile.season}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="">Select season</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
          Update Profile
        </button>
      </form>
    </div>
  )
}

export default Profile