"use client"

import { useState } from "react"
import ProfileSidebar from "./profile-sidebar"
import PersonalInfo from "./personal-info"
import Addresses from "./addresses"
import OrderHistory from "./order-history"
import AccountSettings from "./account-settings"
import Favorites from "./favorites"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal-info")

  // Renderiza o componente correspondente à aba ativa
  const renderTabContent = () => {
    switch (activeTab) {
      case "personal-info":
        return <PersonalInfo />
      case "addresses":
        return <Addresses />
      case "orders":
        return <OrderHistory />
      case "settings":
        return <AccountSettings />
      case "favorites":
        return <Favorites />
      default:
        return <PersonalInfo />
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar de navegação do perfil */}
      <div className="w-full md:w-1/4">
        <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Conteúdo principal */}
      <div className="w-full md:w-3/4">
        <div className="bg-white rounded-lg shadow-sm p-6">{renderTabContent()}</div>
      </div>
    </div>
  )
}
