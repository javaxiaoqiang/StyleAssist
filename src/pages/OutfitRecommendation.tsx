import React, { useState, useEffect } from 'react'

interface OutfitItem {
  type: string
  name: string
  description: string
}

interface Outfit {
  id: number
  image: string
  items: OutfitItem[]
}

const OutfitRecommendation: React.FC = () => {
  const [outfits, setOutfits] = useState<Outfit[]>([])

  useEffect(() => {
    // Simulating API call to get recommendations
    const mockOutfits: Outfit[] = [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        items: [
          { type: 'Top', name: 'White T-shirt', description: 'Classic cotton tee' },
          { type: 'Bottom', name: 'Blue Jeans', description: 'Slim fit denim' },
          { type: 'Outerwear', name: 'Denim Jacket', description: 'Light wash jean jacket' },
          { type: 'Shoes', name: 'White Sneakers', description: 'Minimalist canvas shoes' },
          { type: 'Accessory', name: 'Silver Watch', description: 'Stainless steel timepiece' },
        ]
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        items: [
          { type: 'Top', name: 'Black Blouse', description: 'Silk button-up shirt' },
          { type: 'Bottom', name: 'Pencil Skirt', description: 'Knee-length black skirt' },
          { type: 'Outerwear', name: 'Leather Jacket', description: 'Black moto-style jacket' },
          { type: 'Shoes', name: 'Ankle Boots', description: 'Heeled leather boots' },
          { type: 'Accessory', name: 'Statement Necklace', description: 'Gold chunky chain' },
        ]
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1617137968508-f08f6c9d1f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        items: [
          { type: 'Top', name: 'Striped Sweater', description: 'Navy and white knit pullover' },
          { type: 'Bottom', name: 'Chino Pants', description: 'Khaki slim fit trousers' },
          { type: 'Outerwear', name: 'Trench Coat', description: 'Beige classic coat' },
          { type: 'Shoes', name: 'Loafers', description: 'Brown leather slip-ons' },
          { type: 'Accessory', name: 'Leather Briefcase', description: 'Tan professional bag' },
        ]
      },
      {
        id: 4,
        image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        items: [
          { type: 'Top', name: 'Floral Dress', description: 'Midi length with short sleeves' },
          { type: 'Outerwear', name: 'Cardigan', description: 'Light knit in pastel color' },
          { type: 'Shoes', name: 'Sandals', description: 'Strappy flat sandals' },
          { type: 'Accessory', name: 'Sun Hat', description: 'Wide-brimmed straw hat' },
          { type: 'Accessory', name: 'Tote Bag', description: 'Canvas beach bag' },
        ]
      },
    ]
    setOutfits(mockOutfits)
  }, [])

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Your Outfit Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {outfits.map((outfit) => (
          <div key={outfit.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={outfit.image} alt="Outfit" className="w-full h-96 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Outfit {outfit.id}</h3>
              {outfit.items.map((item, index) => (
                <div key={index} className="mb-2">
                  <span className="font-medium">{item.type}:</span> {item.name}
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
              <div className="mt-4 flex justify-between">
                <button className="text-indigo-600 hover:text-indigo-800">Like</button>
                <button className="text-indigo-600 hover:text-indigo-800">Save</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OutfitRecommendation