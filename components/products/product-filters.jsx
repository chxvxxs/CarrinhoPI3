"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function ProductFilters() {
  const [expandedSections, setExpandedSections] = useState(["category", "price"])
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    priceRange: [0, 100],
    tags: [],
    rating: 0,
  })

  const toggleSection = (section) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const categories = [
    { id: "doces", name: "Doces", count: 15 },
    { id: "roupas", name: "Roupas", count: 23 },
    { id: "artesanato", name: "Artesanato", count: 18 },
    { id: "bebidas", name: "Bebidas", count: 12 },
    { id: "acessorios", name: "Acessórios", count: 9 },
    { id: "musica", name: "Música", count: 7 },
  ]

  const tags = [
    { id: "artesanal", name: "Artesanal", count: 25 },
    { id: "organico", name: "Orgânico", count: 12 },
    { id: "sustentavel", name: "Sustentável", count: 8 },
    { id: "tradicional", name: "Tradicional", count: 15 },
    { id: "local", name: "Local", count: 30 },
  ]

  return (
    <div className="bg-white border rounded-lg p-4">
      <h3 className="font-semibold text-gray-800 mb-4">Filtros</h3>

      {/* Categorias */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("category")}
          className="flex items-center justify-between w-full text-left font-medium text-gray-800 mb-3"
        >
          Categorias
          {expandedSections.includes("category") ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        {expandedSections.includes("category") && (
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-[#FF6B35] focus:ring-[#FF6B35] border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">{category.name}</span>
                <span className="ml-auto text-xs text-gray-500">({category.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Faixa de preço */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full text-left font-medium text-gray-800 mb-3"
        >
          Preço
          {expandedSections.includes("price") ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.includes("price") && (
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                placeholder="Max"
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="priceRange" className="h-4 w-4 text-[#FF6B35] focus:ring-[#FF6B35]" />
                <span className="ml-2 text-sm text-gray-700">Até R$ 25</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="priceRange" className="h-4 w-4 text-[#FF6B35] focus:ring-[#FF6B35]" />
                <span className="ml-2 text-sm text-gray-700">R$ 25 - R$ 50</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="priceRange" className="h-4 w-4 text-[#FF6B35] focus:ring-[#FF6B35]" />
                <span className="ml-2 text-sm text-gray-700">R$ 50 - R$ 100</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="priceRange" className="h-4 w-4 text-[#FF6B35] focus:ring-[#FF6B35]" />
                <span className="ml-2 text-sm text-gray-700">Acima de R$ 100</span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Tags */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("tags")}
          className="flex items-center justify-between w-full text-left font-medium text-gray-800 mb-3"
        >
          Características
          {expandedSections.includes("tags") ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.includes("tags") && (
          <div className="space-y-2">
            {tags.map((tag) => (
              <label key={tag.id} className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-[#FF6B35] focus:ring-[#FF6B35] border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">{tag.name}</span>
                <span className="ml-auto text-xs text-gray-500">({tag.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Avaliação */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("rating")}
          className="flex items-center justify-between w-full text-left font-medium text-gray-800 mb-3"
        >
          Avaliação
          {expandedSections.includes("rating") ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        {expandedSections.includes("rating") && (
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center">
                <input type="radio" name="rating" className="h-4 w-4 text-[#FF6B35] focus:ring-[#FF6B35]" />
                <div className="ml-2 flex items-center">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-gray-700">e acima</span>
                </div>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Botões de ação */}
      <div className="space-y-2">
        <button className="w-full py-2 bg-[#FF6B35] text-white rounded-md hover:bg-[#e85a2a] transition-colors">
          Aplicar filtros
        </button>
        <button className="w-full py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
          Limpar filtros
        </button>
      </div>
    </div>
  )
}
