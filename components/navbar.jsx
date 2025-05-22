"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, User, Menu, X, Search } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo e nome da loja */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center text-white mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              <span className="text-xl font-semibold text-gray-800">Recifeirinha</span>
            </Link>
          </div>

          {/* Barra de pesquisa - visível apenas em desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
            <div className="w-full relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
              />
            </div>
          </div>

          {/* Links de navegação - visível apenas em desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-[#FF6B35] transition-colors flex items-center space-x-1">
              <span>Produtos</span>
            </Link>
            <Link href="/" className="text-gray-600 hover:text-[#FF6B35] transition-colors flex items-center space-x-1">
              <span>Artesãos</span>
            </Link>
            <Link href="/" className="text-gray-600 hover:text-[#FF6B35] transition-colors flex items-center space-x-1">
              <span>Sobre</span>
            </Link>
          </div>

          {/* Ícones de usuário e carrinho */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-[#FF6B35] transition-colors flex items-center space-x-1"
            >
              <User className="h-6 w-6" />
              <span className="hidden md:inline">Entrar</span>
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-[#FF6B35] transition-colors flex items-center space-x-1 relative"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="hidden md:inline">Carrinho</span>
              <span className="absolute -top-2 -right-2 bg-[#FF6B35] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
            {/* Botão do menu mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-[#FF6B35] transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex items-center mb-4">
              <div className="w-full relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                />
              </div>
            </div>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-gray-600 hover:text-[#FF6B35] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link
                href="/"
                className="block text-gray-600 hover:text-[#FF6B35] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Artesãos
              </Link>
              <Link
                href="/"
                className="block text-gray-600 hover:text-[#FF6B35] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
