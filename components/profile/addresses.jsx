"use client"

import { useState } from "react"
import { MapPin, Plus, Pencil, Trash2 } from "lucide-react"

export default function Addresses() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Casa",
      recipient: "João da Silva",
      street: "Rua das Flores, 123",
      neighborhood: "Boa Viagem",
      city: "Recife",
      state: "PE",
      zipCode: "51020-170",
      isDefault: true,
    },
    {
      id: 2,
      name: "Trabalho",
      recipient: "João da Silva",
      street: "Av. Agamenon Magalhães, 456",
      neighborhood: "Derby",
      city: "Recife",
      state: "PE",
      zipCode: "52010-040",
      isDefault: false,
    },
  ])

  const [isAddingAddress, setIsAddingAddress] = useState(false)
  const [editingAddressId, setEditingAddressId] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    recipient: "",
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    zipCode: "",
    isDefault: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const resetForm = () => {
    setFormData({
      name: "",
      recipient: "",
      street: "",
      neighborhood: "",
      city: "",
      state: "",
      zipCode: "",
      isDefault: false,
    })
  }

  const handleAddAddress = () => {
    setIsAddingAddress(true)
    resetForm()
  }

  const handleEditAddress = (address) => {
    setEditingAddressId(address.id)
    setFormData({ ...address })
  }

  const handleCancelEdit = () => {
    setIsAddingAddress(false)
    setEditingAddressId(null)
    resetForm()
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editingAddressId) {
      // Atualizar endereço existente
      setAddresses(
        addresses.map((address) => {
          if (address.id === editingAddressId) {
            return { ...formData, id: editingAddressId }
          }
          // Se o novo endereço for padrão, remover padrão dos outros
          if (formData.isDefault && address.id !== editingAddressId) {
            return { ...address, isDefault: false }
          }
          return address
        }),
      )
    } else {
      // Adicionar novo endereço
      const newAddress = {
        ...formData,
        id: Date.now(),
      }

      // Se o novo endereço for padrão, atualizar os outros
      if (newAddress.isDefault) {
        setAddresses(
          addresses
            .map((address) => ({
              ...address,
              isDefault: false,
            }))
            .concat(newAddress),
        )
      } else {
        setAddresses([...addresses, newAddress])
      }
    }

    // Resetar o formulário e estado
    setIsAddingAddress(false)
    setEditingAddressId(null)
    resetForm()
  }

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id))
  }

  const handleSetDefault = (id) => {
    setAddresses(
      addresses.map((address) => ({
        ...address,
        isDefault: address.id === id,
      })),
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Meus Endereços</h2>
        {!isAddingAddress && !editingAddressId && (
          <button
            onClick={handleAddAddress}
            className="flex items-center px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            Adicionar endereço
          </button>
        )}
      </div>

      {/* Lista de endereços */}
      {!isAddingAddress && !editingAddressId && (
        <div className="space-y-4">
          {addresses.length === 0 ? (
            <div className="text-center py-8">
              <MapPin className="h-12 w-12 mx-auto text-gray-400 mb-3" />
              <p className="text-gray-500">Você ainda não tem endereços cadastrados.</p>
              <button
                onClick={handleAddAddress}
                className="mt-4 px-4 py-2 bg-[#FF6B35] text-white rounded-md hover:bg-[#e85a2a] transition-colors"
              >
                Adicionar endereço
              </button>
            </div>
          ) : (
            addresses.map((address) => (
              <div
                key={address.id}
                className={`border rounded-lg p-4 ${address.isDefault ? "border-[#FF6B35] bg-orange-50" : ""}`}
              >
                <div className="flex justify-between">
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-medium text-gray-800">{address.name}</h3>
                      {address.isDefault && (
                        <span className="ml-2 text-xs bg-[#FF6B35] text-white px-2 py-0.5 rounded-full">Padrão</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{address.recipient}</p>
                    <p className="text-sm text-gray-600">{address.street}</p>
                    <p className="text-sm text-gray-600">
                      {address.neighborhood}, {address.city} - {address.state}
                    </p>
                    <p className="text-sm text-gray-600">CEP: {address.zipCode}</p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => handleEditAddress(address)}
                      className="p-1.5 text-gray-500 hover:text-[#FF6B35] rounded-full hover:bg-gray-100"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteAddress(address.id)}
                      className="p-1.5 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100"
                      disabled={address.isDefault}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                {!address.isDefault && (
                  <button
                    onClick={() => handleSetDefault(address.id)}
                    className="mt-3 text-sm text-[#FF6B35] hover:text-[#e85a2a]"
                  >
                    Definir como endereço padrão
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      )}

      {/* Formulário de adição/edição de endereço */}
      {(isAddingAddress || editingAddressId) && (
        <form onSubmit={handleSubmit} className="border rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            {editingAddressId ? "Editar endereço" : "Adicionar novo endereço"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome do endereço
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: Casa, Trabalho"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                required
              />
            </div>

            <div>
              <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-1">
                Nome do destinatário
              </label>
              <input
                type="text"
                id="recipient"
                name="recipient"
                value={formData.recipient}
                onChange={handleChange}
                placeholder="Quem vai receber as entregas"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                Endereço completo
              </label>
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
                placeholder="Rua, número, complemento"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                required
              />
            </div>

            <div>
              <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700 mb-1">
                Bairro
              </label>
              <input
                type="text"
                id="neighborhood"
                name="neighborhood"
                value={formData.neighborhood}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                required
              />
            </div>

            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                CEP
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="00000-000"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                required
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                Cidade
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                required
              />
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                Estado
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                required
              >
                <option value="">Selecione</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="isDefault"
                  checked={formData.isDefault}
                  onChange={handleChange}
                  className="h-4 w-4 text-[#FF6B35] focus:ring-[#FF6B35] border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Definir como endereço padrão</span>
              </label>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleCancelEdit}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#FF6B35] text-white rounded-md hover:bg-[#e85a2a] transition-colors"
            >
              {editingAddressId ? "Atualizar endereço" : "Adicionar endereço"}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
