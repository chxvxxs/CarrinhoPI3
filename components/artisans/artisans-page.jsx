"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, MapPin, Star, Filter } from "lucide-react"

export default function ArtisansPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  // Dados simulados de artesãos
  const artisans = [
    {
      id: 1,
      name: "Maria das Rendas",
      category: "Rendas e Bordados",
      location: "Olinda, PE",
      rating: 4.8,
      reviews: 124,
      description: "Artesã especializada em rendas tradicionais e bordados feitos à mão, com mais de 30 anos de experiência.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E",
      productCount: 15,
      featured: true,
    },
    {
      id: 2,
      name: "João do Barro",
      category: "Cerâmica",
      location: "Caruaru, PE",
      rating: 4.9,
      reviews: 87,
      description: "Mestre ceramista que cria peças únicas inspiradas na cultura popular do agreste pernambucano.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E",
      productCount: 23,
      featured: true,
    },
    {
      id: 3,
      name: "Dona Carmem",
      category: "Doces e Compotas",
      location: "Recife, PE",
      rating: 4.7,
      reviews: 56,
      description: "Produtora de doces tradicionais pernambucanos, como bolo de rolo, cartola e cocada.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E",
      productCount: 18,
      featured: false,
    },
    {
      id: 4,
      name: "Severino das Cordas",
      category: "Instrumentos Musicais",
      location: "Petrolina, PE",
      rating: 4.6,
      reviews: 42,
      description: "Fabricante de instrumentos musicais tradicionais nordestinos, como rabeca, zabumba e triângulo.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E",
      productCount: 12,
      featured: false,
    },
    {
      id: 5,
      name: "Coletivo Mulheres de Barro",
      category: "Cerâmica",
      location: "Tracunhaém, PE",
      rating: 4.9,
      reviews: 78,
      description: "Grupo de mulheres artesãs que produzem peças em cerâmica, mantendo viva a tradição local.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E",
      productCount: 31,
      featured: true,
    },
    {
      id: 6,
      name: "Mestre Galdino",
      category: "Esculturas",
      location: "Bezerros, PE",
      rating: 4.8,
      reviews: 63,
      description: "Escultor que trabalha com madeira e barro, criando peças que retratam o folclore nordestino.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E",
      productCount: 19,
      featured: false,
    },
  ]

  // Categorias únicas para o filtro
  const categories = ["all", ...new Set(artisans.map((artisan) => artisan.category))]

  // Filtrar artesãos com base na pesquisa e categoria
  const filteredArtisans = artisans.filter((artisan) => {
    const matchesSearch = artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         artisan.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || artisan.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  // Artesãos em destaque
  const featuredArtisans = artisans.filter((artisan) => artisan.featured)

  return (
    <div>
      {/* Cabeçalho */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossos Artesãos</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Conheça os talentosos artesãos e produtores que mantêm viva a tradição e a cultura pernambucana através de seu trabalho
        </p>
      </div>

      {/* Barra de pesquisa e filtros */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar artesãos por nome ou descrição..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:w-auto w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            <Filter className="h-5 w-5 mr-2" />
            Filtrar por categoria
          </button>
        </div>

        {/* Filtros de categoria */}
        {showFilters && (
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6 border">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedCategory === category
                      ? "bg-[#FF6B35] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category === "all" ? "Todas as categorias" : category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Artesãos em destaque */}
      {searchTerm === "" && selectedCategory === "all" && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Artesãos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArtisans.map((artisan) => (
              <div key={artisan.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <div className="relative">
                  <div className="h-48 bg-gray-100">
                    <Image
                      src={artisan.image || "/placeholder.svg"}
                      alt={artisan.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-[#FF6B35] text-white text-xs px-2 py-1 rounded-full">
                    Destaque
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{artisan.name}</h3>
                  <p className="text-[#FF6B35] font-medium mb-2">{artisan.category}</p>
                  <div className="flex items-center mb-3">
                    <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-600">{artisan.location}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-700 ml-1">{artisan.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">({artisan.reviews} avaliações)</span>
                    <span className="text-sm text-gray-500 ml-auto">{artisan.productCount} produtos</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{artisan.description}</p>
                  <a
                    href={`/artesaos/${artisan.id}`}
                    className="block w-full text-center py-2 bg-[#FF6B35] text-white rounded-md hover:bg-[#e85a2a] transition-colors"
                  >
                    Ver perfil e produtos
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lista de artesãos */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {searchTerm || selectedCategory !== "all"
            ? `Resultados da busca (${filteredArtisans.length})`
            : "Todos os Artesãos"}
        </h2>

        {filteredArtisans.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Nenhum artesão encontrado</h3>
            <p className="text-gray-600">
              Tente ajustar seus filtros ou termos de busca para encontrar o que procura.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtisans.map((artisan) => (
              <div key={artisan.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex md:flex-col">
                  <div className="w-1/3 md:w-full h-32 md:h-48 bg-gray-100">
                    <Image
                      src={artisan.image || "/placeholder.svg"}
                      alt={artisan.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 md:w-full p-4 md:p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{artisan.name}</h3>
                    <p className="text-[#FF6B35] font-medium text-sm mb-2">{artisan.category}</p>
                    <div className="flex items-center mb-2">
                      <MapPin className="h\
