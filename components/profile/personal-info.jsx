"use client"

import { useState } from "react"

export default function PersonalInfo() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: "João da Silva",
    email: "joao.silva@email.com",
    phone: "(81) 98765-4321",
    cpf: "123.456.789-00",
    birthdate: "1990-05-15",
    gender: "male",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSuccessMessage("")

    try {
      // Simulação de atualização
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSuccessMessage("Informações atualizadas com sucesso!")
      setIsEditing(false)
    } catch (error) {
      console.error("Erro ao atualizar informações", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Informações Pessoais</h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            Editar
          </button>
        )}
      </div>

      {successMessage && <div className="mb-6 p-3 bg-green-50 text-green-700 rounded-md text-sm">{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-3 py-2 border rounded-md ${
                isEditing
                  ? "border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                  : "border-gray-200 bg-gray-50"
              }`}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-3 py-2 border rounded-md ${
                isEditing
                  ? "border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                  : "border-gray-200 bg-gray-50"
              }`}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-3 py-2 border rounded-md ${
                isEditing
                  ? "border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                  : "border-gray-200 bg-gray-50"
              }`}
            />
          </div>

          <div>
            <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-3 py-2 border rounded-md ${
                isEditing
                  ? "border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                  : "border-gray-200 bg-gray-50"
              }`}
            />
          </div>

          <div>
            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-1">
              Data de nascimento
            </label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-3 py-2 border rounded-md ${
                isEditing
                  ? "border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                  : "border-gray-200 bg-gray-50"
              }`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gênero</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="h-4 w-4 text-[#FF6B35] focus:ring-[#FF6B35]"
                />
                <span className="ml-2 text-sm text-gray-700">Masculino</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="h-4 w-4 text-[#FF6B35] focus:ring-[#FF6B35]"
                />
                <span className="ml-2 text-sm text-gray-700">Feminino</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="h-4 w-4 text-[#FF6B35] focus:ring-[#FF6B35]"
                />
                <span className="ml-2 text-sm text-gray-700">Outro</span>
              </label>
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="mt-8 flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-[#FF6B35] text-white rounded-md hover:bg-[#e85a2a] transition-colors disabled:opacity-50"
            >
              {isLoading ? "Salvando..." : "Salvar alterações"}
            </button>
          </div>
        )}
      </form>
    </div>
  )
}
