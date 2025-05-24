"use client"

import { useState } from "react"
import { Filter, Grid, List, ChevronDown } from "lucide-react"
import ProductCard from "./product-card"
import ProductFilters from "./product-filters"

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("relevance")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  // Dados simulados de produtos
  const allProducts = [
    {
      id: 1,
      name: "Bolo de Rolo Tradicional",
      price: 25.9,
      originalPrice: 29.9,
      seller: "Doces da Boa Vista",
      rating: 4.8,
      reviews: 124,
      category: "Doces",
      tag: { text: "Artesanal", color: "green" },
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Ccircle cx='12' cy='8' r='7'%3E%3C/circle%3E%3Cpolyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'%3E%3C/polyline%3E%3C/svg%3E",
    },
    {
      id: 2,
      name: "Camisa Recife Antigo",
      price: 49.9,
      seller: "Moda Pernambucana",
      rating: 4.5,
      reviews: 89,
      category: "Roupas",
      tag: { text: "Feito à mão", color: "blue" },
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E",
    },
    {
      id: 3,
      name: "Café Especial Pernambucano",
      price: 32.5,
      originalPrice: 38.0,
      seller: "Cafeteria do Marco Zero",
      rating: 4.9,
      reviews: 156,
      category: "Bebidas",
      tag: { text: "Orgânico", color: "yellow" },
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M18 8h1a4 4 0 0 1 0 8h-1'%3E%3C/path%3E%3Cpath d='M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z'%3E%3C/path%3E%3Cline x1='6' y1='1' x2='6' y2='4'%3E%3C/line%3E%3Cline x1='10' y1='1' x2='10' y2='4'%3E%3C/line%3E%3Cline x1='14' y1='1' x2='14' y2='4'%3E%3C/line%3E%3C/svg%3E",
    },
    {
      id: 4,
      name: "Artesanato em Barro",
      price: 45.0,
      seller: "Artesanato Caruaru",
      rating: 4.7,
      reviews: 67,
      category: "Artesanato",
      tag: { text: "Tradicional", color: "orange" },
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      id: 5,
      name: "CD Frevo Moderno",
      price: 22.9,
      seller: "Música Pernambucana",
      rating: 4.6,
      reviews: 43,
      category: "Música",
      tag: { text: "Local", color: "purple" },
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M9 18V5l12-2v13'%3E%3C/path%3E%3Ccircle cx='6' cy='18' r='3'%3E%3C/circle%3E%3Ccircle cx='18' cy='16' r='3'%3E%3C/circle%3E%3C/svg%3E",
    },
    {
      id: 6,
      name: "Bolsa Artesanal",
      price: 59.9,
      seller: "Couro & Arte",
      rating: 4.4,
      reviews: 78,
      category: "Acessórios",
      tag: { text: "Sustentável", color: "green" },
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Crect x='2' y='7' width='20' height='14' rx='2' ry='2'%3E%3C/rect%3E%3Cpath d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      id: 7,
      name: "Tapioca Gourmet",
      price: 18.5,
      seller: "Sabores do Nordeste",
      rating: 4.3,
      reviews: 92,
      category: "Doces",
      tag: { text: "Sem glúten", color: "blue" },
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpath d='M8 12h8'%3E%3C/path%3E%3Cpath d='M12 8v8'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      id: 8,
      name: "Chapéu de Palha",
      price: 35.0,
      seller: "Tradição Nordestina",
      rating: 4.2,
      reviews: 56,
      category: "Acessórios",
      tag: { text: "Proteção UV", color: "yellow" },
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5'%3E%3C/path%3E%3Cpath d='M8.5 8.5v.01'%3E%3C/path%3E%3Cpath d='M16 15.5v.01'%3E%3C/path%3E%3Cpath d='M12 12v.01'%3E%3C/path%3E%3C/svg%3E",
    },
  ]

  // Calcular produtos para a página atual
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = allProducts.slice(startIndex, endIndex)
  const totalPages = Math.ceil(allProducts.length / itemsPerPage)

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      {/* Cabeçalho da página */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Produtos Artesanais</h1>
        <p className="text-gray-600 text-sm sm:text-base">Descubra o melhor da cultura pernambucana</p>
      </div>

      {/* Barra de ferramentas */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm sm:text-base"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </button>
          <span className="text-sm text-gray-600">{allProducts.length} produtos encontrados</span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
          {/* Ordenação */}
          <div className="relative w-full sm:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] w-full sm:w-auto text-sm"
            >
              <option value="relevance">Mais relevantes</option>
              <option value="price-low">Menor preço</option>
              <option value="price-high">Maior preço</option>
              <option value="rating">Melhor avaliados</option>
              <option value="newest">Mais recentes</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>

          {/* Modo de visualização */}
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 ${viewMode === "grid" ? "bg-[#FF6B35] text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${viewMode === "list" ? "bg-[#FF6B35] text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-6 lg:gap-8">
        {/* Filtros laterais */}
        {showFilters && (
          <div className="w-full lg:w-64 flex-shrink-0 mb-6 lg:mb-0">
            <ProductFilters />
          </div>
        )}

        {/* Lista de produtos */}
        <div className="flex-1">
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                : "space-y-4"
            }
          >
            {currentProducts.map((product) => (
              <div key={product.id} className={viewMode === "grid" ? "h-full" : ""}>
                <ProductCard product={product} viewMode={viewMode} />
              </div>
            ))}
          </div>

          {/* Paginação */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-2 sm:px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 text-sm"
                >
                  Anterior
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-2 sm:px-3 py-2 border rounded-md text-sm ${
                      currentPage === page
                        ? "bg-[#FF6B35] text-white border-[#FF6B35]"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-2 sm:px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 text-sm"
                >
                  Próximo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
