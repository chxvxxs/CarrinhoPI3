"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, Star, ShoppingCart } from "lucide-react"

export default function ProductCard({ product, viewMode = "grid" }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = (e) => {
    e.preventDefault()
    setIsFavorite(!isFavorite)
  }

  if (viewMode === "list") {
    return (
      <Link href={`/produtos/${product.id}`} className="block">
        <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex gap-4">
            <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">Vendido por: {product.seller}</p>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({product.reviews} avaliações)</span>
                    </div>
                  </div>
                  <span
                    className={`inline-block text-xs px-2 py-1 rounded ${
                      product.tag.color === "green"
                        ? "bg-green-100 text-green-800"
                        : product.tag.color === "blue"
                          ? "bg-blue-100 text-blue-800"
                          : product.tag.color === "yellow"
                            ? "bg-yellow-100 text-yellow-800"
                            : product.tag.color === "orange"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {product.tag.text}
                  </span>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#FF6B35] text-lg">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </p>
                  {product.originalPrice && (
                    <p className="text-sm text-gray-500 line-through">
                      R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={toggleFavorite}
                      className={`p-2 rounded-full ${isFavorite ? "text-red-500" : "text-gray-400 hover:text-red-500"}`}
                    >
                      <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
                    </button>
                    <button className="flex items-center px-3 py-1.5 bg-[#FF6B35] text-white text-sm rounded hover:bg-[#e85a2a] transition-colors">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/produtos/${product.id}`} className="block h-full">
      <div className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow relative h-full flex flex-col">
        <button
          onClick={toggleFavorite}
          className={`absolute top-2 right-2 z-10 p-2 rounded-full bg-white shadow-sm ${
            isFavorite ? "text-red-500" : "text-gray-400 hover:text-red-500"
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
        </button>

        <div className="h-48 bg-gray-100 overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={192}
            height={192}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span
              className={`inline-block text-xs px-2 py-1 rounded ${
                product.tag.color === "green"
                  ? "bg-green-100 text-green-800"
                  : product.tag.color === "blue"
                    ? "bg-blue-100 text-blue-800"
                    : product.tag.color === "yellow"
                      ? "bg-yellow-100 text-yellow-800"
                      : product.tag.color === "orange"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-gray-100 text-gray-800"
              }`}
            >
              {product.tag.text}
            </span>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
            </div>
          </div>

          <h3 className="font-medium text-gray-800 mb-1 line-clamp-2 flex-1">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2 truncate">Vendido por: {product.seller}</p>

          <div className="flex justify-between items-center mt-auto">
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
    </Link>
  )
}
