"use client"

import { useState } from "react"
import { Heart, Trash2 } from "lucide-react"
import Image from "next/image"

export default function Favorites() {
  // Estado para os produtos favoritos
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Bolo de Rolo Tradicional",
      price: 25.9,
      originalPrice: 29.9,
      seller: "Doces da Boa Vista",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Ccircle cx='12' cy='8' r='7'%3E%3C/circle%3E%3Cpolyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'%3E%3C/polyline%3E%3C/svg%3E",
    },
    {
      id: 2,
      name: "Camisa Recife Antigo",
      price: 49.9,
      seller: "Moda Pernambucana",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E",
    },
    {
      id: 3,
      name: "Artesanato em Barro",
      price: 45.0,
      seller: "Artesanato Caruaru",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      id: 4,
      name: "CD Frevo Moderno",
      price: 22.9,
      seller: "Música Pernambucana",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M9 18V5l12-2v13'%3E%3C/path%3E%3Ccircle cx='6' cy='18' r='3'%3E%3C/circle%3E%3Ccircle cx='18' cy='16' r='3'%3E%3C/circle%3E%3C/svg%3E",
    },
  ])

  // Função para remover um item dos favoritos
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id))
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Meus Favoritos</h2>

      {favorites.length === 0 ? (
        <div className="text-center py-8">
          <Heart className="h-12 w-12 mx-auto text-gray-400 mb-3" />
          <p className="text-gray-500">Você ainda não adicionou produtos aos favoritos.</p>
          <button className="mt-4 px-4 py-2 bg-[#FF6B35] text-white rounded-md hover:bg-[#e85a2a] transition-colors">
            Explorar produtos
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 relative group h-full flex flex-col">
              <button
                onClick={() => removeFromFavorites(product.id)}
                className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors z-10"
              >
                <Trash2 className="h-4 w-4" />
              </button>

              <div className="h-40 bg-gray-100 rounded-lg mb-3 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="font-medium text-gray-800 line-clamp-2 flex-1">{product.name}</h3>
                <p className="text-sm text-gray-500 truncate">Vendido por: {product.seller}</p>
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <p className="font-semibold text-[#FF6B35]">R$ {product.price.toFixed(2).replace(".", ",")}</p>
                    {product.originalPrice && (
                      <p className="text-xs text-gray-500 line-through">
                        R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                      </p>
                    )}
                  </div>
                  <button className="px-3 py-1.5 bg-[#FF6B35] text-white text-sm rounded hover:bg-[#e85a2a] transition-colors">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
