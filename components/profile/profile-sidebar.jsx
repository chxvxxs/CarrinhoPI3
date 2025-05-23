"use client"

import { User, MapPin, ShoppingBag, Settings, Heart } from "lucide-react"

export default function ProfileSidebar({ activeTab, setActiveTab }) {
  // Lista de abas disponíveis
  const tabs = [
    {
      id: "personal-info",
      label: "Informações Pessoais",
      icon: <User className="h-5 w-5" />,
    },
    {
      id: "addresses",
      label: "Meus Endereços",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      id: "orders",
      label: "Meus Pedidos",
      icon: <ShoppingBag className="h-5 w-5" />,
    },
    {
      id: "favorites",
      label: "Favoritos",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      id: "settings",
      label: "Configurações da Conta",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Cabeçalho do perfil */}
      <div className="p-6 border-b">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center">
            <span className="text-[#FF6B35] text-xl font-bold">JD</span>
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-800">João da Silva</h2>
            <p className="text-sm text-gray-500">joao.silva@email.com</p>
            <span className="inline-block mt-1 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
              Cliente desde 2023
            </span>
          </div>
        </div>
      </div>

      {/* Menu de navegação */}
      <nav className="p-4">
        <ul className="space-y-1">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                  activeTab === tab.id ? "bg-[#FF6B35] bg-opacity-10 text-[#FF6B35]" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botão de logout */}
      <div className="p-4 border-t">
        <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span>Sair da conta</span>
        </button>
      </div>
    </div>
  )
}
