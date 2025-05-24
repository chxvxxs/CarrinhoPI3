"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, User, Menu, X, Search } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo e nome da loja */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FF6B35] rounded-full flex items-center justify-center text-white mr-2 sm:mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <span className="text-lg sm:text-xl font-semibold text-gray-800">Recifeirinha</span>
            </Link>
          </div>

          {/* Barra de pesquisa - visível apenas em desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-6">
            <div className="w-full relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] text-sm"
              />
            </div>
          </div>

          {/* Links de navegação - visível apenas em desktop */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link href="/" className="text-gray-600 hover:text-[#FF6B35] transition-colors text-sm xl:text-base">
              Início
            </Link>
            <Link
              href="/produtos"
              className="text-gray-600 hover:text-[#FF6B35] transition-colors text-sm xl:text-base"
            >
              Produtos
            </Link>
            <Link
              href="/artesaos"
              className="text-gray-600 hover:text-[#FF6B35] transition-colors text-sm xl:text-base"
            >
              Artesãos
            </Link>
            <Link href="/sobre" className="text-gray-600 hover:text-[#FF6B35] transition-colors text-sm xl:text-base">
              Sobre
            </Link>
            <Link href="/contato" className="text-gray-600 hover:text-[#FF6B35] transition-colors text-sm xl:text-base">
              Contato
            </Link>
          </div>

          {/* Ícones de usuário e carrinho */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link
              href="/perfil"
              className="text-gray-600 hover:text-[#FF6B35] transition-colors flex items-center space-x-1"
            >
              <User className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="hidden sm:inline text-sm">Perfil</span>
            </Link>
            <Link
              href="/carrinho"
              className="text-gray-600 hover:text-[#FF6B35] transition-colors flex items-center space-x-1 relative"
            >
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="hidden sm:inline text-sm">Carrinho</span>
              <span className="absolute -top-2 -right-2 bg-[#FF6B35] text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center text-[10px] sm:text-xs">
                3
              </span>
            </Link>
            {/* Botão do menu mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-600 hover:text-[#FF6B35] transition-colors ml-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-white">
            {/* Barra de pesquisa mobile */}
            <div className="flex items-center mb-4">
              <div className="w-full relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] text-sm"
                />
              </div>
            </div>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-gray-600 hover:text-[#FF6B35] transition-colors py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/produtos"
                className="block text-gray-600 hover:text-[#FF6B35] transition-colors py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link
                href="/artesaos"
                className="block text-gray-600 hover:text-[#FF6B35] transition-colors py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Artesãos
              </Link>
              <Link
                href="/sobre"
                className="block text-gray-600 hover:text-[#FF6B35] transition-colors py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/contato"
                className="block text-gray-600 hover:text-[#FF6B35] transition-colors py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
